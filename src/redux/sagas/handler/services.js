import { call, put } from "redux-saga/effects";
import { setServices } from "../../services/service.reducer";
import { requestGetServices } from "../requests/services";

export function* handleGetServices(){

    try {
        const response = yield call(requestGetServices);
        const {data} = response;
        console.log('setservices', data)

        yield put(setServices(data));
    } catch (error) {
        console.log(error);
    }
}