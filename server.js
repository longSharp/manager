const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");

//引入数据配置
const db = require("./config/keys");

//引入users.js
const users = require("./routes/api/users");

//引入profiles.js
const profiles = require("./routes/api/profiles");

//使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//初始化passport
app.use(passport.initialize());

//连接数据库
mongoose
  .connect(db.mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
  })
  .then(() => console.log("数据库连接成功"))
  .catch(err => console.log(err));

require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/profiles", profiles);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`服务器连接成功,端口号为:${port}`);
});
