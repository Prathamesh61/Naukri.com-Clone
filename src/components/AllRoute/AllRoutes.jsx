import { Route, Routes } from "react-router-dom";
import { JobSearch } from "../JobSearch";
import { LandingPage } from "../landing Page/LandingPage";
import { ProfilePage } from "../ProfilePage";
import { Register } from "../Register";

export function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/SearchPage" element={<JobSearch />}></Route>
            <Route path="/profilePage" element={<ProfilePage />}></Route>
            {/* <Route to="" element={ }></Route> */}
        </Routes>
    )
}