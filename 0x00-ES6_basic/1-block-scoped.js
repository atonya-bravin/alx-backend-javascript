export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  // eslint-disable-next-line
  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
} 
