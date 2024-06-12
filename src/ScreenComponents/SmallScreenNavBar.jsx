import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import NavItems from './NavItems';


const SmallScreenNavBar = () => {
   
    return (
        <div className='h-14 border-b w-full fixed top-0 z-50 flex flex-row items-center justify-between backdrop-blur-xl px-8 ' >
            <div className='flex flex-row gap-3' >
                <img src="src/assets/HH_icon.svg" alt="" width={20} height={20} />
                <p className='text-lg font-semibold' >Harmony Hub</p>



            </div>
            <Sheet>
                <SheetTrigger asChild  >
                    <Button variant="outline" size="icon">
                        <CiMenuFries />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle><div className='flex flex-row gap-3' >
                            <img src="src/assets/HH_icon.svg" alt="" width={20} height={20} />
                            <p className='text-lg font-semibold' >Harmony Hub</p>
                        </div>
                        </SheetTitle>
                    </SheetHeader>
                    <br />
                  
                        <NavItems isForSmallScreen={true} />
                       
                    

                    {/* <SheetFooter className='mt-auto' >
                        <SheetClose asChild  >
                            <Button type="submit">Save changes</Button>
                        </SheetClose>
                    </SheetFooter> */}
                </SheetContent>
            </Sheet>



        </div>
    )
}

export default SmallScreenNavBar