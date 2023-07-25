## Task

Your task is to write a getCellAddresses(range) function that takes a range of Google Sheets cells as a parameter, and returns an array of addresses of all cells in the specified range.

example

### Notes

Letters in addresses: from A-Z (Google Sheets should not be confused with Excel spreadsheets. In Excel, the "Z" column is followed by "AA", etc. In Google Sheets, the last column is "Z")

The final array must be sorted by the number in each address (ascending)

The letters in the addresses must go in alphabetical order (A to Z).

For example, if the range is "A1:C3", the function should return [ 'A1', 'B1', 'C1', 'A2', 'B2', 'C2', 'A3', 'B3', 'C3' ],
not [ 'B1', 'A1', 'C1', 'C2', 'B2', 'A2', 'A3', 'C3', 'B3' ] or something else.

If an invalid range is passed to the function, the function should return [].
The ranges that are considered to be invalid:

Those in which the first cell is further away than the second.
Example: H7:F3
Those in which two identical cells are specified.
Example: C2:C2
In Google Sheets you cannot find such a range, because it is considered as one cell. For this reason, such a range is invalid in this kata.

More examples
"B1:H5":

[
    'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1',
    'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 
    'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 
    'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4',
    'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5'
]
"A2:B3":

[ 'A2', 'B2', 'A3', 'B3' ]
"A1:A5":

[ 'A1', 'A2', 'A3', 'A4', 'A5' ]
"X8:Z20":

[
    'X8',  'Y8',  'Z8',  
    'X9',  'Y9',  'Z9',  
    'X10', 'Y10', 'Z10', 
    'X11', 'Y11', 'Z11',
    'X12', 'Y12', 'Z12',
    'X13', 'Y13', 'Z13', 
    'X14', 'Y14', 'Z14', 
    'X15', 'Y15', 'Z15', 
    'X16', 'Y16', 'Z16', 
    'X17', 'Y17', 'Z17',
    'X18', 'Y18', 'Z18', 
    'X19', 'Y19', 'Z19', 
    'X20', 'Y20', 'Z20'
]
"E345:J346":

[
    'E345', 'F345', 'G345', 'H345', 'I345', 'J345',
    'E346', 'F346', 'G346', 'H346', 'I346', 'J346'
]

Sudo:

- create an empty array (let result)
- split into two start and end by : input.split(':')
- sliced variable number = start number
- sliced variable letter = start letter
- sliced variable number = end number
- sliced variable letter = end letter
- Work out the range of letters that we need to print
- for (let i = startLetter.charCodeAt(); i <= endLetter.charCodeAt(); i++)
- For each number between start number and end number {
  - For each letter between start and end letter range{
    - Push letter + number to result
  - }}
- return result

Refactoring for error handling:

- Return an empty array if given invalid range