FROM maven:3.8.5-openjdk-17 AS build
COPY webapp ./webapp
WORKDIR /server
COPY server/pom.xml .
copy server/src ./src
WORKDIR /server
RUN mvn clean package

FROM openjdk:17-jdk-slim
WORKDIR /server
COPY --from=build /server/target/server-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]
EXPOSE 3000