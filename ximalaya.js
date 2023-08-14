var body = $response.body;
var responseBody = JSON.parse(body);

// 遍历header中的item项，找到title为818的项并删除
//responseBody.header = responseBody.header.filter(item => item.item.title !== '818');

// 删除header中的所有item项
//if (responseBody['header']) {
//    responseBody['header'] = [];
//}
if (responseBody.header && responseBody.header.length >= 1) {
  responseBody.header.splice(0, 1); // 删除第一项
}

body = JSON.stringify(responseBody);

//console.log(body);

$done(body);
