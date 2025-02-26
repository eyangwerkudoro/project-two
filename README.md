
  

<p  align="center">

  

<a  href="http://nestjs.com/"  target="blank"><img  src="https://nestjs.com/img/logo_text.svg"  width="320"  alt="Nest Logo"  /></a>

  

</p>

  

  

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master

  

[travis-url]: https://travis-ci.org/nestjs/nest

  

[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux

  

[linux-url]: https://travis-ci.org/nestjs/nest

  

<p  align="center">A progressive <a  href="http://nodejs.org"  target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a  href="https://angular.io"  target="blank">Angular</a>.</p>

  

<p  align="center"><a  href="https://www.npmjs.com/~nestjscore"><img  src="https://img.shields.io/npm/v/@nestjs/core.svg"  alt="NPM Version"  /></a>  <a  href="https://www.npmjs.com/~nestjscore"><img  src="https://img.shields.io/npm/l/@nestjs/core.svg"  alt="Package License"  /></a>  <a  href="https://www.npmjs.com/~nestjscore"><img  src="https://img.shields.io/npm/dm/@nestjs/core.svg"  alt="NPM Downloads"  /></a>  <a  href="https://travis-ci.org/nestjs/nest"><img  src="https://api.travis-ci.org/nestjs/nest.svg?branch=master"  alt="Travis"  /></a>  <a  href="https://travis-ci.org/nestjs/nest"><img  src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux"  alt="Linux"  /></a>  <a  href="https://coveralls.io/github/nestjs/nest?branch=master"><img  src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5"  alt="Coverage"  /></a>  <a  href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img  src="https://badges.gitter.im/nestjs/nestjs.svg"  alt="Gitter"  /></a>  <a  href="https://opencollective.com/nest#backer"><img  src="https://opencollective.com/nest/backers/badge.svg"  alt="Backers on Open Collective"  /></a>  <a  href="https://opencollective.com/nest#sponsor"><img  src="https://opencollective.com/nest/sponsors/badge.svg"  alt="Sponsors on Open Collective"  /></a>  <a  href="https://paypal.me/kamilmysliwiec"><img  src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>  <a  href="https://twitter.com/nestframework"><img  src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a></p>

  

<!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)

  

[![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

  

  

## Description

  

  

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

  

  

## Installation

  

  

```bash

  

$ npm install

  

```

  

  

## Running the app

  

  

```bash

  

# development

  

$ npm run start

  

  

# watch mode

  

$ npm run start:dev

  

  

# production mode

  

$ npm run start:prod

  

```

  

  

## Test

  

  

```bash

  

# unit tests

  

$ npm run test

  

  

# e2e tests

  

$ npm run test:e2e

  

  

# test coverage

  

$ npm run test:cov

  

```

  

## About App

 - **Parking lot Module**
 This API about schema Parking  including create parking slot, add vehicle in available slot, vehicle leaving, and status or slot.
 
	**Basic data structure**

        { slotData:
       [ { no: 0, status: 0, vehicle: '' },
         { no: 1, status: 0, vehicle: '' },
         { no: 2, status: 0, vehicle: '' },
         { no: 3, status: 0, vehicle: '' },
         { no: 4, status: 0, vehicle: '' },
         { no: 5, status: 0, vehicle: '' },
         { no: 6, status: 0, vehicle: '' },
         { no: 7, status: 0, vehicle: '' },
         { no: 8, status: 0, vehicle: '' } ] }

	**Description:** 
	**no**: slot number
	**status**: slot status (1= unavailable, 0=available)
	**vehicle**: identification number of vehicle

	**Services**
		
	 - **create slot**
First create slot with specific count
	 - **parking**
	 add new vehicle in available slot
	 - **leaving**
	 remove vehicle from slot list, and make slot available for incoming vehicle
	 - **status**
	 checking status of parking slot


	
 - **Country Module**
 API provide for Country CRUD data with **mock**, see: `project-two\project-two\src\country\mocks\countries.mock.ts`

	Building with **TypeScript** language and using <a  href="http://nodejs.org"  target="blank">Node.js</a> as a framework.  

	**Services**
	- 	**Get Countries**
		Getting all country data

	-  **Get Country By ID**
		Getting country data by Id, and data will provide by specific Id

	-  **Add Country**
		Adding new data, and returning new country data

	-  **Delete Country**
		Return data after removed by Id

**Unit Test**

Unit test is part of testing all functions in program with expected result as a response. In this app, unit test creating for all controller and services.

## Screenshot folder

This folder provide the screenshots of output when app running by Postman, all collections also include on this folder so you can import it in Postman to see the output.

## Support

  

  

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

  

  

## Stay in touch

  

  

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)

  

- Website - [https://nestjs.com](https://nestjs.com/)

  

- Twitter - [@nestframework](https://twitter.com/nestframework)

  

  

## License

  

  

Nest is [MIT licensed](LICENSE).