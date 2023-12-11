FROM openjdk:17-jdk-slim
COPY server/target/server-0.0.1-SNAPSHOT.jar server/app/server-0.0.1-SNAPSHOT.jar.jar
ENTRYPOINT ["java","-jar","server-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080