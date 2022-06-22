import React from 'react'
import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';


const Layout = ({title,search,SetSearch,setFilterLanguage}) => {
  return (
    <div>
        <Header title = {title} />
        <Nav 
        search = {search}
        SetSearch = {SetSearch}
        setFilterLanguage = {setFilterLanguage}
        />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout