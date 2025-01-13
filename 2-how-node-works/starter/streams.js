const fs = require('fs');
const server = require('http').createServer();


server.on('request', (req, res) => {
    // solution 1
    // fs.readFile('test-file.txt', (err, data) => {
    //     if(err) console.log('received an error');
    //     res.end(data)
    // })

    // solution 2
    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', chunk => {
    //     res.write(chunk);
    // })
    // readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end("file not found!")
    // })
    // readable.on('end', () => {
    //     res.end();
    // });

    //solution 3
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
});

server.listen(9000, '127.0.0.1', () => {
    console.log('Listening...')
});
