import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

export function ListUsers() {
  const users: User[] = [
    { id: 1, name: "Agnaldo", email: "agnaldo@gmail.com", age: 29 },
    { id: 2, name: "Jorge", email: "jorge@gmail.com", age: 50 },
    { id: 3, name: "Breno", email: "breno@gmail.com", age: 41 },
    { id: 4, name: "Alan", email: "alan@gmail.com", age: 15 },
    { id: 5, name: "Angela", email: "angela@gmail.com", age: 39 },
  ];

  const navigation = useNavigate();

  function handleCreateUser() {
    navigation("create");
  }

  function handleEditUser(user: User) {
    navigation(`edit/${user.id}`, { state: { currUser: user } });
  }

  return (
    <TableContainer>
      <Table variant="striped" w="400px">
        <Thead>
          <Tr>
            <Th>.</Th>
            <Th>NAME</Th>
            <Th>EMAIL</Th>
            <Th isNumeric>AGE</Th>
            <Th>ACTIONS</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => {
            return (
              <Tr key={user.id}>
                <Td fontWeight="bold">{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.age}</Td>
                <Td>
                  <Flex gap={2}>
                    <Button
                      size="sm"
                      colorScheme="blue"
                      onClick={() => handleEditUser(user)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      colorScheme="green"
                      onClick={() => handleCreateUser()}
                    >
                      Create
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
