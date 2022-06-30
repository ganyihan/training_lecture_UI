function getdata({url, method, params}) {
  if (method == "GET") {
    const items = Object.entries(params);
    let str = "";
    for (let i = 0; i < items.length; i++) {
      if (i < items.length - 1) {
        str += items[i][0] + "=" + items[i][1] + "&";
      } else {
        str += items[i][0] + "=" + items[i][1];
      }
    }
    return fetch(str == "" ? url : `${url}?${str}`)
      .then((res) => res.json())
      .catch((err) => Promise.reject(err));
  } else {
    return fetch(url, {
      method: "POST",
      header: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .catch((err) => Promise.reject(err));
  }
};

export default getdata;
