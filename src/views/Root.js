import { GlobalStyles } from "styles/main";
import { HashRouter, Route, Routes } from "react-router-dom";
import StartPage from "views/Start";
import PostPage from "views/Post";
import PortfolioPage from "./Portfolio";

function Root() {
  return (
    <HashRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/post/" element={<StartPage />} />
        <Route path="/post/:slug" element={<PostPage />} />
        <Route path="/portfolio/:slug" element={<PortfolioPage />} />
      </Routes>
    </HashRouter>
  );
}

export default Root;
