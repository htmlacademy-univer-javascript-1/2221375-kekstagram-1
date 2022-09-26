const getRandomPositiveInt = (left, right) => {
  if (left === right){
    return left;
  }
  if (right < left) {
    left = left + right;
    right = left - right;
    left = left - right;
  }
  return Math.floor(Math.random() * (right - left + 1) + left);
};

const checkMaxLenght = (testableStr, maxLenght) => {
  if (typeof testableStr !== 'string') {
    testableStr = String(testableStr);
  }
  return testableStr.Lenght <= maxLenght;
};

getRandomPositiveInt(1, 3);
checkMaxLenght(1, 3);

