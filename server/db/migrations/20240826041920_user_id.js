export async function up(knex) {
  return knex.schema.table('todos', (table) => {
    table.integer('user_id')
  })
}

export async function down(knex) {
  return knex.schema.table('todos', (table) => {
    table.dropColumn('user_id')
  })
}
