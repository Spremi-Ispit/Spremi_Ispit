If npm and pm2 are installed server and working localy, but there is an error during deployment trought github actions like 'npm command not found':

`npm: command not found`

> **Note:** Reason: I use nvm for the server node environment, and nvm will not install the node environment in the /usr/local/bin/ directory, so that sudo can't find the corresponding instructions, and finally create a soft connection to solve

```
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/node" "/usr/local/bin/node"
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/npm" "/usr/local/bin/npm"
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/pm2" "/usr/local/bin/pm2"

you can test "sudo npm -v"
```

Check:

[Main link](https://github.com/appleboy/ssh-action/issues/44)

[Additional link](https://github.com/appleboy/ssh-action/issues/21)
