import React, { useState } from 'react';
import axios from 'axios';
import './Translator.css';

const Translator = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleTranslate = async () => {
    if (!text.trim()) return;
    
    setLoading(true);
    try {
      // Здесь используем Yandex Translate API
      // Вам нужно зарегистрироваться и получить API ключ
      const response = await axios.post(
        'https://translate.api.cloud.yandex.net/translate/v2/translate',
        {
          texts: [text],
          targetLanguageCode: 'es', // Испанский (можно сделать выбор языка)
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_YANDEX_TRANSLATE_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      
      setTranslatedText(response.data.translations[0].text);
    } catch (error) {
      console.error('Translation error:', error);
      setTranslatedText('Ошибка перевода');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="translator-container">
      <div className="translator-box">
        <div className="input-section">
          <textarea
            className="text-input"
            placeholder="Введите текст для перевода..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button 
            className="translate-button"
            onClick={handleTranslate}
            disabled={loading || !text.trim()}
          >
            {loading ? 'Перевод...' : 'Перевести'}
          </button>
        </div>
        
        <div className="output-section">
          <textarea
            className="text-output"
            placeholder="Перевод появится здесь..."
            value={translatedText}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Translator;