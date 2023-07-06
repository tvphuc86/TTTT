import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import DashBoard from './page/adminPage/DashBoard';
import ErrorPage from './ErrorPage';
import LayoutAdmin from './page/adminPage/LayoutAdmin';
import Size from './page/adminPage/Size';
import CoinPackage from './page/adminPage/CoinPackage';
import Approve from './page/adminPage/Approve';
import PostStatistic from './page/adminPage/PostStatistic';
import Category from './page/adminPage/Category';
import Brand from './page/adminPage/Brand';
import ReportCategory from './page/adminPage/ReportCategory';
import Color from './page/adminPage/Color';
import Role from './page/adminPage/Role';
import User from './page/adminPage/Users';
import AssignRole from './page/adminPage/AssignRole';
import CheckReport from './page/adminPage/CheckReport';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutAdmin />} errorElement={<ErrorPage />}>
      <Route
        path="/admin/dashboard"
        element={<DashBoard />}
        errorElement={<ErrorPage />}></Route>
         <Route
        path="/admin/check-report"
        element={<CheckReport />}
        errorElement={<ErrorPage />}></Route>
      <Route
        path="/admin/business/size"
        element={<Size />}
        errorElement={<ErrorPage />}></Route>
      <Route
        path="/admin/business/category"
        element={<Category />}
        errorElement={<ErrorPage />}></Route>
      <Route
        path="/admin/business/coin-package"
        element={<CoinPackage />}
        errorElement={<ErrorPage />}></Route>
         <Route
        path="/admin/business/brand"
        element={<Brand />}
        errorElement={<ErrorPage />}></Route>
        <Route
        path="/admin/business/report-category"
        element={<ReportCategory />}
        errorElement={<ErrorPage />}></Route>
        <Route
        path="/admin/business/color"
        element={<Color />}
        errorElement={<ErrorPage />}></Route>
      <Route
        path="/admin/approve"
        element={<Approve />}
        errorElement={<ErrorPage />}></Route>
        <Route
        path="/admin/users"
        element={<User />}
        errorElement={<ErrorPage />}></Route>
      <Route
        path="/admin/statistic/post"
        element={<PostStatistic />}
        errorElement={<ErrorPage />}></Route>
           <Route
        path="/admin/role"
        element={<Role />}
        errorElement={<ErrorPage />}></Route>
         <Route
        path="/admin/assign-role"
        element={<AssignRole />}
        errorElement={<ErrorPage />}></Route>
           <Route
        path="/admin/role"
        element={<Role />}
        errorElement={<ErrorPage />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
