export const getRandomFont = () => {
  const fonts = ["Arial", "Helvetica", "Times New Roman", "Courier New"];
  return fonts[Math.floor(Math.random() * fonts.length)];
};
