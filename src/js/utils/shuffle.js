export default function shuffleArray(array) {
  const shufflingArray = array;
  for (let i = shufflingArray.length - 1; i !== 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * i);
    [shufflingArray[i], shufflingArray[randomIndex]] = [
      shufflingArray[randomIndex],
      shufflingArray[i],
    ];
  }
  return shufflingArray;
}
