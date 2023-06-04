import React from 'react'
import '../styles/Home.css'
import {useTranslation} from 'react-i18next';

const Home = () => {

  const {t}= useTranslation();

  return (
    <div className='home'>
    <p className='creativ'>{t('real_estates_for_everyone_pocket')} </p>
      </div>
  )
}

export default Home