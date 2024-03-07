import React from 'react'

function NavBarMenu({name, Icon}) {
    return (
        <div>
            <div className='text-white flex items-center gap-2 text-[15px] font-semibold cursor-pointer hover:opacity-80'>
                <Icon />
                <h2 className=''>{name}</h2>
            </div>
        </div>
    )
}

export default NavBarMenu