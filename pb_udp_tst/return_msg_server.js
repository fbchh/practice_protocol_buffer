const dgram = require('node:dgram');
const server = dgram.createSocket('udp4');

server.on('error', err => {
    console.error(`server error:\n${err.stack}`);
    server.close();
});

server.on('message', (msg, rinfo) => {
    // console.log(`server got: msg from ${rinfo.address}:${rinfo.port}`);
    console.log(`rec msg byte length:${Buffer.byteLength(msg)}`);
    server.send(msg, rinfo.port, rinfo.address);
});

server.on('listening', () => {
    const address = server.address();
    // server.send(Buffer.from('hello world'), 10001, '192.168.1.11');
    console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(10002, '192.168.1.11');
