import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Alert } from "antd";
import { useDispatch } from "react-redux";

import Login from "./page/Login/Login";
import DashBoard from "./page/DashBoard";
import Groups from "./page/DashBoard/Groups";
import Users from "./page/DashBoard/Users";
import { refreshToken, getItemLocal } from "./redux/FileManagerSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = getItemLocal("user");
    if (!user) return;
    dispatch(refreshToken({ refreshToken: user.tokens.refresh.token }));
    // eslint-disable-next-line
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<DashBoard />}>
          <Route path="groups" element={<Groups />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route
            path=""
            element={
              <Alert
                message="Choose setting on menu bar !"
                type="info"
                showIcon
                closable
              />
            }
          ></Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
