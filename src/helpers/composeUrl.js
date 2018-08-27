export const composeUrl = (searchType, param) => {
  const type = searchType === `name` ? `q` : `id`;
  const url = `https://api.openweathermap.org/data/2.5/weather?${type}=${param}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric`;
  return url;
};
