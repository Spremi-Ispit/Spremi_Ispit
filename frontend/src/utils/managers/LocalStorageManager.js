class LocalStorageManager {
  getState(stateKey) {
    if (localStorage.getItem(stateKey)) {
      return JSON.parse(localStorage.getItem(stateKey));
    }

    return undefined;
  }

  getAppVersion() {
    return localStorage.getItem(keys.version);
  }

  setAppVersion(version) {
    localStorage.setItem(keys.version, version);
  }
}

export const keys = {
  app: 'app',
  home: 'home',
  profile: 'profile',
  viewPost: 'viewPost',
  users: 'users',
  version: 'version',
};

export const localStorageManager = new LocalStorageManager();
