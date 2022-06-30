import fetcher from "./fetch.js";

const stockdata = {
  getData: () => {
    return fetcher({
      url: "/data/data.json",
      method: "GET",
      params: {},
    });
  },

  getData1: () => {
    return fetcher({
      url: "/data/data1.json",
      method: "GET",
      params: {},
    });
  },

  buyStock: (params) => {
    return fetcher({
      url: "/data/buyStock",
      method: "POST",
      params: params,
    });
  },

  sellStock: (params) => {
    return fetcher({
      url: "/data/sellStock",
      method: "POST",
      params: params,
    });
  },
  
  nlp: (params) => {
    return fetcher({
      url: "/data/nlp",
      method: "POST",
      params: params,
    });
  },
};

export default stockdata;
