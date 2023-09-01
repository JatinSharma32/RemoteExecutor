import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";

function App() {
    return (
        <div className="flex flex-col h-screen w-full">
            <Navbar />
            <MainBody />
        </div>
    );
}

export default App;
