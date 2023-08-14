import express, { Application, Request, Response } from 'express'

import routes from './routes'

import { MySQL } from './scripts'

MySQL.connect();

const app: Application = express()
const port = 3000

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1', routes);

app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the Ame API! \n Endpoints available at http://localhost:${port}/api/v1` })
})


try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port} 🚀`)
    })
} catch (error: any) {
    console.log(`Error occurred: ${error.message}`)
}