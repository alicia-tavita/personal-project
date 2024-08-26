import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getTodos } from '../apis/todos.ts'

export async function useTodos() {
  const query = await useQuery({ queryKey: ['todos'], queryFn: getTodos })
  return {
    ...query,
  }
}
