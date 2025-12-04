import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Service from "./Service";


function App() {

  return (
     <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
