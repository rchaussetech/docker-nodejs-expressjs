docker stop -t 0 mynodejs
docker rm -f mynodejs
docker build . --tag mynodejs
docker run -d -p 3000:3000 --name mynodejs mynodejs
docker ps
