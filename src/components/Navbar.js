import React from 'react';
import '../styles/styles.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import {useTranslation} from 'react-i18next';




const Navbar = () => {

  const {t}= useTranslation();


  return (
    <nav className='nav'>
    <Link to='/' className='site-title' ><span>{t('rent_or_sell')}</span></Link>
    
    <ul>
        <CustomLink to='/realestates'>{t('real_estates')}</CustomLink>
        <CustomLink to='/aboutus'>{t('about_us')}</CustomLink>
        <CustomLink to='/gap'>{t('gallery_and_partners')}</CustomLink>
        <CustomLink to='/lac'>{t('location_and_contact')}</CustomLink>
    </ul>
  </nav>
  )

  function CustomLink({to,children, ...props}){
   const resolvedPath = useResolvedPath(to);
   const isActive = useMatch({path: resolvedPath.pathname, end:true});
  return (
    <li className={isActive===to ?'active' : ''} >
        <Link to={to} {...props}>{children}</Link>
    </li>
  )
  }
}

export default Navbar
