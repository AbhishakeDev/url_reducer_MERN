import express from 'express'
import connectdb from './database.js'
import baseroutes from './routes/index.js'
import urlroutes from './routes/url.js'
import cors from 'cors'

const app = express()
connectdb()
app.use(cors())
app.use(express.json({
    extended: false
}))

app.get('/',(req,res) =>  res.send('this is the api'));


app.use('/', baseroutes)
app.use('/api/url/', urlroutes)
const PORT = process.env.PORT||5000
app.listen(PORT,()=>console.log(`if you see this, you are a legend. PORT NUMBER ${PORT}.`))