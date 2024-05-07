function fiboEvenSum(n) {
  if(n === 2) return 2;
  if(n <= 1) return 0;
  let result = 2;
  let p1 = 1;
  let p2 = 2;
  for(let i = 3; i < n; i++) {
    const temp = p2;
    p2 = p1 + p2;
    p1 = temp;
    if (p2 > n) {
      break;
    } else if (p2 % 2 === 0) {
      result += p2;
    }
  }
  return result;
}
