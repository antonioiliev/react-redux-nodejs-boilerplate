import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import config from './config';

// Load all .env variables to the process
dotenv.config();

// global.knex = require('knex')({
// 	client: 'mysql',
// 	connection: {
// 	  host : process.env.DB_HOST,
// 	  user : process.env.DB_USER,
// 	  password : process.env.DB_PASSWORD,
// 	  database : process.env.DB_NAME
// 	}
// });

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

var indexRouter = express.Router();

indexRouter.get('*', async (req, res) => {
	res.send('API');
});

app.use(config.baseUrl, indexRouter);


app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`))