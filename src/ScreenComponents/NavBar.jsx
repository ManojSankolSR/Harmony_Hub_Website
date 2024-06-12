
import SmallScreenNavBar from './SmallScreenNavBar'
import LargeScreenNavBar from './LargeScreenNavBar'

const NavBar = () => {
    return (
        <>
        <div className='hidden sm:flex' >
        <LargeScreenNavBar/>
        
            

        </div>
        <div className='flex sm:hidden'>
        <SmallScreenNavBar/>
        

        </div>
        </>
    )
    
}

export default NavBar