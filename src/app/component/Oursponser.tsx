import Image from "next/image"
import image from "@/app/assect/Our sponsors.png"

function Oursponser() {
  return (
    <div className=" mx-auto w-[1922px] h-[538px] px-[60px] py-[20px]">
        <Image src={image} alt="image"></Image>
    </div>
  )
}

export default Oursponser