import Layout from "./components/Layout";
import "./assets/images/favicon.ico";
import "./assets/css/libs.min.css";
import "./assets/css/nairobi.css?v=1.0.0";
import Home from "./components/home/home";
import Maps from "./components/maps/maps";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Icons from "./components/iconsJS/icons";
import Error from "./components/error/error";
import Components from "./components/ComponentsDoc/components";
import UserProfile from "./components/user/UserProfile/userProfile";
// import UserEdit from "./components/user/UserEdit/userEdit";
import UserAdd from "./components/user/UserAdd/userAdd";
import UserList from "./components/user/UserList/userList";

const pages = [
  {
    exact: true,
    path: "/",
    component: Home,
    Layout: true,
  },
  {
    exact: true,
    path: "/icons",
    component: Icons,
    Layout: true,
  },
  {
    exact: true,
    path: "/maps",
    component: Maps,
    Layout: true,
  },
  {
    exact: true,
    path: "/useradd",
    component: UserAdd,
    Layout: true,
  },
  {
    exact: true,
    path: "/userlist",
    component: UserList,
    Layout: true,
  },
  {
    exact: true,
    path: "/userprofile",
    component: UserProfile,
    Layout: true,
  },
  {
    exact: true,
    path: "/error",
    component: Error,
    Layout: false,
  },
  {
    exact: true,
    path: "/components",
    component: Components,
    Layout: false,
  },
];
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {pages.map((page, i) => (
          <Route
            key={i}
            exact={page.exact}
            path={page.path}
            element={
              page.Layout ? (
                <Layout>
                  <page.component />
                </Layout>
              ) : (
                <page.component />
              )
            }
          />
        ))}

        {/* <Route exact path="/"element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route exact path="/maps" element={<Maps />} />
        <Route exact path="/icons" element={<Icons />} />
        <Route exact path="/useredit" element={<UserEdit />} />
        <Route exact path="/useradd" element={<UserAdd />} />
        <Route exact path="/userlist" element={<UserList />} />
        <Route exact path="/userprofile" element={<UserProfile />} />
        <Route exact path="/error" element={<Error />} />
        <Route exact path="/components" element={<Components />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
