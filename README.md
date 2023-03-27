# Toolbox Challenge

<p align="center">
  <a href="https://www.toolboxtve.com/" target="blank"><img src="https://files.toolboxtve.com/wp-content/uploads/2018/04/15144954/logo-stycky.png" width="250" alt="Toolbox Logo" /></a>
</p>

## Ejecutar la app

### Usando Docker

En el root del projecto ejecutar el comando:

```
docker-compose up --build
```

El frontend va a ser levantado en http://localhost:8080 y el backend en http://localhost:3000

### Sin usar Docker

Para levantar la API, ejecutar los siguientes comandos en el directorio `./api` usando Node 14:

```
npm install
npm run start
```

El backend será ejecutado en http://localhost:3000

Para levantar el frontend, ejecutar los siguientes comandos en el root del proyecto usando Node 16:

```
npm install
npm run build
npm run start
```

## Endpoints

- [GET] `/ping` endpoint para probar que la API haya levantado correctamente.

```
curl --location 'localhost:3000/ping'
```

- [GET] `/files/data` trae una lista formateada y validada de archivos CSV y el contenido de los mismos. En caso de querer traer un archivo especifico se le puede agregar el queryParam `fileName` al endpoint.

```
curl --location 'localhost:3000/files/data'
```

- [GET] `/files/list` trae una lista de archivos CSV

```
curl --location 'localhost:3000/files/list'
```

## Tests

Para ejecutar los unit tests, ejecutar el siguiente comando desde el directorio `./api`

```
npm run test
```
