import { Logo } from "../shared/ui";
import { Link } from "../shared/ui";

export const Header = () =>{
    return(
        <div className="flex justify-between py-5 px-9 bg-[#4d86ff] rounded-full">
            <Logo />
            <nav className="flex items-center gap-14"> 
                <Link children="что такое собака" link="#"/>
                <Link children="интересные факты" link="#"/>
                <Link children="породы" link="#"/>
                <Link children="сгенерировать" link="#"/>
            </nav>
        </div>
    )
}