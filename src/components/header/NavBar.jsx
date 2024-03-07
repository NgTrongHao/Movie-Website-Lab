import React, { useState } from 'react'
import logo from './../../../public/logo.svg'
import { HelpCenter, Home, Login, MoreHoriz, MovieFilter, Star, Theaters } from '@mui/icons-material';
import NavBarMenu from './NavBarMenu';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    const [toggle, setToggle] = useState(false)
    const menu = [
        {
            name: 'Home',
            icon: Home,
            link: '/'
        },
        {
            name: 'Watch List',
            icon: Star
        },
        {
            name: 'Movie',
            icon: Theaters,
            link: '/movies'
        },
        {
            name: 'Cartoon',
            icon: MovieFilter,
            link: '/cartoon'
        },
        {
            name: 'Contact Help',
            icon: HelpCenter,
            link: '/help'
        }
    ]

    return (
        <>
            <div className="fixed top-0 left-0 right-0 bg-navBarBg text-white p-5 z-50 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} className='w-[80px] md:w-[115px] object-cover mr-20' />
                </div>
                <div className='flex justify-between items-center w-full md:w-auto md:gap-20 gap-2'>
                    <div className='hidden md:flex md:gap-8 gap-2'>
                        {menu.map((item, index) => (
                            <Link to={item.link} key={index}>
                                <NavBarMenu name={item.name} Icon={item.icon} />
                            </Link>
                        ))}
                    </div>
                    <div className='md:hidden flex gap-6'>
                        {menu.map((item, index) => index < 3 && (
                            <Link to={item.link} key={index}>
                                <NavBarMenu name={''} Icon={item.icon} />
                            </Link>
                        ))}
                        <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                            <NavBarMenu name={''} Icon={MoreHoriz} />
                            {toggle ? <div className='absolute mt-3'>
                                {menu.map((item, index) => index >= 3 && (
                                    <Link to={item.link} key={index}>
                                        <NavBarMenu name={item.name} Icon={item.icon} />
                                    </Link>
                                ))}
                            </div> : null}
                        </div>
                    </div>
                    <div className='flex'>
                        <NavBarMenu name={'Login'} Icon={Login} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar