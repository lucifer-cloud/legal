import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import "./assets/css/animate.min.css";
import "./assets/css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./components/common/Preloader";
import Layout from "./components/common/Layout";
const Home = lazy(() => import("./components/pages/Home"));
const Contact = lazy(() => import("./components/pages/Contact"));
const About = lazy(()=>import("./components/pages/About"));
const PracticeArea = lazy(()=>import("./components/pages/PracticeArea"))
const PracticeAreaDetails= lazy(()=>import("./components/pages/PracticeAreaDetails"))
const Blog= lazy(()=>import("./components/pages/Blog"))

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Animation duration in ms
  }, []);

  return (
    <Router>
      <Suspense fallback={<Preloader />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice_area" element={<PracticeArea />} />
            <Route path="/practice_area_details" element={<PracticeAreaDetails />} />
             <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
