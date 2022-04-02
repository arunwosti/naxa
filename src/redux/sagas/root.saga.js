import {takeLatest} from 'redux-saga/effects'
import { handleGetServices } from './handler/services'
import{ GET_SERVICES} from '../services/service.reducer'


export function* watcherSaga(){

    yield takeLatest(GET_SERVICES, handleGetServices);
}