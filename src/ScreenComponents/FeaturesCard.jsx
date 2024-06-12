import { Card, CardContent, CardHeader } from '@/components/ui/card'


const FeaturesCard = ({title,subtitle}) => {
  return (
    <Card className='h-fit max-w-fit   sm:max-w-72' >
              <CardHeader className="text-xl sm:text-3xl text font-bold text-start" >
              {/* <MdLibraryMusic size={'fit'} /> */}

                {title}
              </CardHeader>
              <CardContent className="text-start text-sm sm:text-base" >
                {subtitle}
                </CardContent>




            </Card>
  )
}

export default FeaturesCard