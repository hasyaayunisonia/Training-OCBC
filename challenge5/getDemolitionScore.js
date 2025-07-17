function getDemolitionScore(arr, k) {
  const memo = new Map();

  function dfs(array, moves) {
    const key = array.join(",") + "|" + moves;
    if (memo.has(key)) return memo.get(key);

    if (moves === 0 || array.length === 0) return 0;

    let maxScore = 0;

    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      const left = array.slice(0, i);
      const right = array.slice(i + 1);

      let newArr;
      if (left.length > right.length) {
        newArr = weaken(left, value);
      } else {
        newArr = weaken(right, value);
      }

      const score = value + dfs(newArr, moves - 1);
      maxScore = Math.max(maxScore, score);
    }

    memo.set(key, maxScore);
    return maxScore;
  }

  function weaken(partition, value) {
    return partition.map((v) => Math.max(0, v - value));
  }

  return dfs(arr, k);
}

const arr = [10, 2, 8, 5];
const k = 2;
console.log(getDemolitionScore(arr, k));
