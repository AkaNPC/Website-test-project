import Login from "./pages/Login";
import DeviceList from "./pages/DeviceList/DeviceList";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { DataProvider } from "./context/DataProvider";
import PrivateRoute from "./utils/PrivateRoute";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";


export default function App() {


  const NavBarLayout = () => (
    <>
      <NavBar />
      <Outlet />
    </>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<NavBarLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="devicelist" element={
            <PrivateRoute>
              <DeviceList />
            </PrivateRoute>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<p>Страница не найдена. Ошибка 404!</p>} />
      </Route>
    )
  );


  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  )
}
