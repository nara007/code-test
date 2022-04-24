import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type BowerResult = {
    dependent_repos_count: number,
    dependents_count: number,
    deprecation_reason: unknown,
    name: string,
    stars: number,
    repository_url: string,
    homepage: string,
    description: string,
};

const bowerSearchApi = createApi({
    reducerPath: 'bowerSearch',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://libraries.io/api/bower-search' }),
    endpoints: (builder) => ({
        getLibrariesByName: builder.query<BowerResult[], string>({
            query: (name) => `?q=${name}`,
        }),
    }),
});

export const { useGetLibrariesByNameQuery } = bowerSearchApi;
export default bowerSearchApi;
