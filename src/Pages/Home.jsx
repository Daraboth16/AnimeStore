import Hero from "../components/Hero";
import TextToVideoSection from "../components/Hero2";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer/Footer2";
import NavBar from "../Navbar/Navbar";


const Home = () => {
  return (
    <>
      <div className="bg-[#0F172A] h-full">
        <NavBar />
        <Hero />
        <TextToVideoSection/>
        <Feedback/>
        <Footer/>
        <Footer2/>
      </div>
    </>
  );
};
export default Home;
