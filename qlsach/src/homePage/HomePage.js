import React from 'react'
import './homePage.css'
import Headerbar from './Header/Header'
import TabBar from './tabbar/tabBar'
import Table from './Table/Table'

export default function HomePage() {

  return (
    <div className='All' >
       <div className='Header'> <Headerbar/></div>
       <div className='TabBar'><TabBar/></div>
       <div className='Table'><Table/></div>
    </div>
  );
}
