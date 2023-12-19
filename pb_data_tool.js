//提供protocol的序列化和反序列化工具
const protobuf = require("protobufjs")
const fs = require("fs")

class pb_tool {
    constructor(proto_filepath,data_obj_name) {
        //加载配置 导入数据对象
        const _load_file_obj = protobuf.loadSync(proto_filepath)
        this.data_obj = _load_file_obj.lookupType(data_obj_name)
    }

    pb_encode(data_dict) {
        //数据序列化——编码
        try {
            const data_entity = this.data_obj.create(data_dict)
            return this.data_obj.encode(data_entity).finish()
        }catch (e) {
            console.log(`data encode err:${e}`)
        }
    }

    pb_decode(data_buffer) {
        //数据反序列化——解码
        try{
            return this.data_obj.decode(data_buffer)
        }catch (e) {
            console.log(`data decode err:${e}`)
        }
    }
}

module.exports = pb_tool