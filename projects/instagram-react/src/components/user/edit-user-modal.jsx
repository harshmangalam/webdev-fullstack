import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { MdModeEditOutline } from "react-icons/md";
import { updateUserProfile } from "../../services/user";
export function EditUserModal({ name, userId, username }) {
  const queryCLient = useQueryClient();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [nameState, setNameState] = useState(name);

  const updateProfileMutation = useMutation((data) =>
    updateUserProfile(userId, data)
  );

  async function handleUpdateUser() {
    try {
      const user = await updateProfileMutation.mutateAsync({
        name: nameState,
      });

      await queryCLient.invalidateQueries([username]);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="orange"
        leftIcon={<MdModeEditOutline />}
      >
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                value={nameState}
                onChange={(e) => setNameState(e.target.value)}
                placeholder="Enter your name"
                defaultValue={name}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={updateProfileMutation.isLoading}
              onClick={handleUpdateUser}
              colorScheme="blue"
              mr={3}
            >
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
