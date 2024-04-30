export const getRandomColor = () => {
  const colors = ["red", "green", "blue", "orange", "purple", "teal", "olive"];
  return colors[Math.floor(Math.random() * colors.length)];
};
