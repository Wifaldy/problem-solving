function timeConversion(s) {
  const arr = s.split(":");
  if (arr[2].slice(-2) === "AM") {
    if (arr[0] === "12") {
      return "00:" + arr[1] + ":" + arr[2].slice(0, -2);
    } else {
      return arr[0] + ":" + arr[1] + ":" + arr[2].slice(0, -2);
    }
  } else {
    if (arr[0] == "12") {
      return arr[0] + ":" + arr[1] + ":" + arr[2].slice(0, -2);
    } else {
      return parseInt(arr[0]) + 12 + ":" + arr[1] + ":" + arr[2].slice(0, -2);
    }
  }
}

console.log(timeConversion("12:05:45PM"));
