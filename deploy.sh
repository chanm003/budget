docker login
docker build -f ./api/Dockerfile . -t chanm003/budget_api:latest
docker push chanm003/budget_api:latest

docker build -f ./client/Dockerfile . -t chanm003/budget_client:latest
docker push chanm003/budget_client:latest

docker build -f ./nginx/Dockerfile ./nginx -t chanm003/budget_nginx:latest
docker push chanm003/budget_nginx:latest

docker build -f ./cac/Dockerfile ./cac -t chanm003/budget_cac:latest
docker push chanm003/budget_cac:latest

