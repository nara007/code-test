import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import bowerSearchApi from './slices/bowerSearch';

export const store = configureStore({
    reducer: {
        [bowerSearchApi.reducerPath]: bowerSearchApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bowerSearchApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
