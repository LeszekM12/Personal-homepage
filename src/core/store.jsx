import {configureStore} from '@reduxjs/toolkit';
import themeReducer from '../common/themeSlice';
import personalHomepageReducer from '../features/personalHomepageSlice';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeReducer,
        personalHomepage: personalHomepageReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;
