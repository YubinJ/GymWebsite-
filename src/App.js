import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";

import Access from "./pages/Access";
import Schedule from "./pages/Schedule";
import Enroll from "./pages/Enroll";
//import Price from "./pages/Price";
//import QandA from "./pages/Q&A";
import Staff from "./pages/Staff";
import Reserve from "./pages/Reserve";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/enroll" element={<Enroll />} />
          {/* <Route path="/price" element={<Price />} /> */}
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/access" element={<Access />} />
          <Route path="/staff" element={<Staff />} />
          {/* <Route path="/qanda" element={<QandA />} /> */}
          <Route path="/login" element={<Reserve />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
