import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Anasayfa from "./pages/Anasayfa";
import Baslik from "./components/Baslik";
import Footer from "./components/Footer";

import BiletList from "./pages/BiletList";
import Odeme from "./pages/Odeme";
import BiletAlindi from "./pages/BiletAlindi";
import Admin from "./pages/admin/Admin";
import HavaYoluSirketleri from "./pages/admin/HavayoluSirketleri";
import SatilanBiletList from "./pages/admin/SatilanBiletLis";
import UcusSeferleri from "./pages/admin/UcusSeferleri";
import Havalimani from "./pages/admin/Havalimani";

function App() {
  return (
    <>
      <Router>
        <Baslik></Baslik>
        <Routes>
          <Route path="/">
            <Route index element={<Anasayfa />} />
            <Route path="bilet-bul" element={<BiletList />} />
            <Route path="odeme" element={<Odeme />} />
            <Route path="bilet-alindi" element={<BiletAlindi />} />
            <Route path="*" element={"Sayfa Yoktir"}></Route>
          </Route>


          <Route path="/admin">
            <Route index element={<Admin />}></Route>
            <Route path="hava-yolu-sirketleri" element={<HavaYoluSirketleri />}></Route>
            <Route path="satilan-bilet" element={<SatilanBiletList />}></Route>
            <Route path="ucus-seferleri" element={<UcusSeferleri />}></Route>
            <Route path="havalimanlari" element={<Havalimani />}></Route>
          </Route>

        </Routes>
        <Footer></Footer>
      </Router>
    </>

  );
}

export default App;
