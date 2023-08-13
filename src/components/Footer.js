import React, { useEffect } from 'react';
import '../styles/styles.css'
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import classNames from 'classnames';


const languages = [
  {
    code: 'bs',
    name: 'Bosnian',
    country_code: 'bs',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'de',
    name: 'Deutsch',
    country_code: 'de',
  },
]

export const Footer = () => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const {t}= useTranslation();
  
    useEffect(() => {
      console.log('Setting page stuff')
      document.body.dir = currentLanguage.dir || 'ltr'
      document.title = t('app_title')
    }, [currentLanguage, t])

  return (
    <div className='footer'>
    <div className="dropdown">
  <button>
    <ul className="dropdown-menu">
      <li> <span className="dropdown-item-text">{t('language')}</span></li>
      {languages.map(({ code, name, country_code }) => (
              <li
               key={country_code}
               className={classNames('dropdown-item', {
                disabled: currentLanguageCode === code,
              })}
              onClick={() => {
                i18next.changeLanguage(code)
              }}
               >
               
                  <span
                    className={{country_code}}
                    style={{
                      opacity: currentLanguageCode === code ? 0.5 : 1,
                    }}
                  ></span>
                  {name}
               
              </li>
            ))}
    </ul>
  </button>
  </div>
  </div>
  )
}
