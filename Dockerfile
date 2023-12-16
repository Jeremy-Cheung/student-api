FROM openjdk:17-jdk-slim
COPY server/target/server-0.0.1-SNAPSHOT.jar /app/server-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/app/server-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080