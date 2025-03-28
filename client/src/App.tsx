import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import AboutMe from './pages/AboutMe';
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"/"} element={<Home />} />
	<Route path={"/about-me"} element={<AboutMe />} />
      </Route>
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};

export default App;
