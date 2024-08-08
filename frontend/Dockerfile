#Version de SO
FROM node:20.5.0-alpine3.18

#Se crea un grupo y un usario dentro de ese grupo
RUN addgroup equipo2 && adduser -S -G equipo2 equipo2

#Se asigna el usuario que se va a emplear para trabajar
USER equipo2

#Se asigna el directorio de trabajo
WORKDIR /app/

#Se usa para copiar todos los archivos que comiencen con "package" y terminen con ".json"
COPY --chown=equipo2 package*.json .

#Se corre un comando al crear la imagen para instalar npm install
RUN npm install

#Se copia todo lo que esta dentro de front
COPY --chown=equipo2 . .

#Se declara el puerto en el que va a trabajar
EXPOSE 5173

#Se inicializa un entorno de desarrollo desde el principio
CMD [ "npm", "run", "start" ]