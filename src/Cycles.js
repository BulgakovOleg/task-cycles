export function rangeSum(start, end) {
  let sum = 0;
  const firstEven = start % 2 === 0 ? start : start + 1;
  for (let i = firstEven; i <= end; i += 2) {
    sum += i;
  }
  return sum;
}

export function iterationCount(a) {
  let count = 0;
  let current = a;
  while (number>0.1) {
    current /= 2;
    count += 1;
  }
  return count;
	
}

export function symbolsReplace(message) {
  if (!message || message.length < 3) {
    return message;
  }
  const chars = message.split('');
  let i = 2; 
  do {
    chars[i] = '_';
    i += 3;
  } while (i < chars.length);
  
  return chars.join('');
}
