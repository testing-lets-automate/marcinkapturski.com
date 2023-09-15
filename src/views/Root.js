import { GlobalStyles } from "styles/main";
import { HashRouter, Route, Routes } from "react-router-dom";
import StartPage from "views/Start";
import PostPage from "views/Post";
// import ServiceUIAutomation from "views/ServiceUIAutomation";
// import ServiceTools from "views/ServiceTools";
// import ServiceMobileAutomation from "views/ServiceMobileAutomation";
import InProgressPage from "views/InProgressPage";

function Root() {
  return (
    <HashRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/post/" element={<StartPage />} />
        <Route path="/post/:slug" element={<PostPage />} />
        <Route path="/service/ui-api-automation" element={<InProgressPage />} />
        <Route path="/service/support-tools" element={<InProgressPage />} />
        <Route path="/service/mobile-automation" element={<InProgressPage />} />
      </Routes>
    </HashRouter>
  );
}

export default Root;
