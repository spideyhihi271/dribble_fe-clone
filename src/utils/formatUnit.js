export const formatUnit = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "Tr";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num;
};

export const formatDate = (input) => {
  const date = new Date(input)
  const options = { month: 'long', year: 'numeric' };
  return new Intl.DateTimeFormat('vi-VN', options).format(date);
}