var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const theIndex = map[target - num];
    if (theIndex !== undefined) {
      return [theIndex, i];
    } else {
      map[num] = i;
    }
  }
  return [];
};

// console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
