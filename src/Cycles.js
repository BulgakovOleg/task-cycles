export function rangeSum(start, end) {
  let summ = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      summ += i;
    }
  }
  return summ;
}

export function iterationCount(a) {
  let count = 0;
  let number = a;
  while (number>0.1) {
    number /= 2;
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
