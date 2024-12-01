const tf = require('@tensorflow/tfjs');

const tensorA = tf.tensor([
  [11, 22],
  [32, 46],
]);
const tensorB = tf.tensor([
  [34, 23],
  [29, 48],
]);

const sum = tensorA.add(tensorB);
const subtract = tensorA.sub(tensorB);
const multiply = tensorA.mul(tensorB);
const matrixMultiply = tensorA.matMul(tensorB);

console.log('sum');
sum.print();
console.log('subtract');
subtract.print();
console.log('multiply');
multiply.print();
console.log('matrix multiply');
matrixMultiply.print();
