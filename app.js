const findPairs = (elements, sum) => {
  let size = elements.length;
  elements = elements.sort((a, b) => a - b);
  let countOut = 0;
  for (let x = 0; x < size; x++) {
    let currentSum = 0;
    let numA = elements[x];
    let numB = 0;
    for (let y = x + 1; y < size; y++) {
      numB = elements[y];
      currentSum = numA + numB;
      if (currentSum === sum) {
        console.log(`+ ${numA},${numB}`);
      } else if (currentSum > sum) {
        countOut++;
        break;
      } else {
        countOut = 0;
      }
    }
    if (countOut === 2) {
      break;
    }
  }
};

const main = () => {
  try {
    const elements = process.argv[2].split(",").map((num) => parseInt(num));
    const sum = parseInt(process.argv[3]);
    findPairs(elements, sum);
  } catch (error) {
    console.log(`Some parameters could't be processed`);
  }
};

main();
