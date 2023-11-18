const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);

async function main(){
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected to database')
};

main().catch((err) => console.log(err));