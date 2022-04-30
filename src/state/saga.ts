import { call, put, takeEvery } from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'

import { sagaActions } from './sagaActions'
import { fetchData } from './slice'

let getData = async () => await axios.get('https://fakestoreapi.com/products?limit=5')

function* fetchDataSaga() {
    try {
        const result: AxiosResponse<any> = yield call(getData)

        yield put(fetchData({ data: result.data }))
    } catch (error) {
        yield put({ type: sagaActions.TODO_FETCH_FAILED })
    }
}

export default function* rootSaga() {
    yield takeEvery(sagaActions.FETCH_DATA, fetchDataSaga)
}
