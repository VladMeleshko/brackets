module.exports = function check(str, bracketsConfig) {
  // your solution
  const arr = str.split('');
  let row = 0;
  while (row < arr.length) {
    for (let r = 0; r < bracketsConfig.length; r++) {
        let open = bracketsConfig[r][0];
        let close = bracketsConfig[r][1];
        if (arr[row] === open) {
          if(arr[row + 1] === close){
            arr.splice(row, 2);
            row -= 2;
          }
        } 
      }
    row++;
  }
  if (arr.length === 0){
    return true;
  } else {
    return false;
  }
}
