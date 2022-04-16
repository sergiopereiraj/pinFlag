# PINFLAG NODE JS CHALLENGE
#### Nombre proyecto: 
> Desafío para Backend Developer
#### Descripcion proyecto: 
> Desafío es tomar de base una API creada en Node.js con Express y sobre ella crear 3 endpoint:
- Un primer endpoint que haga una request a la Rick and Morty API y retorne a lo más N personajes
con su nombre, status, especie y nombre de lugar de origen solamente. El número N deberá poder ser
entregado en las requests a este endpoint. Ten en cuenta que los personajes están paginados en la API
de Rick and Morty.
- Un segundo endpoint que reciba el nombre, el status, la especie y el nombre del lugar de origen de
un personaje y lo cree (i.e. que escriba la información del personaje en una fila nueva de la tabla
character) en la base de datos utilizando Sequelize.
- Un tercer endpoint que reciba información del nombre de un personaje y lo busque en la base de datos.
Si ya existía tal personaje en la base, este endpoint deberá retornar su nombre, su status, su especie y
su nombre de lugar de origen, si no, deberá buscarlo en la Rick and Morty API y retornar la misma
infomación.
#### Instalacion:
1. Se clona repositorio desde https://bitbucket.org/pinflag/node-js-challenge/src/master/, en mi caso lo use de forma local desde Visual studio code.
2. Instalar a nivel de windown node.js
3. Instalar a nivel de windown docker
4. En terminal se no con el código `$npm install`
5. Levantar maquina virtual con Docker

### Bibliografía
###### Para la realización de este proyecto me guie por la siguientes bibliografías:
- https://axios-http.com/docs/intro
- https://guru99.es/node-js-express/
- https://sequelize.org/docs/v6/getting-started/

###### Además, utilice el siguiente apoyo audiovisual:
- https://www.youtube.com/watch?v=zsnHIlsUPSU&t=792s
- https://www.youtube.com/watch?v=r1JX0Xi8FMw&t=125s
- https://www.youtube.com/watch?v=SdsaZ-t1QwA&t=374s
- https://www.youtube.com/watch?v=_xxVJdGNMrs&t=144s
- https://www.youtube.com/watch?v=FjHDjq78zfA 
- https://stackoverflow.com/questions/60047204/successfully-post-form-data-to-express-app-use-sequelize-to-insert-into-mysql-d
- https://stackoverflow.com/questions/14528385/how-to-convert-json-object-to-javascript-array
- https://rickandmortyapi.com/documentation/#info-and-pagination