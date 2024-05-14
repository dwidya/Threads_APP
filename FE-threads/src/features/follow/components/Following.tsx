import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Spinner from "../../../components/Spinner";
import { useGetFollowing } from "../hooks/FollowsHook";

export default function Following() {
  const { getFollowing, isLoading } = useGetFollowing();
  if (isLoading) return <Spinner />;

  const { following } = getFollowing;
  console.log(following);
  

  return (
    <Box>
      <Card bgColor="blue.700" color="blue.100">
        <CardHeader>
          <Heading size="md">
            Your following : {following?.length}
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {following?.map((following: any) => (
              <Box key={following?.id}>
                <Flex gap="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name={following?.full_name}
                      src={following?.profile_picture}
                      size="sm"
                    />
                    <Box>
                      <Heading size="sm">{following?.full_name}</Heading>
                      <Text fontSize={"sm"} color={"whiteAlpha.500"}>
                        @{following?.username}
                      </Text>
                      <Text fontSize="sm">
                        {following?.profile_description
                          ? following?.profile_description
                          : "no description"}
                      </Text>
                    </Box>
                  </Flex>
                  <Flex alignItems={"center"}></Flex>
                </Flex>
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
