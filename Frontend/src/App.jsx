import { Route, Routes } from "react-router-dom";
import Layout from "./Components/layout/layout.jsx";
import HomePage from "./pages/homePage/homePage.jsx";
import LoginPage from "./pages/loginPage/loginPage.jsx";
import UserPage from "./pages/PrivateRoutes/ProfilePage/userPage.jsx";
import AccountPage from "./pages/PrivateRoutes/AccountPage/accountPage.jsx";
import ErrorPage from "./pages/errorPage/errorPage.jsx";
import PrivateRoutes from "./pages/PrivateRoutes/privatesRoutes.jsx";

function App() {
  return (
    <Routes>
      {/* Define the main layout for all routes */}
      <Route path="/" element={<Layout />}>
        {/* Define the default route for the root path */}
        <Route index element={<HomePage />} />
        {/* Define the login route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Define private routes, which require authentication */}
        <Route element={<PrivateRoutes />}>
          {/* Define the profile route */}
          <Route path="/profile" element={<UserPage />} />

          {/* Define the account route with a dynamic parameter 'id' */}
          <Route path="/account/:id" element={<AccountPage />} />
        </Route>

        {/* Define the route for any other paths */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
