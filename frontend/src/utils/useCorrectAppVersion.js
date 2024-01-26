import React, { useEffect } from 'react';
import PackageJSON from '../../package.json';
import { localStorageManager } from './managers/LocalStorageManager';

const useCorrectAppVersion = () => {
  useEffect(() => {
    const version = localStorageManager.getAppVersion();
    const actualVersion = PackageJSON.version;

    if (version !== actualVersion) {
      localStorage.clear();
      // ---------HARD RELOAD---------
      // https://stackoverflow.com/questions/2099201/javascript-hard-refresh-of-current-page
      const url = new URL(window.location.href);
      url.searchParams.set('reloadTime', Date.now().toString());
      window.location.href = url.toString();
      // --------------------------
      localStorageManager.setAppVersion(actualVersion);
    }
  }, []);
};

export default useCorrectAppVersion;
