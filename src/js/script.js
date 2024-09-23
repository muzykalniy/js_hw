'use strict';

const sumFunc = () => {
  let sumNum = 0;
  const sumFuncInner = (numInner) => {
    sumNum += numInner;
    return sumNum;
  };
  return sumFuncInner;
};

const sum = sumFunc();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

