import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Layout>
        <Route path={"/"} element={<Home />} />
      </Layout>
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};

export default App;
