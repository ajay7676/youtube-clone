import "./App.css";
import {Routes, Route   } from "react-router";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Body />}>
          <Route path="/" element={<MainContainer />} />
          <Route path="/watch" element={<WatchPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
