import React, { useEffect } from 'react';
import PackageJSON from '../../package.json';
import { localStorageManager } from '../utils/managers/LocalStorageManager';

const useCorrectAppVersion = () => {
  useEffect(() => {
    const version = localStorageManager.getAppVersion();
    const actualVersion = PackageJSON.version;

    if (version !== actualVersion) {
      localStorage.clear();
      localStorageManager.setAppVersion(actualVersion);
    }
  }, []);
};

export default useCorrectAppVersion;
