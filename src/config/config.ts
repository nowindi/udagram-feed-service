export const config = {
  'dev': {
    'username': 'dbadmin',
    'password': 'JjdorA4dEt5Man_sdlF',
    'database': 'postgres',
    'host': "udagram-project4-microservices.cdnyj1kcpjyt.eu-west-1.rds.amazonaws.com",
    'dialect': "postgres",
    'aws_region': 'eu-west-1',
    'aws_profile': 'default',
    'aws_media_bucket': 'udagram-jrey-dev',
    'url': 'http://127.0.0.1:8081/',
  },
  'prod': {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
  // 'jwt': {
  //   'secret': process.env.JWT_SECRET,
  // },
};
