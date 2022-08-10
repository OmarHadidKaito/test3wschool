import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Overlay } from "../components/Overlay";
import { Header } from "../components/Header";
import { GridProducts } from "../components/GridProducts";
import { Subscribe } from "../components/Subscribe";
import { Footer } from "../components/Footer";
import { NewsLetter } from "../components/NewsLetter";

const MainPage = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="w3-main" style={{ marginLeft: "250px" }}>
        <div className="w3-hide-large" style={{ marginTop: "83px" }}></div>
        <Overlay />
        <Header />
        <GridProducts />
        <Subscribe />
        <Footer />
        <NewsLetter />
      </div>
    </>
  );
};

export default MainPage;
