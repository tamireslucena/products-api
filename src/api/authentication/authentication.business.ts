import * as argon2 from 'argon2'
import * as jwt from 'jsonwebtoken'
import { AuthorizationData, UserCredentials } from './authentication.schemas'
import authenticationDao from './authentication.dao'

export default {
  authenticate: async (userCredentials: UserCredentials): Promise<AuthorizationData> => {
    const user = await authenticationDao.findUserByEmail(userCredentials.email)
    if (user === undefined) throw Error('Invalid credentials')

    const passwordMatches = await argon2.verify(user?.encrypted_password, userCredentials.password)
    if (!passwordMatches) throw Error('Invalid credentials')

    return {
      token: jwt.sign({ id: user.id }, process.env.JWT_KEY ?? 'xxx', { expiresIn: 24 * 60 * 60 })
    }
  },
  createUser: async (userCredentials: UserCredentials): Promise<{ email: string }> => {
    try {
      const user = await authenticationDao.insertUser({
        email: userCredentials.email,
        encryptedPassword: await argon2.hash(userCredentials.password)
      })

      return {
        email: user.email
      }
    } catch (err) {
      throw new Error('Invalid data to create user')
    }
  }
}
