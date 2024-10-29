import { getRepositories} from "./personalHomepageAPI";
import { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError} from "./personalHomepageSlice";
import {call, put, takeLatest, delay} from "redux-saga/effects";

function* fetchRepositoriesHandler({ payload: username }) {
    try {
        yield delay(2*1000);
        const repositories = yield call(getRepositories, username);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError(error));
    }
}

export function* personalHomepageSaga() {
    yield takeLatest(fetchRepositories, fetchRepositoriesHandler);
}