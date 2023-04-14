export const generateRandomGradient = (): string => {
  const randomColor = (): string => {
    const min = 64;
    const max = 255;
    const red = Math.floor(Math.random() * (max - min) + min).toString(16);
    const green = Math.floor(Math.random() * (max - min) + min).toString(16);
    const blue = Math.floor(Math.random() * (max - min) + min).toString(16);

    return `#${red}${green}${blue}`;
  };

  const color1 = randomColor();
  const color2 = randomColor();

  return `linear-gradient(225deg, ${color1}, ${color2})`;
};
