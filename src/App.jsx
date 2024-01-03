import "./index.css";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import NotFound from "./pages/404";
import Skills from "./pages/Skills";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
function App() {
  return (
    <>
      <Router>
        <div className="bg-fixed font-poppins bg-repeat">
          <Navbar />

          <main className="isolate">
            <Routes>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                path="/"
                exact
                element={<About />}
              />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                path="/blog"
                exact
                element={<Blogs />}
              />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                path="/skills"
                element={<Skills />}
              />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                path="/projects"
                element={<Projects />}
              />
              <Link path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
