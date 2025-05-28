import { Routes, Route } from 'react-router-dom';
import TranslatorPage from './pages/TranslatorPage';
// Другие импорты компонентов

function App() {
  return (
    <div className="app">
      {/* НЕ ДОЛЖНО БЫТЬ BrowserRouter ЗДЕСЬ */}
      <Routes>
        <Route path="/" element={<TranslatorPage />} />
    
        {/* Другие маршруты */}
      </Routes>
    </div>
  );
}

export default App;