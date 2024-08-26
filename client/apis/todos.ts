import request from 'superagent'

const rootUrl = '/api/v1'

export function getTodos(): Promise<string[]> {
  return request.get(rootUrl + '/todos').then((res) => {
    return res.body
  })
}
