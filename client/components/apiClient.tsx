import request from 'superagent'

export async function getTodos() {
  const response = await request.get('URL from data goes here')
  return response.body
}
