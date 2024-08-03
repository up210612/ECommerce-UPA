# Usa una imagen base oficial de OpenJDK (Java 17 en este caso)
FROM openjdk:17-jdk-alpine

# Se crea un grupo y un usuario dentro de ese grupo
RUN addgroup equipo2BACK && adduser -S -G equipo2BACK equipo2BACK

# Se asigna el usuario que se va a emplear para trabajar
USER equipo2BACK

# Se asigna el directorio de trabajo
WORKDIR /app/

# Copia los archivos del proyecto
COPY --chown=equipo2BACK . .

# Da permisos de ejecución al script gradlew
RUN chmod +x gradlew

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación
CMD ["./gradlew", "bootRun"]
