import express from 'express'
import morgan from 'morgan'
import pkg from "../package.json"

import {createRoles} from "./libs/initialSetup"
import privatesRoutes from './routes/private.routes'
import authRoutes from './routes/auth.routes'
import usersRoutes from './routes/user.routes'

const app = express()
createRoles();

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

app.use('/private', privatesRoutes)
app.use('/auth', authRoutes)
app.use('/users', usersRoutes)


export default app;


