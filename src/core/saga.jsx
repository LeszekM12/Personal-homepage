import { all } from "redux-saga/effects";
import {personalHomepageSaga} from "../features/personalHomepageSaga";

export default function* saga() {
    yield all([
        personalHomepageSaga()
    ]);
}