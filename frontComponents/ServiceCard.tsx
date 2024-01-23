import {serviceCard} from '../DUMMY_DATA'
import Image from 'next/image'



interface ServiceCardProps{
  card: serviceCard
} 


const ServiceCard = ({card}:ServiceCardProps) => {
console.log('servicessss', card)
    return (

        <div>
            <section className="mx-auto p-2">
 
  <div className="w-100 h-fit group">
    <div className="relative overflow-hidden">
 
      <Image className="  w-full object-cover" width={100} height={30} src={card.bgImage} alt=""/>
    <p className="text-[22px] leading-relaxed">{card.title}</p>
 
 
      <div className="absolute h-full w-full bg-black/50 flex   items-center justify-center   group-hover:bottom-[35px] opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button className="bg-logoBlue text-white py-2 px-5 mt-[35px]">Learn More</button>
      </div>
    </div>
   
  </div>
</section>
        </div>
    )


}

export default ServiceCard