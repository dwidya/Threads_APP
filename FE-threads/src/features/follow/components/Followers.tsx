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
import { useGetFollower } from "../hooks/FollowsHook";
import Spinner from "@/components/Spinner";

export default function Followers() {
  const { getFollower, isLoading } = useGetFollower();
  if (isLoading) return <Spinner />;

  const { follower } = getFollower;
  console.log(follower);

  return (
    <Box>
      <Card bgColor="blue.700" color="blue.100">
        <CardHeader>
          <Heading size="md">
            Your Followers: {follower?.length}
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {getFollower?.follower?.map((follower: any) => {
              return (
                <Box key={follower?.id}>
                  <Flex gap="4">
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                      <Avatar
                        name={follower?.full_name}
                        src={follower?.profile_picture}
                        size="sm"
                      />
                      <Box>
                        <Heading size="sm">{follower?.full_name}</Heading>
                        <Text fontSize={"sm"} color={"whiteAlpha.500"}>
                          @{follower?.username}
                        </Text>
                        <Text fontSize="sm">
                          {follower?.profile_description
                            ? follower?.profile_description
                            : "no description"}
                        </Text>
                      </Box>
                    </Flex>
                    <Flex alignItems={"center"}></Flex>
                  </Flex>
                </Box>
              );
            })}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
