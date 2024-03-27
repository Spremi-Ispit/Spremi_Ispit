npm install pm2 -g

pm2 start app.js
pm2 logs
pm2 stop app
pm2 start app.js "MY APP" --watch
pm2 stop "MY APP"
pm2 delete all
pm2 ls
pm2 restart 0 //0 is the ID of application
pm2 log 0 //0 is the ID of application
pm2 monit
pm2 log 2

```
pm2 start npm --name "my-app" -- run start
```

- **pm2 start** - This is the command to start a new process in pm2
- **npm** - This tells pm2 that you’re going to run a npm command
- **-- run start** - This is the npm command you’re running. The run start command will look in your package.json file for a script named “start” and run it.

# backendDevelopment

```
pm2 start npm --name "backendDevelopment" -- run start --watch
```

# frontendProduction

pm2 start npm --name "frontendProduction" -- run start --watch
