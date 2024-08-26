export async function seed(knex) {
  await knex('todos').del()
  await knex('todos').insert([
    {
      task: 'Where the Wild Things Are, Maurice Sendak',
      description: 'Book',
      completed: 0,
      user_id: 'Alicia',
    },
    {
      task: 'Killing Eve (2018)',
      description: 'TV Show',
      completed: 0,
      user_id: 'Alicia',
    },
    {
      task: 'Isle of Dogs (2018)',
      description: 'Movie',
      completed: 0,
      user_id: 'Alicia',
    },
    // { task: '', description: '', completed: 0, user_id: 'Alicia' },
  ])
}
