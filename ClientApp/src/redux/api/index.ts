import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({}),
});

export default baseApi;
