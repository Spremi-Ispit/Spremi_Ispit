import React, { useEffect } from 'react';
import PackageJSON from '../../package.json';
import { localStorageManager } from '../utils/managers/LocalStorageManager';

const useCorrectAppVersion = () => {
  useEffect(() => {
    const version = localStorageManager.getAppVersion();
    const actualVersion = PackageJSON.version;

    async function handleHardReload(url) {
      await fetch(url, {
        headers: {
          Pragma: 'no-cache',
          Expires: '-1',
          'Cache-Control': 'no-cache',
        },
      });
      window.location.href = url;
      window.location.reload();
      localStorageManager.setAppVersion(actualVersion);
    }

    if (version !== actualVersion) {
      // localStorage.clear();
      // window.location.reload();
      handleHardReload(window.location.href);
    }
  }, []);
};

export default useCorrectAppVersion;
