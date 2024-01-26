import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';

function handleChange() {
  const state = store.getState();
  const keys = Object.keys(state);

  keys.forEach((key) => {
    localStorage.setItem(key, JSON.stringify(state[key]));
  });
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: import.meta.env.NODE_ENV !== 'production',
});

export const unsubscribe = store.subscribe(handleChange);
window.onbeforeunload = () => {
  unsubscribe();
};

export default store;

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk was added as middleware
// - The Redux DevTools Extension is disabled for production
// Check -> https://redux-toolkit.js.org/api/configureStore
