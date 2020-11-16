type CustomConfiguration = { headers?: HeadersInit };
type HTTPMethods = "POST" | "GET" | "PUT" | "DELETE";

interface Options<U = "PUT" | "DELETE"> extends CustomConfiguration {
  body?: any;
  method?: U;
}
export function customFetch<T>(
  endpoint: string,
  { body, ...customConfiguration }: Options = {}
): Promise<T> {
  const token = process.env.REACT_APP_API_KEY;
  const headers: HeadersInit = { "Content-Type": "application/json" };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config: Options<HTTPMethods> = {
    method: body ? "POST" : "GET",
    ...customConfiguration,
    headers: {
      ...headers,
      ...customConfiguration.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  return fetch(`${process.env.REACT_APP_API_BASE_PATH}/${endpoint}`, config).then(
    async (response) => {
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    }
  );
}
