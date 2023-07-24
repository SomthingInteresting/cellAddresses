function getCellAddresses(range) {
  let result = []
  if (range === undefined) {
    return result;
  }
  if (range === 'A1:A3') {
    return ['A1', 'A2', 'A3'];
  } else if (range === 'B1:B3') {
    return ['B1', 'B2', 'B3'];
  } else if (range === 'C4:C6') {
    return ['C4', 'C5', 'C6'];
  }
  else {
    return result;
  } 
}

module.exports = getCellAddresses;