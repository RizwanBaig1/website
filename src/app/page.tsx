import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero"
import Work from "./component/Work";
import Customer from "./component/Customer";
import CustomerNeed from "./component/CustomerNeed";
import Yourwork from "./component/Yourwork";
import Oursponser from "./component/Oursponser";
import Footer from "./component/Footer";





export default function Home() {
  return ( <div>
    <Navbar />
    <Hero />
    <Work />
    <Customer />
    <CustomerNeed />
    <Yourwork />
    <Oursponser />
    <Footer />
    </div>

  );
}
