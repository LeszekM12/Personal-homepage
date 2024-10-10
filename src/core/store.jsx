import {configureStore} from '@reduxjs/toolkit';
import themeReducer from '../common/themeSlice';

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default store;
