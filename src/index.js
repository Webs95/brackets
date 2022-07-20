module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.map((item) => item.join(''));

  let bracketsStr = str.split('');
  for (let i = 0; i < bracketsStr.length; i++) {
    for (let a = 0; a < bracketsConfig.length; a++) {
      if (
        bracketsStr[i] === brackets[a][0] &&
        bracketsStr[i + 1] === brackets[a][1]
      ) {
        bracketsStr.splice(i, 2);
        i = -1;
      }
    }
  }
  return bracketsStr.length === 0 ? true : false;
};
