var express = require('express');
var router = express.Router();
// 引入数据库配置文件
const db = require('./database')
// 获取student数据库中的users表数据
router.get('/users', (err,res)=>{
  const sql = 'SELECT * FROM  users';
  db.query(sql,(err,result)=>{
    if(err){
      return;
    }
    // res:API传数据
    // result:返回的数据，需要转为JSON格式
    res.json(result);
  })
});

module.exports = router;
