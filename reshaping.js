const tf = require('@tensorflow/tfjs');

const tensor2D = tf.tensor([
  [1, 2],
  [3, 4],
  [5, 6],
]);
tensor2D.print();

const reshaped = tensor2D.reshape([2, 3, 1]);
reshaped.print();
