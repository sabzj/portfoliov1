import React from 'react';
import '../Header/header.css';
import CTA from '../Header/CTA';
import HeaderSocials from './HeaderSocials';


function Header() {
    const menueList = [
        {
            id:1,
            title:'HOME'
        },
        {
            id:2,
            title: 'ABOUT'
        },
        {
            id:3,
            title:'PORTFOLIO'
        },
        {
            id:4,
            title:'CONTACT'
        },]

  return (
    <div className= 'flex item-center' >
        <div>
            <h2 className='text-[25px] text-white'>ZAFER 
            <span className='text-yellow'> SABBAH </span></h2>
        </div>
        <div className='flex, gap-4'>
        {menueList.map((item) => (
            <div>
                <h2 className=' text-white
                hover: border-[1px] border-red-500 rounded-full
                text-[15px] px 3 py-1 cursor-pointer'>{item.title}</h2>
                
            </div>
         ))}

        </div>
    </div>
  )}

export default Header