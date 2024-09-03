# Welcome To Aiport name & region search

## Setup The Project

- Clone the repository on your local
- Execute `npm install` on the same path as root directory of your project
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_LOGIN_PASS>,
    "database": "Airport_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`

## Tables

### Location
- country_code,
- region_name,
- iata,
- icao,
- airport,
- latitude,
- longitude

