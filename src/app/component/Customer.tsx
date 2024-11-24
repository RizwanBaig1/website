import Image from "next/image";
import Heading from "@/app/assect/Heading.png"; 
import Illustration from "@/app/assect/Illustration.png";
function Customer() {
  return (
    <div className='w-[1921] mx-auto h-[759px] px-[220px] py-[140px] bg-[#043873] flex'>
       <div className='w-[697px] h-[294px] mt-20'>
        <Image src={Heading} alt="Heading"></Image>
       </div>
       <div className="w-[686px] h-[479px]">
        <Image src={Illustration} alt="illustration"></Image>
       </div>
    </div>
  ) 
}
export default Customer
