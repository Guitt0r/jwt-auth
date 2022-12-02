import express from 'express'
import bodyParser from "body-parser";
import AppRouter from "./routes";
import {connectDB} from "./db/connectDB";
import 'dotenv/config'
import cors from 'cors'

const app = express()
const router = new AppRouter(app)

connectDB()

app.set('port', process.env.PORT || 5000)
app.use(cors({
    origin: 'http://localhost:3000',
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

router.init()

const port = app.get('port')

app.listen(port, () => console.log(`Server started on port ${port}`))