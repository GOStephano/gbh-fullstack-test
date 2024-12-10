# GBH Backend setup

## Setup for backend development

1. Install nodejs 18.x, it is recommended to install a node version manager like [nvm](https://github.com/nvm-sh/nvm)

   ```sh
   # If using nvm:
   nvm install 18.15.0
   ```

2. Setup a postgresql server. The easiest way is to use the docker-compose script at the root of the repository (docker must be installed):

   ```sh
   # run the postgres service
   docker compose up postgres -d
   ```

   You can also install postgresql directly on your machine.

3. You can now install dependencies, create the database and apply migrations/seeds (from backend folder):

   ```sh
   # Install dependencies
   npm install
   ```

4. You can run the application with `npm run start:dev`
