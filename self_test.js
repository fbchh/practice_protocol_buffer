const pb_tool = require("./pb_data_tool")

const weather_data = {
        result: {
            location: {
                areacode: '123456789', //区域ID
                name: '台海地区', //区域中文名
                country: '中国', //所属国家中文名
            },
            realtime: {
                text: '晴天', //天气现象，string类型
                code: '01', //天气现象编码，string类型
                temp: 22.5, //气温，单位℃，double类型
                feels_like: 6, //体感温度，单位℃，int类型
                rh: 38, //相对湿度，单位%，int类型
                wind_class: '2级', //蒲福氏风级，string类型
                wind_speed: 2.5, //风速，单位m/s，double类型
                wind_dir: '南风', //风向，string类型
                wind_angle: 187, //风向角度，0表示正北，180表示正南，int类型
                prec: 0.0, //过去1小时降水量，单位毫米(mm)，double类型
                clouds: 10, //云量，单位%，int类型
                vis: 12085, //能见度，单位米(m)，int类型
                pressure: 1020, //气压，单位百帕(hPa)，int类型
                dew: -6, //露点温度，单位℃，int类型
                uv: 2, //紫外线指数，int类型
                snow: 0.0, //降雪量，单位厘米(cm)，double类型 #国内城市不支持#
                // weight: 0, //文案权重，int类型
                // brief: '今日惊蛰', //天气短文案，string类型
                // detail: '今日惊蛰，春雷惊百虫', //天气长文案 ，string类型
            },
            last_update: '2021-03-05 19:07:44', //数据更新时间(北京时间)
        },
    };//天气数据

const pb_tool_inst = new pb_tool("./data_protocol/area_weather.proto","Weather")
const weather_data_buffer = pb_tool_inst.pb_encode(weather_data)
console.log(weather_data_buffer,Buffer.byteLength(weather_data_buffer))

const target_ship_data = {
    "name": "考斯彭号",
    "id": "CG-63",
    "start_time": "1991年3月9日",
    "ship_length": 172.82,
    "ship_width": 20,
    "engine_conf": "四台通用电气LM 2500燃气涡轮发动机,2个推进轴",
    "water_discharge": "9600",
    "ship_speed": "(max)>30",
    "weapon_conf": "MK41垂直发射系统标准导弹(MR);垂直发射 ASROC (VLA) 导弹;战斧巡航导弹;六枚 MK 46 鱼雷;两门 MK 45 5 英寸/54 口径轻型火炮;两个方阵近战武器系统",
    "ship_aircraft_conf": "两架 SH-60 海鹰",
    "defense_radius": 30000,
    "attack_radius": 10000
}
const pb_tool_inst1 = new pb_tool("./data_protocol/target_ship.proto","TargetShip")
const target_ship_data_buffer = pb_tool_inst1.pb_encode(target_ship_data)
console.log(target_ship_data_buffer,Buffer.byteLength(target_ship_data_buffer))

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
const pb_tool_inst2 = new pb_tool("./data_protocol/dd_info.proto","DdInfo")
const dd_info_data_buffer = pb_tool_inst2.pb_encode(dd_info)
console.log(dd_info_data_buffer,Buffer.byteLength(dd_info_data_buffer))
