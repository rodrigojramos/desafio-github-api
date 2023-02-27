import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import UserSearch from "./routes/Home/UserSearch";
import Informations from "./routes/Home/UserSearch/Informations";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
          <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<HomeBody />} />
            <Route path="search" element={<UserSearch />} >
              <Route path="informations" element={<Informations />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
