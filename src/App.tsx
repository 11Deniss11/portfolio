import { useState, useEffect } from "react";
import FrostGlassBox from "./components/FrostGlassBox";
import Background from "./components/Background";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FirstRobotics from "./pages/FirstRobotics";
import Mechatronics from "./pages/Mechatronics";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);

  const [pageName, setPageName] = useState("Unknown");

  const [wantedBackgroundColourTop, setWantedBackgroundColourTop] = useState([
    171, 189, 204,
  ]);
  const [wantedBackgroundColourBottom, setWantedBackgroundColourBottom] =
    useState([16, 74, 133]);

  useEffect(() => {
    console.log("Changed gradient Colours");
  }, [wantedBackgroundColourTop, wantedBackgroundColourBottom]);

  useEffect(() => {
    // remove scroll bars
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";

    return () => {
      // add scroll bars back when leaving
      document.body.style.overflowY = "";
      document.body.style.overflowX = "";
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newScrollSpeed = scrollTop - lastScrollTop;
      setScrollSpeed(newScrollSpeed);
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <Router>
      <Background
        scrollSpeed={scrollSpeed}
        topColour={wantedBackgroundColourTop}
        bottomColour={wantedBackgroundColourBottom}
      />
      <Header headerText={pageName} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setPageName={setPageName}
              setBackgroundColourTop={setWantedBackgroundColourTop}
              setBackgroundColourBottom={setWantedBackgroundColourBottom}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              setPageName={setPageName}
              setBackgroundColourTop={setWantedBackgroundColourTop}
              setBackgroundColourBottom={setWantedBackgroundColourBottom}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <Projects
              setPageName={setPageName}
              setBackgroundColourTop={setWantedBackgroundColourTop}
              setBackgroundColourBottom={setWantedBackgroundColourBottom}
            />
          }
        />
        <Route
          path="/sparkans"
          element={
            <FirstRobotics
              setPageName={setPageName}
              setBackgroundColourTop={setWantedBackgroundColourTop}
              setBackgroundColourBottom={setWantedBackgroundColourBottom}
            />
          }
        />
        <Route
          path="/mechatronics"
          element={
            <Mechatronics
              setPageName={setPageName}
              setBackgroundColourTop={setWantedBackgroundColourTop}
              setBackgroundColourBottom={setWantedBackgroundColourBottom}
            />
          }
        />
        <Route
          path="*"
          element={
            <ErrorPage
              setPageName={setPageName}
              setBackgroundColourTop={setWantedBackgroundColourTop}
              setBackgroundColourBottom={setWantedBackgroundColourBottom}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
