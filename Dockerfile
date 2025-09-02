# Этап 1: Сборка приложения с помощью Maven
FROM maven:3.8.5-openjdk-17 AS build

# Указываем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем pom.xml из папки store, чтобы кэшировать зависимости
COPY store/pom.xml .

# Скачиваем зависимости
RUN mvn dependency:go-offline

# Копируем остальной исходный код из папки store
COPY store/src ./src

# Собираем проект, пропуская тесты
RUN mvn clean package -DskipTests

# Этап 2: Создание финального образа на базе минимального JRE
FROM openjdk:17-jre-slim

# Указываем рабочую директорию
WORKDIR /app

# Копируем собранный .jar файл из первого этапа
COPY --from=build /app/target/store-0.0.1-SNAPSHOT.jar app.jar

# Указываем порт, который слушает приложение (Render настроит его сам)
EXPOSE 8080

# Команда для запуска приложения
ENTRYPOINT ["java", "-jar", "app.jar"]