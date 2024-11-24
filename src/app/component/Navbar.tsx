import Image from "next/image";
import logo from "@/app/assect/Logo.png"



export default function Navbar() {
    return (
      <div>C
  
        <nav className="w-[1920px] mx-auto h-[92px] flex flex-row justify-between items-center bg-[#043873]  px-[220px] py-4]">
          <div className="w-[191 px] h-[34] ">
            <Image src={logo} alt="logo"></Image>
         </div>
          <div className="w-[737.5] h-[60px] text-white flex flex-row justify-between items-center">
          <div className="w-[549] h-[23px] ">
            <ul className="font-medium text-lg flex flex-row justify-between items-center ">
                <li>Products</li>
                <li>Solutions</li>
                <li>Resources</li>
                <li>Pricing</li>
                </ul>
                </div>
                <div className="  w-[126px] h-[60px] rounded-lg bg-[#FFE492] px-10 py-4">
                    <button className="text-[#043873] font-medium text-lg w-[46px] h-[23px]">Login</button>
                </div>
             </div>
        </nav>
        </div>
          
       
  
    );
  }
  