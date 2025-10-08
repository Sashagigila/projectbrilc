import Image from "next/image";
import { Button } from "../../shared/ui";
import { Title } from "../../shared/ui";
import { Logo } from "../../shared/ui";
import { Header } from "../../widgets/header"
import { Footer } from "../../widgets/footer";
import { MainScreen } from "../../widgets/mainScreen";
import { About } from "../../widgets/about";
import { Facts } from "../../widgets/facts";

export default function Home() {
  return (
   <div>
    <header>
      <Header/>
    </header>
    <main>
     <div>
       <MainScreen />
        <About />
        <Facts />
     </div>
    </main>
    <footer>
      <Footer/>
    </footer>
   </div>
  );
}
