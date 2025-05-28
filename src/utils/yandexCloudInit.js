export const initYandexCloud = () => {
  if (!process.env.REACT_APP_YANDEX_TRANSLATE_API_KEY) {
    console.warn('Yandex Cloud API key is not set in environment variables');
  }
  
  if (!process.env.REACT_APP_YANDEX_FOLDER_ID) {
    console.warn('Yandex Cloud Folder ID is not set in environment variables');
  }
};