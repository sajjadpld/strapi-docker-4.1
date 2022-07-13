module.exports = ({ env }) => ({
  connection: {
    // client: 'postgres',
    client: process.env.DATABASE_CLIENT,
    connection: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      // ssl: Boolean(process.env.DATABASE_SSL),
      ssl: false,
    },
  },
});
