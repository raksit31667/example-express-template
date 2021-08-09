import server from "./server"

const port = process.env.PORT || 8888

const start = async () => {
    try {
        await server.listen(port, () => {
            console.log(`Starting server on ${port}...`)
        })
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
start()