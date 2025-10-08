import dogs from "../img/Nicedogi.png";
import Image from "next/image";

export const About = () =>{
    return(
        <div className="flex bg-[#f2f2f2] rounded-[50px] py-14 px-11 items-center justify-between">
            <div>
            <span className="text-[#222733] font-[Inter] text-[128px] font-black">собака</span>
            <p className="text-[#222733] font-[Montserrat] font-semibold text-[20px] w-[680px]">Домашнее животное из сем. 
                хищных млекопитающих, к к-рому относятся также 
                волк, лисица и др.</p>
        </div>
        <div>
            <Image src={dogs} alt="pic of dog" className="" />
        </div>
        </div>
    )
}