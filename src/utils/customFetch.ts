type FetchWrapper = <T>(
  endpoint: string,
  {
    body,
    token,
    method,
    ...customConfiguration
  }?: ({ body: unknown; token?: string } & Omit<RequestInit, 'body'>) | Record<string, string>,
) => Promise<T>

export const fetchWrapper: FetchWrapper = async (
  endpoint: string,
  { body, token, method, ...customConfiguration } = {},
) => {
  const config: RequestInit = {
    method: method ? method : body ? 'POST' : 'GET',
    ...customConfiguration,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token && `Bearer ${token}`,
      ...(customConfiguration?.headers as Record<string, string>),
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  const response = await fetch(endpoint, config)
  const data = await response.json()

  return await data
}
