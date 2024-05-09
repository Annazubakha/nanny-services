export const convertedCharacters = (array) => {
  const formatted = array
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(', ');

  return formatted;
};
