# backend/Dockerfile
FROM openjdk:17-jdk-alpine3.14
RUN addgroup backend && adduser -S -G backend backend
USER backend
WORKDIR /app
COPY p03-0.0.1-SNAPSHOT.jar .
ENTRYPOINT ["java","-jar","/app/p03-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080