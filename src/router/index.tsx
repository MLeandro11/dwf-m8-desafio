import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "../components/layout";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { PasswordPage } from "../pages/login/password";
import { ProtectedRoute } from "../components/protectedRoute";
import { MyPets } from "../pages/myPets";
import { PetsLost } from "../pages/home/petsLost";
import { SignupPage } from "../pages/singup";
import { Profile } from "../pages/profile";
import { Report } from "../pages/report";
import { EditDataPage } from "../pages/profile/editData";
import { EditPasswordPage } from "../pages/profile/editPassword";
import { PetPage } from "../pages/myPets/pet";

const routerApp = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="pets-lost" element={<PetsLost />} />
        <Route path="/login">
          <Route index element={<LoginPage />} />
          <Route path="password" element={<PasswordPage />} />
        </Route>
        <Route path="/signup">
          <Route index element={<SignupPage />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/profile">
            <Route index element={<Profile />} />
            <Route path="edit-data" element={<EditDataPage />} />
            <Route path="edit-password" element={<EditPasswordPage />} />
          </Route>
          <Route path="my-pets" element={<MyPets />} />
          <Route path="my-pets/:petId" element={<PetPage />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Route>
    </Route>
  )
);

export { routerApp };
