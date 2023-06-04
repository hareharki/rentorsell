import React from 'react';
import {useTranslation} from 'react-i18next';


const AboutUs = () => {

  const {t}= useTranslation();

  return (
    <>
    <h2>{t('about_us')}</h2>
    <p>{t('about_us_p1')}</p>
    <img src='../image/image3.avif' alt=''/>
      </>
  )
}

export default AboutUs