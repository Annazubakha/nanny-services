export const convertedAge = (birthday) => {
  const birthDate = new Date(birthday);
  const currentDate = new Date();
  const difference = currentDate.getTime() - birthDate.getTime();
  const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));

  return age;
};
