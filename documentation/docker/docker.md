# Docker install

```
sudo apt update
sudo apt install docker.io -y
```

## Docker commands

```
docker ps -a
```

```
docker stop <container_id_or_name>
docker rm <container_id_or_name>
```

or

```
docker rm -f <container_id_or_name>
```

# Demo

> Create database

```
docker run -p 3306:3306 --name demo_database -e MYSQL_ROOT_PASSWORD=12345 -d mysql
```

## DOCKER BACKEND

> Create container

```
docker build -t backend-app -f Dockerfile.backend .
```

> run container

```
docker run -e HOST=192.168.43.182 -e PORT=3306 -e PASSWORD=12345 -e DB_NAME=demo -it --rm -p 3066:3006 backend-app
```

## DOCKER FRONTEND (THIS IS NOT COMPLETED)

> Create container

```
docker build -t frontend-app -f Dockerfile.frontend .
```

> run container

```
docker run -e API_URL=192.168.43.182:3066 -it --rm frontend-app
```
