import enviroment from '../enviroment'
import {
  RefreshTokenDocument,
  RefreshTokenMutation
} from '../generated/graphql'

const url = enviroment.url + '/graphql'

export const refreshToken = async (): Promise<RefreshTokenMutation | null> => {
  const token = localStorage.getItem('token') ?? null

  if (!token) return null

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token
    },
    body: JSON.stringify({ query: RefreshTokenDocument.loc?.source.body })
  }).then((res): Promise<{ data: RefreshTokenMutation }> => res.json())

  return res.data
}
