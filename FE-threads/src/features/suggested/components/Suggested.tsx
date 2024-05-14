import { Box, Card, Stack, Text } from "@chakra-ui/react";
import SuggestedBase from "@/features/suggested/components/SuggestedBase";
import Spinner from "@/components/Spinner";
import { useGetUser } from "../hooks/SuggestedHook";
import { RootState } from "@/store/type/RootState";
import { useSelector } from "react-redux";

export default function SuggestedComponent() {
  const { GetUser, isLoading } = useGetUser();
  
  const signInUser = useSelector((state: RootState) => state?.auth);

  const List = GetUser?.filter((user: any) => user.id !== signInUser?.id);
  console.log(List);
  

  if (isLoading) return <Spinner />;

  return (
    <Card bg="whiteAlpha.200" p={4} border={"1px solid blue"} >
      <Text color="blue">Suggested for you</Text>
      <Box overflowY={"auto"} className="scroll" mt={3} >
        <Stack>
          {List.map((user: any) => (
            <SuggestedBase
            key={user?.id}
            user_id={user?.id}
            username={user?.username}
            full_name={user?.full_name}
            profile_picture={user?.profile_picture}
            following={user?.following}
            follower={user?.follower}
            />
          ))}
        </Stack>
      </Box>
    </Card>
  );
}
