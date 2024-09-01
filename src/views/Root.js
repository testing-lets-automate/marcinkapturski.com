import { GlobalStyles } from "styles/main";
import { HashRouter, Route, Routes } from "react-router-dom";

import StartPage from "views/Start";
import PostPage from "views/Post";
import ContactPage from "views/Contact";

function Root() {
  return (
    <HashRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/post/" element={<StartPage />} />
        <Route path="/post/:slug" element={<PostPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  );
}

export default Root;
