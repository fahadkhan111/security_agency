import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header";
import Contact from "./pages/Contact";
import Home from "./pages/home";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Home />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
