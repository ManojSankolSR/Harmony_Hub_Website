import React, { useState } from 'react'

const NavItems = ({isForSmallScreen}) => {
    const [currNav,setCurrNav]=useState("Home");
    const onclick=(id)=>{
        setCurrNav(id);
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

  }

  const NavItem=({title,id})=>{
    const isActive=id==currNav;
    return(
        <a className={isForSmallScreen? `px-3 py-2 cursor-pointer ${isActive ? 'border rounded-xl bg-slate-50' : 'text-black' } ` : `cursor-pointer ${isActive ? 'text-blue-500' : 'text-black' } `} onClick={()=>onclick(id)}  > {title} </a>

    )
}
  return (
    
    <div className={isForSmallScreen? `flex flex-col h-60 justify-evenly` : `w-96 flex-row justify-evenly items-center flex`} >
                    <NavItem id={"Home"} title={"Home"} />
                    <NavItem id={"Features"} title={"Features"} />
                    <NavItem id={"Screenshots"} title={"Screenshots"} />
                    <NavItem id={"Github"} title={"Github"} />
                    {/* <a href="http://github.com/ManojSankolSR/harmony_hub">GitHub</a> */}
                  
                </div>
  )
}

export default NavItems