import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const ScreensShotscard = ({image}) => {
    return (
        <Card className='h-fit' >
            <br />
            <CardContent className="text-start" >
                <img src={image} alt="" className='lg:min-w-[30%] ' />

            </CardContent>
        </Card>
    )
}

export default ScreensShotscard