import { getRepositories} from "./personalHomepageAPI";
import { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError} from "./personalHomepageSlice";
import {call, put, takeLatest} from "redux-saga/effects";

function* fetchRepositoriesHandler({ payload: username }) {
    try {
        const repositories = yield call(getRepositories, username);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError(error));
    }
}

export function* personalHomepageSaga() {
    yield takeLatest(fetchRepositories, fetchRepositoriesHandler);
}