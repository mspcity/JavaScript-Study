
function solution(S) {
  let ans = 0;
  let L = [];
  for (let i = 0; i < S.length; i++){
    L.push(S[i]);
  }
  for (let i = 0; i < L.length; i++){
    if(L[i] == 'X') {
      ans++;
      L[i] = '.';
      if(i + 1 < L.length) L[i+1] = '.'
      if(i + 2 < L.length) L[i+2] = '.'
    }
  }
  return ans;
}

