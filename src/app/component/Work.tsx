import Image from "next/image";
import Headline from "@/app/assect/Headline.png"
import Content from "@/app/assect/Content.png"

function Work() {
  return (
    <div className='w-[1920px] h-[1588px] py-36 px-56 mx-auto' >
        <div className='w-[1480px] h-[547px] flex'>
            <div className='w-[672px] h-[411px] mt-16 '>
              <Image src={Headline} alt="Headline"></Image>
           </div>
           <div className="w-[748px] h-[547px] bg-[#c4DEFD]"></div>
        </div>
        <div className="w-[1480px] h-[661px] mt-24">
          <Image src={Content} alt="Content"></Image>
           </div>
    </div>
  )
}

export default Work