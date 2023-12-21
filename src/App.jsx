import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NotFound from "./pages/404";
function App() {
  return (
    <>
      <Router>
        <div className="bg-fixed font-poppins bg-repeat bg-hoops-background">
          <Navbar />

          <main className="isolate">
            <Routes>
              <Route
                target="_blank"
                rel="noopener noreferrer"
                path="/"
                exact
                element={<Home />}
              />
              {/* <Route
                target="_blank"
                rel="noopener noreferrer"
                path="/contact-event-ops"
                exact
                element={}
              />
              <Route
                target="_blank"
                rel="noopener noreferrer"
                path="/contact-event-attendees"
                exact
                element={}
              />
              <Route
                target="_blank"
                rel="noopener noreferrer"
                path="/contact-event-hoteliers"
                exact
                element={}
              /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
