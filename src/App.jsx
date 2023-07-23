import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Chat from "./pages/Chat";
import Collection from "./pages/Collection";
import Detail from "./pages/Detail";
import DetailColllection from "./pages/DetailColllection";
import DetailWork from "./pages/DetailWork";
import EditProfile from "./pages/EditProfile";
import FindWork from "./pages/FindWork";
import HireDesigner from "./pages/HireDesigner";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ProList from "./pages/ProList";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import UploadProject from "./pages/UploadProject";
import UploadWork from "./pages/UploadWork";
import WasApply from "./pages/WasApply";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ProList />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/:id" element={<DetailColllection />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/edit/:id" element={<EditProfile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/findwork" element={<FindWork />} />
        <Route path="/detailwork/:id" element={<DetailWork />} />
        <Route path="/hire" element={<HireDesigner />} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/apply" element={<WasApply />} />
        <Route path="/uploadproject" element={<UploadProject />} />
        <Route path="/uploadwork" element={<UploadWork />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
