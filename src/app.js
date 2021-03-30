import express from 'express'
import morgan from 'morgan'
import pkg from "../package.json"
const app = express()

import privates from './routes/private.routes'
import authRoutes from './routes/auth.routes'


app.set('pkg', pkg)
app.use(morgan('dev'));
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
})

app.use('/private',privates)
app.use('/auth',authRoutes)


export default app;


