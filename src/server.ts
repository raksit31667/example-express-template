import express, { Request, Response } from "express"

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get("/", (req: Request, res: Response) => {
    res.send("OK")
})

export default server