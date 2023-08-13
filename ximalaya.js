var body = $response.body;
var responseBody = JSON.parse(body);

// 遍历header中的item项，找到title为818的项并删除
//responseBody.header = responseBody.header.filter(item => item.item.title !== '818');

// 删除header中的所有item项
if (responseBody['header']) {
    responseBody['header'] = [];
}

body = JSON.stringify(responseBody);

//console.log(body);

$done(body);
