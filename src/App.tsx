import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import QuestionDetail from "./pages/QuestionDetail";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/question/:id" element={<QuestionDetail />}></Route>
        <Route path="/profile/:username" element={<UserProfile />}></Route>
      </Routes>
    </>
  );
}

export default App;
