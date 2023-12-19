const protobuf = require("protobufjs");
const fs = require("fs");

// 加载编译后的 .proto 文件
const protoDefinition = protobuf.loadSync("./protocolbuffer_tst/message.proto");
const Person = protoDefinition.lookupType("Person");

// 创建一个 Person 实例
const person = Person.create({ id: 1, name: "John Doe", email: "john.doe@example.com" });

// 将 Person 对象序列化为字节流
const serializedData = Person.encode(person).finish();
//查看序列化后的数据
console.log(serializedData,Buffer.byteLength(serializedData))

// 在接收端反序列化
const {email, id, name} = Person.decode(serializedData);
//
// // 打印反序列化后的对象
// console.log("Received Person:");
// console.log("ID:", id);
// console.log("Name:", name);
// console.log("Email:", email);
