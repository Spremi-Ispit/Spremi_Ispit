sudo apt update
sudo apt install docker.io -y
docker ps -a

// ------------------------------------------

docker stop <container_id_or_name>
docker rm <container_id_or_name>

or

docker rm -f <container_id_or_name>
