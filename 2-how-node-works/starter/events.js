const EventEmitter = require('events');
const http = require('http')
const myEmitter = new EventEmitter();

myEmitter.on('newSale', () => {
    console.log('new sale just hapened');
})

myEmitter.on('newSale', stock => {
    console.log(`there are now ${stock} items in stock`)
})
myEmitter.emit('newSale', 19);

//////////////////

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('request received');
    res.end('request received');
})

server.on('request', (req, res) => {
    console.log('another request received');
})

server.on('close', () => {
    console.log('server closed');
})

server.listen(8888, '127.0.0.1', () => {
    console.log('waiting for requests');
})