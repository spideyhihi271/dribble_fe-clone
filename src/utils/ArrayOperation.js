export const swapElement = (arr, idx, option) => {
  const result = [...arr];
  switch (option) {
    case 1:
      if (idx < length - 1) {
        [result[idx], result[idx + 1]] = [result[idx + 1], result[idx]];
      }
      break;
    default:
      if (idx > 0) {
        [result[idx - 1], result[idx]] = [result[idx], result[idx - 1]];
      }
      break;
  }
  return result;
};
export const deleteElement = (arr, idx) => {
    let result = [...arr];
    result.splice(idx, 1);
    return result;
}
export const filterElementByKeyword = (arr, keyword) => {
  let newArr = arr;
  newArr.forEach((item, idx) => {
    item.name = item.name.toLowerCase();
  });
  let result = newArr.filter(item => item.name.includes(keyword));
  return result;
}