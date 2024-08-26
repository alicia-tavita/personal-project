export async function seed(knex) {
  await knex('users').del()
  await knex('users').insert([{ name: 'Alicia' }])
}
