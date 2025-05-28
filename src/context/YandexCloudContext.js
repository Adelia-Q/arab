import React, { createContext, useContext } from 'react';

const YandexCloudContext = createContext();

export const YandexCloudProvider = ({ children }) => {
  const folderId = process.env.REACT_APP_YANDEX_FOLDER_ID;
  
  const translateText = async (text, targetLanguage) => {
    try {
      const response = await fetch(
        'https://translate.api.cloud.yandex.net/translate/v2/translate',
        {
          method: 'POST',
          headers: {
            'Authorization': `Api-Key ${process.env.REACT_APP_YANDEX_TRANSLATE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            folder_id: folderId,
            texts: [text],
            targetLanguageCode: targetLanguage,
          }),
        }
      );
      return await response.json();
    } catch (error) {
      console.error('Translation error:', error);
      throw error;
    }
  };

  return (
    <YandexCloudContext.Provider value={{ translateText, folderId }}>
      {children}
    </YandexCloudContext.Provider>
  );
};

export const useYandexCloud = () => useContext(YandexCloudContext);