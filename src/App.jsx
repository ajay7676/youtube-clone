import "./App.css";
import {Routes, Route   } from "react-router";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import CallbackComponent from "./components/CallbackComponent";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Body />}>
          <Route path="/" element={<MainContainer />} />
          <Route path="/watch" element={<WatchPage />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/demo-two" element={<Demo2 />} />
          <Route path="/call-back" element={<CallbackComponent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
