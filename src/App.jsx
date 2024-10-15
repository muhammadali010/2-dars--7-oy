import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import iPhone from './images/iPhone 13 Pro.png';
import Location from './images/ic_Pin.png';
import './i18n'; 

const App = () => {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
      .then(() => console.log(`Til ${lng} ga o'zgartirildi`))
      .catch((err) => console.error('Til o‘zgartirilganda xato:', err));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`font-sans ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className="navbar flex justify-between items-center py-4 px-8 drop-shadow-md">
        <div className="text-xl font-bold">{t('navbar.logo')}</div>
        <div className="hidden ml-40 md:flex space-x-6">
          <a href="#" className="text-gray-700">{t('navbar.assets')}</a>
          <a href="#" className="text-gray-700">{t('navbar.creators')}</a>
          <a href="#" className="text-gray-700">{t('navbar.careers')}</a>
          <a href="#" className="text-gray-700">{t('navbar.goPro')}</a>
        </div>
        <div className="flex items-center">
          <button onClick={toggleDarkMode} className="mr-4 p-2 border rounded-md">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <select onChange={(e) => changeLanguage(e.target.value)} className="ml-4 border rounded-md p-2">
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="uz">O'zbekcha</option>
          </select>
        </div>
      </header>

      <section className={`flex flex-col md:flex-row justify-between items-center py-16 px-8 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
        <div className="ml-20">
          <div className="max-w-lg">
            <h4 className="mb-10">SECURITY SOLUTION</h4>
            <h1 className="md:text-5xl font-bold text-violet-500 mb-8">{t('title')}</h1>
            <div className="flex">
              <img src={Location} alt="Location" />
              <p className="mb-8">{t('description')}</p>
            </div>
            <h3 className="text-4xl font-semibold mb-7">{t('joinWaitlist')}</h3>
            <p>Be the first to get notified when the product is ready!</p>
            <form className="flex space-x-4">
              <input 
                type="email" 
                placeholder={t('placeholder')} 
                className="px-14 py-2 border mt-4 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
              />
              <button type="submit" onClick={(e => { e.preventDefault() })} className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-md"> {t('joinButton')} </button>
            </form>
          </div>
        </div>
        <div className="flex space-x-4 mt-8 md:mt-0 mr-10">
          <img src={iPhone} alt="iPhone" />
        </div>
      </section>
    </div>
  );
};

export default App;
