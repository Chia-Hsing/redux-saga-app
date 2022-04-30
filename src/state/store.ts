import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './saga'
import reducer from './slice'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware] as const

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false,
        }).concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production',
})

export type Dispatch = typeof store.dispatch
export type RootState = ReturnType<typeof reducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

sagaMiddleware.run(rootSaga)

export default store
