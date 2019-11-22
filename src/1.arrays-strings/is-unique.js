const isUnique = (s) => {
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    if (temp.indexOf(s[i]) === -1) {
      temp += s[i];
    }
    else {
      return false;
    }
  }
  return true;
}
module.exports = isUnique;