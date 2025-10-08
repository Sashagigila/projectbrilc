import { Logo } from "../shared/ui";
import { Link } from "../shared/ui";

const links = [
    {link: "#", children: "Что такое собака"},
    {link: "#", children: "интересные факты"},
    {link: "#", children: "породы"},
    {link: "#", children: "сгенерировать"},
]

export const Header = () =>{
    return(
        <div className="flex justify-between py-5 px-9 bg-[#4d86ff] rounded-full">
            <Logo />
            <nav className="flex items-center gap-14"> 
                {links.map((item, i)=>{
                    return(
                        <Link key={i} link={item.link}
                        children={item.children} />
                    )
                })}
            </nav>
        </div>
    )
}