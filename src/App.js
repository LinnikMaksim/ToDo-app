import "./App.css";
import { useEffect, useState } from "react";
import Particle from "./components/particles/Particle";
import { Header } from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [copyItems, setCopyItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [activeModal, setActiveModal] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  const [animationLogoGreen, setAnimationLogoGreen] = useState(false);
  const [animationLogoRed, setAnimationLogoRed] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = copyItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(copyItems.length / itemsPerPage);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  const handleGreenClick = () => {
    setAnimationLogoGreen(true);
    setTimeout(() => setAnimationLogoGreen(false), 500);
  };
  const handleRedClick = () => {
    setAnimationLogoRed(true);
    setTimeout(() => setAnimationLogoRed(false), 500);
  };
  const colorHeaderFooter = { backgroundColor: " rgb(92 96 112 / 50%)" };
  const colorContainer = { backgroundColor: "rgb(19 19 24 / 60%)" };
  const modalProps = {
    activeModal,
    setActiveModal,
    handleGreenClick,
    items,
    setItems,
    selectedSort,
    setSelectedSort,
    lightTheme,
  };
  const headerProps = {
    items,
    setItems,
    copyItems,
    setCopyItems,
    activeModal,
    setActiveModal,
    selectedSort,
    setSelectedSort,
    setCurrentPage,
    animationLogoRed,
    animationLogoGreen,
    handleGreenClick,
    lightTheme,
    colorHeaderFooter,
  };
  const mainProps = {
    items,
    setItems,
    currentPage,
    setCurrentPage,
    currentItems,
    indexItem: (currentPage - 1) * itemsPerPage,
    handleRedClick,
    handleGreenClick,
    totalPages,
  };

  return (
    <div className="App">
      <Particle lightTheme={lightTheme}></Particle>

      <Modal modalProps={modalProps} />
      <div className="wrap-cont">
        <div className="container" style={lightTheme ? colorContainer : null}>
          <Header headerProps={headerProps} />
          <Main mainProps={mainProps} />
          <Footer
            lightTheme={lightTheme}
            setLightTheme={setLightTheme}
            colorHeaderFooter={colorHeaderFooter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
