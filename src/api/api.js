const URL = 'https://api.openweathermap.org/data/2.5/weather';
const APP_ID = '5d016161b3844068255a5479f6f528a1';

// Helper
const composeUrl = (url, accountId) => {
  return (searchType, param) => {
    const type = searchType === `name` ? `q` : `id`;
    return `${url}?${type}=${param}&appid=${accountId}&units=metric`;
  };
};

export default composeUrl(URL, APP_ID);
