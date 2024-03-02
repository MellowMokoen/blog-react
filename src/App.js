import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./Components/Blog";
import FullStories from "./Components/FullStories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Blog />} />
        <Route path="/posts" element={<FullStories />} />
      </Routes>
    </Router>
  );
}

export default App;
