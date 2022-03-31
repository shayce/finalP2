module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "tjf05081974",
    DB: "appointments",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };