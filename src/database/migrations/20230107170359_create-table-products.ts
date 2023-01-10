import { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema.createTable('products', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.float('price').notNullable()
    table.timestamps(true, true)
  })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema.dropTable('products')
}
