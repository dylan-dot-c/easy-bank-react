import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import LatestArticles from "./components/LatestArticles";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <main>
                <Intro />
                <LatestArticles />
                <Footer />
            </main>
        </div>
    );
}

export default App;
