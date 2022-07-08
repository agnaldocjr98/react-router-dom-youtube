import { Heading, Input, Stack } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import { User } from ".";

interface RouteState {
  currUser: User;
}

export function EditUser() {
  const location = useLocation();
  const { currUser } = location.state as RouteState;

  const params = useParams();

  return (
    <Stack spacing={3} w="280px" p={10}>
      <Heading>ID: {params.PARAMID}</Heading>
      <Input value={currUser.name} />
      <Input value={currUser.email} />
      <Input value={currUser.age} />
    </Stack>
  );
}
