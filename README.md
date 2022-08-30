## Technology stack

-   Express.js

-   MongoDB

-   Mongoose

-   Redis

-   multer

-   multer-gridfs-storage

## How to start

you should startup your `mongoDB` server and `redis` server, next run the flowing command

```
npm i
```

and then, run the command below

```
npm start
```

## API DOC

this project used apiDoc to generate api document,you should firstly run

```
npm i apidoc -g
```

and then

```
apidoc -i routes -o ./public/api
```

and visit [http://localhost:3000/apidoc/](http://localhost:3000/apidoc/) in your browser
