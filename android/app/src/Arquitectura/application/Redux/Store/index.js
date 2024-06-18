import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducer'; // Ajusta la ruta según la estructura de tu proyecto

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }),
});

export default store;
