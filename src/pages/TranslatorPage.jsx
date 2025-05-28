import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Translator from '../components/Translator/Translator';
import './TranslatorPage.css';

const TranslatorPage = () => {
  return (
    <div className="translator-page">
      <Header />
      <div className="content">
        <Sidebar />
        <Translator />
      </div>
    </div>
  );
};

export default TranslatorPage;