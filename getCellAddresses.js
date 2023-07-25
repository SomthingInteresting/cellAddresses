function getCellAddresses(range) {
  let result = []
  if (range) {  
    let [start, end] = range.split(':');
    for (let number = start.slice(1, start.length); number <= end.slice(1, end.length); number++){
      for (let letter = start.charCodeAt(0); letter <= end.charCodeAt(0); letter++){
        result.push(String.fromCharCode(letter) + number);
      }
    }
  }
  return result;
}

module.exports = getCellAddresses;