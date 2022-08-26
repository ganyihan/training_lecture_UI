import getdata from "./fetch.js";

//专门一个js用于封装api
//发送请求，拉取数据
const stockdata = {
  getData: () => {
    return getdata({
      url: "/data/data.json",
      method: "GET",
      params: {},
    });
  },

  getData1: () => {
    return getdata({
      url: "/data/data1.json",
      method: "GET",
      params: {},
    });
  },

  /*buyStock: (params) => {
    return getdata({
      url: "/data/buyStock",
      method: "POST",
      params: params,
    });
  },
    sellStock: (params) => {
    return getdata({
      url: "/data/sellStock",
      method: "POST",
      params: params,
    });
  },*/

  buyStock: (params) => {
    return getdata({
      url: "http://localhost:8082/trade/makeTrade",
      method: "POST",
      params: params,
    });
  },

  sellStock: (params) => {
    return getdata({
      url: "http://localhost:8082/trade/makeTrade",
      method: "POST",
      params: params,
    });
  },
  
  nlp: (params) => {
    return getdata({
      url: "/data/nlp",
      method: "POST",
      params: params,
    });
  },
};

export default stockdata;
