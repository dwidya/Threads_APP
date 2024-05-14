import { RootState } from "@/store/type/RootState";
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useGetUser } from "@/features/profile/hooks/ProfileHook";

function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const detailProfile = useSelector((state: RootState) => state?.auth);
  const { GetUser, isLoading } = useGetUser();

  // const { mutate, isPending, handlechangeinput, descriptio, setDescription } = useUpdateProfile();

  return (
    <Box display="flex" flexDirection="column" gap={5} border={"1px solid blue"}>
      <Card bg="whiteAlpha.200" p={4} minW="400px">
        <Text color="blue">Profile</Text>
        <Box
          pos="relative"
          backgroundPosition="center"
          h="15rem"
          mt={3}
          rounded="xl"
          bgImage="https://images5.alphacoders.com/112/1123013.jpg"
          
        >
          <Box
            pos="absolute"
            bottom={"-60px"}
            left={4}
            p={1}
            bg="blackAlpha.800"
            rounded="full"
          >
            <Avatar
              w={"100px"}
              h={"100px"}
              src={detailProfile.profile_picture}
            />
          </Box>
        </Box>

        <Stack spacing={0} mt={"50px"}>
          <Flex gap={4}>
            <Flex align={"center"}>
              <Text mt={3} fontSize="2xl" fontWeight="semibold" color="blue">
                {detailProfile?.full_name}
              </Text>
            </Flex>
            <Flex align={"center"} mt={"6px"}>
              <Text mt={3} fontSize="lg" color="blue.600">
                @{detailProfile?.username}
              </Text>
            </Flex>
          </Flex>
          <Text fontSize="sm" color="blue.800">
            {!detailProfile?.profile_description ? (
              <Text>No description</Text>
            ) : (
              <Text>{detailProfile?.profile_description}</Text>
            )}
          </Text>
          {isLoading ? (
            "LOADING"
          ) : (
            <HStack fontSize={"md"} mt={"50px"}>
              <HStack>
                <Text color="Blue.800">{GetUser.following?.length}</Text>
                <Text color="Blue.600">Following</Text>
              </HStack>
              <HStack>
                <Text color="Blue.800">{GetUser.follower?.length}</Text>
                <Text color="Blue.600">Followers</Text>
              </HStack>
            </HStack>
          )}

          <Button
            mt="3"
            width="15%"
            size="sm"
            rounded="full"
            colorScheme="blue"
            onClick={onOpen}
          >
            Edit Profile
          </Button>
        </Stack>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update your profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Name:</Text>
            <Input placeholder="update your name" />
            {/* <Input placeholder="update your name" value={detailProfile?.full_name} onChange={handleChange} /> */}
            <Text>Description:</Text>
            <Input placeholder="update your description" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue">Update Profile</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Profile;
