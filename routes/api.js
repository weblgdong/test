var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://182.92.233.153:27017/api");

db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("数据库连接成功");
});

var PersonSchema = new mongoose.Schema({
    name : { type:String },
});

var axios = require('axios');

router.get('/', function (req, res) {
  var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=wx82b02817ba27f655&secret=6e0c0defa64b9e1652de6b4248c82613&js_code=021olty11Ftf112COCy11Bh6y11olty6&grant_type=authorization_code'
  axios.get(url, {
    headers: {
      referer: 'https://servicewechat.com/wx82b02817ba27f655/devtools/page-frame.html',
      host: 'api.weixin.qq.com'
    },
    params: req.query
  }).then((response) => {
    console.log(response);
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})


module.exports = router;