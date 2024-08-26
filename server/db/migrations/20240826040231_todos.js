export async function up(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id')
    table.string('task')
    table.string('description')
    table.boolean('completed')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('todos')
}
