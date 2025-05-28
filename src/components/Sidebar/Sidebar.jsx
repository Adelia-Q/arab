import React from 'react';
import './Sidebar.css';
// Импортируйте ваши иконки здесь, например:
// import { ReactComponent as DictionaryIcon } from './icons/dictionary.svg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Авто распознание</h3>
      <ul className="language-list">
        <li>Испанский</li>
        <li>Введите текст здесь...</li>
      </ul>
      
      <h3 className="sidebar-title">Переводчик</h3>
      <ul className="menu-list">
        <li>Словарик</li>
        <li>История</li>
        <li>Моя статистика</li>
        <li>Настройки</li>
      </ul>
    </aside>
  );
};

export default Sidebar;