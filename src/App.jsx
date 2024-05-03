import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomeMain from "./HomeMain";
import TvShow from "./TvShow";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import TvShowDetails from "./TvshowDetails";

// import Search from "./Search";
import SettingPage from "./SettingPage";

import Profilepage from "./Profilepage";
import Addcomments from "./AddComments";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <MyNav />
        </header>
        <Routes>
          <Route path="/" element={<HomeMain />} />

          {/* <Profilepage /> */}
          {/* <SettingPage /> */}
          {/* <Search /> */}
          <Route path="/tvshow" element={<TvShow />} />
          <Route
            path="/tvshow/details/:dinamicId"
            element={<TvShowDetails title={"Serie tv"} />}
          />
          <Route
            path="/profilepage"
            element={<Profilepage />}
          />
          <Route
            path="/settingpage"
            element={<SettingPage />}
          />
          <Route
            path="/addcomments/:dinamicId"
            element={<Addcomments />}
          />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
};

export default App;
