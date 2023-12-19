const dgram = require('node:dgram');
const pb_tool = require("../pb_data_tool");
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
    console.error(`server error:\n${err.stack}`);
    server.close();
});

server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    const pb_tool_inst2 = new pb_tool("./data_protocol/dd_info.proto", "DdInfo")
    const pb_msg_data = pb_tool_inst2.pb_decode(msg)
    console.log(pb_msg_data,pb_msg_data.speed)
});

server.on('listening', () => {
    const address = server.address();
    const dd_info =
        {
            "timer": 0,
            "isCurrent": true,
            "standpoint": 1,
            "type": "dd",
            "name": "dd_1",
            "canvas_width": 1920,
            "canvas_height": 938,
            "width": 640,
            "height": 640,
            "aspectRatio": 2.04690831556503,
            "fov": 1.0471975511966,
            "near": 0.1,
            "far": 10000000000,
            "fovy": 0.549835209186167,
            "x": -2766556.62165462,
            "y": 5095363.44032656,
            "z": 2648920.14018392,
            "heading": 165.011911701873,
            "pitch": 0.0875856358380318,
            "roll": 1.2467265462588e-09,
            "id": 1,
            "executor": 0,
            "allocatorType": "",
            "matters": 0.3,
            "speed": 1000
        };
    const pb_tool_inst2 = new pb_tool("./data_protocol/dd_info.proto", "DdInfo")
    const dd_info_data_buffer = pb_tool_inst2.pb_encode(dd_info)
    server.send(dd_info_data_buffer, 10001, '192.168.1.12');
    console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(10001, "192.168.1.11");
