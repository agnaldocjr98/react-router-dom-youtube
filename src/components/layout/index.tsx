import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "../header";

export function Layout() {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
}
