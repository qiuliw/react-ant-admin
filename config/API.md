登录
```JSON
/ApiAppstore/newlogin POST
返回数据
{
    "code": 0,
    "msg": "\u767b\u5165\u6210\u529f",
    "data": {
    "access_token":"Tof1wdX3AEVzbLzgvfx7RmVPjsfG1xYJ4qAL4rsTmaAFmh94BjX5pwUiwdbWBiU4x7ci4e9Sxjs8t5t6ydbO5hVpg=fdXDvyBmCH=bVdgGuvzK-av5wjOHd5Uns969v=eFTX6LeDftCcG"
    }
}
```

获取用户信息
```JSON
/appstore/api/user_session GET
{
    "username": xxxxx
    "password": xxxxx
    "clientid": 1714545147000
}
{
"code": 0,
"msg": "\u6210\u529f",
"data": {
"id": "50282398",
"username": "NVbRelqQ",
"sex": "\u4fdd\u5bc6",
"role": "1",
"merchant_id": "55"
}
}
