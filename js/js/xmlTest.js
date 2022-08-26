import http from "./xml";

http.ajax({//get请求调用
    url: url + '?name=哈哈&saleperson=jack',
    success: function (result, status, xhr) {
      console.log('request success...');
    },
    error: (xhr, status, error) => {
      console.log('request error...');
    }
  });

http.ajax({//post请求调用
    url: url,
    type: 'POST',
    data: {name: '哈哈'}, 
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    beforeSend: (xhr) => {
      console.log('request show loading...');
    },
    success: function (result, status, xhr) {
      console.log('request success...');
    },
    error: (xhr, status, error) => {
      console.log('request error...');
    },
    complete: (xhr, status) => {
      console.log('request hide loading...');
    }
  });