import Home from "./pages/Home"
import Food from "./pages/Food"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Food />} />
            </Routes>
        </Router>
    )
}

export default App
