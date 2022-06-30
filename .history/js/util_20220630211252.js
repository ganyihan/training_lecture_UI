const formatTime = dateString => {
  // 解决安卓和IOS时间格式不同的问题
  const date = new Date(dateString.replace(/-/g, '/'));
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${[day, month, year].map(formatNumber).join('/')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

export default formatTime;