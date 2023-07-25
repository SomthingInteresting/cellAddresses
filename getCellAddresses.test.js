const getCellAddresses = require('./getCellAddresses');

describe("getCellAddresses", () => {
  it("Range F12:J17", function() {
    expect(getCellAddresses("F12:J17")).toEqual([
        'F12', 'G12', 'H12', 'I12',
        'J12', 'F13', 'G13', 'H13',
        'I13', 'J13', 'F14', 'G14',
        'H14', 'I14', 'J14', 'F15',
        'G15', 'H15', 'I15', 'J15',
        'F16', 'G16', 'H16', 'I16',
        'J16', 'F17', 'G17', 'H17',
        'I17', 'J17'
    ]);
  });

  it("will return an empty array", () => { 
    expect(getCellAddresses()).toEqual([])
  });

  it("Range A1:A3", () => {
    expect(getCellAddresses('A1:A3')).toEqual(['A1', 'A2', 'A3']);
  });

  it("Range B1:B3", () => {
    expect(getCellAddresses('B1:B3')).toEqual(['B1', 'B2', 'B3']);
  });

  it("Range C4:C6", () => {
    expect(getCellAddresses('C4:C6')).toEqual(['C4', 'C5', 'C6']);
  })
  
  it("Range B3:D5", function() {
    expect(getCellAddresses("B3:D5")).toEqual([
        'B3', 'C3', 'D3',
        'B4', 'C4', 'D4',
        'B5', 'C5', 'D5'
    ]);
  });
  
  it("Range A1:B2", function() {
    expect(getCellAddresses("A1:B2")).toEqual(['A1', 'B1', 'A2', 'B2']);
  });
  
  it("Range W118:Z124", function() {
    expect(getCellAddresses("W118:Z124")).toEqual([
        'W118', 'X118', 'Y118', 'Z118',
        'W119', 'X119', 'Y119', 'Z119',
        'W120', 'X120', 'Y120', 'Z120',
        'W121', 'X121', 'Y121', 'Z121',
        'W122', 'X122', 'Y122', 'Z122',
        'W123', 'X123', 'Y123', 'Z123',
        'W124', 'X124', 'Y124', 'Z124'
    ]);
  });
  
  // it("Range H7:F3 (invalid)", function() {
  //   assert.deepEqual(getCellAddresses("H7:F3"), []);
  // });
  
  // it("Range C2:C2 (invalid)", function() {
  //   assert.deepEqual(getCellAddresses("C2:C2"), []);
  // });

})

