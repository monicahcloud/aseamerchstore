import React from 'react'
import hero1 from '@/public/running.jpg'
import hero2 from '@/public/handsinwater.jpg'
import hero3 from '@/public/blackradiantskin.avif'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
const carouselImages = [hero1, hero2, hero3]

function HeroCarousel() {
  return (
   <div className='hidden lg:block'>
   <Carousel>
    <CarouselContent> 
      {carouselImages.map((image, index) => {

return <CarouselItem key={index}>
<Card>
  <CardContent>
    <Image src={image} alt='hero' className='w-full h-[24rem]  object-cover rounded-md'/>
  </CardContent>
</Card>
</CarouselItem>
      })}
    </CarouselContent>
     
        <CarouselPrevious/>
      <CarouselNext/>
   
   </Carousel>
   </div>
  )
}

export default HeroCarousel