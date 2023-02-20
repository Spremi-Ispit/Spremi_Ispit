# Share-Knowledge

## Database

Create docker container: 
```
docker run -p 3306:3306 --name my-mysql -e MYSQL_ROOT_PASSWORD=12345 -d mysql
```

"--name my-mysql" represents container name, not database name

Check container status:
```
docker ps -a
```

You can use MySQL Workbench client to access database. To create database there is share_knowledge_structure.sql file inside database directory and for data
use share_knowledge_structure.sql.


## Backend
```
npm i 
node index.js
```

## Frontend
```
npm i 
npm start
```
