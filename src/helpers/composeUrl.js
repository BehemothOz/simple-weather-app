export const composeUrl = (searchType, param) => {
  const type = searchType === `name` ? `q` : `id`;
  const appid = `5d016161b3844068255a5479f6f528a1`;
  const url = `https://api.openweathermap.org/data/2.5/weather?${type}=${param}&appid=${appid}&units=metric`;
  return url;
};
