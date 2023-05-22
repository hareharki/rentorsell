import React from 'react'
import '../styles/styles.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'


const Navbar = () => {

  return (
    <nav className='nav'>
    <Link to='/' className='site-title' ><span>RENT OR SELL</span></Link>
    <ul>
        <CustomLink to='/realestates'>Real Estates</CustomLink>
        <CustomLink to='/aboutus'>About Us</CustomLink>
        <CustomLink to='/gap'>Galery And Partners</CustomLink>
        <CustomLink to='/lac'>Location and Contact</CustomLink>
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
