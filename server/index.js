import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv'

const app = express();
dotenv.config();

// set up bodyparser for properly sending out request
// in new version, bodyParser is built into express, so can use express.json() instead
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes) // every route in postRoutes will start with /posts
// this must be after cors

app.get('/', (req,res) => {
    res.send('Hello to Memories API')
})

const PORT = process.env.PORT// when push to heroku, heroku populates env PORT

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

