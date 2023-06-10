const search = (val, arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (val === arr[i]) {
      return i;
    }
  }
  return -1;
};

const binary = (val, arr) => {
  let lower = 0;
  let upper = arr.length - 1;

  while (lower <= upper) {
    const middle = parseInt((lower + upper) / 2);

    if (val === arr[middle]) {
      return middle;
    }

    if (val < arr[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }

  return -1;
};

const values = [1, 3, 4, 7, 9, 10, 11, 14, 17, 20, 23];

console.log(binary(14, values));
