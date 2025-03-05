import HomeSection from "@repo/components/Home";
import AboutUs from "@repo/components/AboutUs";
import ContactUs from "@repo/components/ContactUs";
import Footer from "@repo/components/Footer";
export default function Home() {
  return (
    <>
      <div
        className="min-h-screen"
        style={{ backgroundImage: "url('bg.png')" }}
      >
        <HomeSection />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
