const fs = require('fs');
const start = Date.now();
const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => console.log('1st timer finished'), 0);
setImmediate(() => console.log('emmidiate has finished'));

fs.readFile('test-file.txt', () => {
    console.log('file was read');
    setTimeout(() => console.log('2nd timer finished'), 0);
    setTimeout(() => console.log('3rd timer finished'), 3000);
    setImmediate(() => console.log('emmidiate 2 has finished'));

    process.nextTick(() => console.log('process.nextTick'));

    crypto.pbkdf2Sync('password', 'salt', 10000, 1024, 'sha512');
    console.log(Date.now() - start, 'password encrypted')
    crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encrypted')
    })
    crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encrypted')
    })
    crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encrypted')
    })
});

console.log('welocme from top level code');