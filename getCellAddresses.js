function getCellAddresses(range) {
  let result = []

  function isRangeValid() {
    return range !== undefined && range !== null;
  }

  if (isRangeValid()) {  
    let [start, end] = range.split(':');
    if (start !== end) {
      let startNumber = start.slice(1, start.length);
      let endNumber = end.slice(1, end.length);
      let startLetter = start.charCodeAt(0);
      let endLetter = end.charCodeAt(0);
      for (let i = startNumber; i <= endNumber; i++) {
        for (let j = startLetter; j <= endLetter; j++) {
          result.push(String.fromCharCode(j) + i);
        }
      }
    }
  }
  return result;
}

module.exports = getCellAddresses;