function flit(ch) {
  return (ch == '0') ? '1' : '0';
}

function getFlip(str, expected) {
  let flipCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) != expected)
      flipCount++;
      expected = flit(expected);
  }
  return flipCount
}

function minFlip(str) {
  return Math.min(getFlip(str, '0'), getFlip(str, '1'))
}

let str = [1, 0, 1]
console.log(minFlip(str))

