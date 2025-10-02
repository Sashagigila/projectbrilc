import { Header } from "./header";

export const Footer = () =>{
    return(
        <div className="flex flex-col text-center gap-4">
            <Header/>
            <span className="font-[Montserrar] font-semibold text-[16px] text-gray-400">Аминев Александр, Студент П-44</span>
        </div>
    )
}