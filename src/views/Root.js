import { GlobalStyles } from "styles/main";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "views/Home";

function Root() {
  return (
    <HashRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default Root;
