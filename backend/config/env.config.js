const config =require('dotenv');
const { path } = require('../schemas/user.schema');

config({
    path: `env.${process.env.NODE_ENV || 'devlopment'}.local`
});

export const {
    MONGO_URI, PORT, SERVER_URI, NODE_ENV,
    JWT_SECRECT, JWT_EXPRESS_IN,
}=process.env;