<h1 align="center">OBB-Sys</h1>
<p align="center">Vet web application</p>
<p align="center">
  <img src="https://github.com/wojciechkubiak/obb-api/blob/master/OBB.png?raw=true"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Made%20by-wojciechkubiak-success"/>
  <img src="https://img.shields.io/badge/ExpressJS-4.17.1-informational"/>
  <img src="https://img.shields.io/badge/Sequelize-5.21.3-informational"/>
  <img src="https://img.shields.io/badge/Babel-7.8.3-informational"/>
</p>


## Technologies used
* NodeJS / ExpressJS
* Sequelize
* JWT

## What this app is about

This application allows vet to store and modify animal research data. It's main purpose is to replace spreadsheets and store data in the cloud. Additionally, the application has an authentication system ensuring data protection, the ability to generate PDF and possibility to check data on the interactive charts.

## How can I install this app

In case you want to use it locally, all you have to do is to install current LTS version of [NodeJS](https://nodejs.org/en/) and [PostgreSQL](https://www.postgresql.org/download/), then follow 4 steps:

* ### `npm install`

Installs all dependencies needed to run API. <br />In case of outdated dependencies, try to run `npm audit fix`. <br />I'm trying to fix such things as fast as possible, but sometimes it just takes a while. 
<br />Most of times app is going to work even after error messages calling to use `audit` option <br />(not the ones that say you couldn't install dependencies - in case of such errors, check your internet connection). 

* ### Create database

As next step, you have to create PostgreSQL database. <br />
[For Windows Users](https://doc.odoo.com/install/windows/postgres)

* ### Set environment variables

Next you have to set [environment variables](https://www.npmjs.com/package/dotenv) by creating .env file in root folder. In this file you have to specify four variables called:

```LOCAL_NAME``` - database name\
```LOCAL_HOST``` - host, *default "5432"*\
```LOCAL_USER``` - user with privileges to modify data\
```LOCAL_PASS``` - user password\

* ### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Thanks to nodemon, API will reload if you make edits.
