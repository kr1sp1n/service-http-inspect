
docker-build:
	docker build -t kr1sp1n/service-http-request:latest .

docker-push:
	docker push kr1sp1n/service-http-request:latest

start:
	npm start
