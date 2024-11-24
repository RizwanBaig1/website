import Image from "next/image"
import image from "@/app/assect/Footer.png"

function Footer() {
  return (
    <div className='w-[1920px] h-[461px] px-[60px] py-[20px] mx-auto bg-[#043873]'>
        <Image src={image} alt="image"></Image>
    </div>
  )
}

export default Footer