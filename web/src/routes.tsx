import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./pages/Home";
import Followers from "./pages/Followers";
import Profile from "./pages/Profile";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="followers" element={<Followers />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}