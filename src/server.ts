import express, { Request, Response } from "express"
import pinoHttp from "pino-http"
import { logger } from './logger'

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(pinoHttp({ logger }))

server.get("/", (req: Request, res: Response) => {
    res.send("OK")
})

export default server