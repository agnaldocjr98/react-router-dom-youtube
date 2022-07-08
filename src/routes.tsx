import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { ListUsers } from "./components/users";
import { CreateUser } from "./components/users/create";
import { EditUser } from "./components/users/edit";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="users" element={<Layout />}>
          <Route index element={<ListUsers />} />
          <Route path="edit/:PARAMID" element={<EditUser />} />
          <Route path="create" element={<CreateUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
