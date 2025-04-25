import parse from "html-react-parser";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Service from "../components/Service";
import Footer from "../components/Footer";
import home from "../../public/assets/img/home.png";
import about from "../../public/assets/img/about.png";
import { berandaSection } from "../data/HomeSection";
import { aboutSection } from "../data/AboutSection";
import { menuSection, cardList } from "../data/MenuSection";
import { serviceSection, serviceList } from "../data/ServiceSection";
import { contactSection } from "../data/ContactSection";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Home Section */}
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            {parse(berandaSection.content)}
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10 drop-shadow-2xl">
                <img src={home} alt="home" className="max-w-full mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-36 pb-28">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="drop-shadow-2xl">
                <img
                  src={about}
                  className="max-w-full mx-auto"
                  alt="about image"
                />
              </div>
            </div>
            {parse(aboutSection.content)}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="pt-36 pb-28">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            {parse(menuSection.title)}
            <Card cardList={cardList} />
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="pt-36 pb-28">
        <div className="container">
          <div className="flex flex-col items-center justify-center mb-32">
            {parse(serviceSection.title)}
            <Service serviceList={serviceList} />
          </div>
          {parse(serviceSection.content)}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-36 pb-32">
        <div className="container">
          <form className="flex flex-col items-center justify-center">
            {parse(contactSection.content)}
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
