//import JSON server
const jsonServer = require('json-server')

//create json server using create method
const mediaPlayerServer = jsonServer.create()

//create path for json file(data) using router()
const router = jsonServer.router("db.json")

//create middleware to parse json 
const middleware = jsonServer.defaults()

//allow server to use router and middleware
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//setup port for the server to run

PORT = 3000 || process.env.PORT

//Listen to the request
mediaPlayerServer.listen(PORT,()=>{
    console.log(`server running successfully at ${PORT}`);
})