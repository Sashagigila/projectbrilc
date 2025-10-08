import dogs from "../img/LogoDog.png";
import Image from "next/image";


export const MainScreen = () =>{
    return(
        <div className="w-full">
          <Image src={dogs} alt="katinla "/>
        </div>
    )
}