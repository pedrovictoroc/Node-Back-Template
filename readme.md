Many thanks for the creators of [this readme template repository!!!](https://github.com/kriasoft/Folder-Structure-Conventions)

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project was made intending to be reusable and easy to extend, following and adapting some of the bests patterns and file structures

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This project was made using the following libraries:

* [TypeScript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/)
* [Nodemon](https://nodemon.io/)
* [Cross Env](https://github.com/kentcdodds/cross-env#readme)
* [Node PostgreSQL](https://node-postgres.com/)
* [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)
* [Jest](https://jestjs.io/)
* [Supertest](https://github.com/visionmedia/supertest#readme)
* [Swagger-ui-express](https://github.com/scottie1984/swagger-ui-express#readme)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Setting Up

Go to the .env file and modify as you need. If you want to use the same docker script but with different parameters, remember to use the same values in the .env and in the script

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pedrovictoroc/Node-Back-Template.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Settup .env file
   ```sh
   JWT_SECRET = ""
   PORT = ""
   SHOULD_RESTART_DATABASE = ""
   DATABASE_USER = ""
   DATABASE_HOST = ""
   DATABASE_NAME = ""
   DATABASE_PASSWORD = ""
   DATABASE_PORT = ""
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## File Structure

    .
    ├── build                   
    ├── src
    |   ├── ApiHandlers
    |   ├── Controllers
    |   ├── Infrastructure
    |   |   ├── Handlers
    |   |   ├── Migrations
    |   |   ├── Repository
    |   |   └── Database.ts
    |   ├── Interfaces
    |   |   ├── Filters
    |   |   ├── Migration
    |   |   ├── Get
    |   |   ├── Post
    |   |   └── Put
    |   ├── Services
    |   ├── swagger
    |   |   ├── Models
    |   |   └── Paths
    |   ├── tests
    |   |   ├── Repository
    |   |   └── Service
    |   ├── index.ts
    |   ├── server.ts   
    |   └── jest.config.ts    
    ├── tsconfig.json            
    ├── .env     
    ├── .gitignore
    ├── docker.up
    └── README.md

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Feel free to clone this repository and extend as you wish

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>