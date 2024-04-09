Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type

This error occured once when I upadated nginx config, but it is not nginx error, somehow it was related to Vite.

After updating package.json build script with `vite build --base=/` i managed to resolve this error. In orded to make to make more test, I removed `--base=/` from build script, and expected for frontend to be broken again, but it was still working. Not sure why this happend and if it occuress again check the link below:

https://stackoverflow.com/questions/75433591/failed-to-load-module-script-expected-a-javascript-module-script-but-the-server
