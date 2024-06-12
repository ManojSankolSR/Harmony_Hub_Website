import { Button } from '@/components/ui/button';
import { FiSun } from 'react-icons/fi';
import NavItems from './NavItems';




const LargeScreenNavBar = () => {

    return (
        <div className='h-16 border-b w-full fixed top-0 z-50 flex flex-row items-center justify-between backdrop-blur-xl px-8 ' >
            <div className='flex flex-row gap-3' >
                <img src="src/assets/HH_icon.svg" alt="" width={30} height={30} />
                <p className='text-2xl font-semibold' >Harmony Hub</p>
                &nbsp;&nbsp;
                <NavItems isForSmallScreen={false} />
                
                

            </div>

            <div className='flex flex-row gap-3' >
                <Button variant="outline" size="icon">
                    <FiSun />

                </Button>


            </div>

        </div>
    )
}

export default LargeScreenNavBar