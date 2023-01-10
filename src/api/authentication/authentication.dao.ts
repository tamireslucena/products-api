import database from '../../database'

interface User {
  id: Number
  email: string
  encrypted_password: string
}

export default {
  findUserByEmail: async (email: string = ''): Promise<User> => {
    const user = await database.select('*').from('users').where({ email }).first()
    return user
  },
  insertUser: async ({ email, encryptedPassword }: { email: string, encryptedPassword: string }): Promise<User> => {
    const [user] = await database.table('users').insert({
      email,
      encrypted_password: encryptedPassword
    })
      .returning('*')
    return user
  }
}
