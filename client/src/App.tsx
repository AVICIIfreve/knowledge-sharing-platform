import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import QuestionDetail from "./pages/QuestionDetail";
import UserProfile from "./pages/UserProfile";
import { mockQuestion, mockAnswers } from "./pages/QuestionDetail";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/question/:id"
          element={
            <QuestionDetail question={mockQuestion} answers={mockAnswers} />
          }
        ></Route>
        <Route path="/profile/:username" element={<UserProfile />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
