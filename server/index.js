import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);
app.use('/user', userRoutes);
const CONNECTION_URL = 'mongodb+srv://memeverse:memeverse123@cluster0.zggnz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, console.log(`server running on ${PORT}`)))
.catch((err)=> console.log(error.message))
