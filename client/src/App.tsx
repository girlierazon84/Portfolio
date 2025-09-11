import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routing } from "./routes/Routing";

const App: React.FC = () => {
  console.log("✅ App is rendering...");

  return (
    <div className="app-container">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
};

export default App;
