const transpose = function(matrix) {
  const transposed = [];
  for (let row = 0; row < matrix[0].length; row++) {
    const newArr = [];
    for (let col = 0; col < matrix.length; col ++) {
      newArr.push(matrix[col][row]);
    }
    transposed.push(newArr);
  }
  return transposed;
};


const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));

  const arr = [horizontalJoin, verticalJoin];
  for (const list of arr) {
    for (const l of list) {
      if (l.includes(word)) return true;
    }
  }
  
  return false;
};


const r = wordSearch(
  [
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ],
  'AYH'
);

console.log(r);

module.exports = wordSearch;
