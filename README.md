# Todolist Backend Project

## Table of Contents
- [About](#about)
- [Prequisites](#prequisites)
- [Usage](#usage)

## About <a name="about"></a>
This is a small BE project to practice using Typescript, MongoDB, and Docker

## Prequisites <a name="prequisites"></a>
- Docker
- Mongo
- NodeJS
- Typescript
- JWT

## Usage <a name="usage"></a>
1. Run ```npm i``` to install all of the existing library
2. Run following command to run docker container setup for this project
- docker-compose up
- docker exec -it todolist-container bash
- mongo -u nhuthuynh -p nrj8kueb --authenticationDatabase todolist-project
3. Copy link into database to connect with mongodb: mongodb://nhuthuynh:nrj8kueb@127.0.0.1:27017/todolist-project
4. Run ```npm run dev``` to start server