export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  // Randomly generate the RGB components
  for (let i = 0; i < 3; i++) {
    const randomValue = Math.floor(Math.random() * 256); // Random number from 0 to 255
    const darkValue = Math.floor((randomValue + 128) / 2); // Slightly darker by adding 128 and then dividing by 2
    const componentHex = darkValue.toString(16).padStart(2, '0'); // Convert to two-digit hexadecimal
    color += componentHex;
  }

  return color;
}
