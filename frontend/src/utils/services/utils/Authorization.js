import { keys, localStorageManager } from '../../managers/LocalStorageManager';

export function Authorization() {
  const app = localStorageManager.getState(keys.app);
  const token = app ? app.token : undefined;

  return 'Bearer ' + token;
}
