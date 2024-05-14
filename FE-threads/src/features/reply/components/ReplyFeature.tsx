/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, Box, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { useGetReply } from "../hooks/GetReplyHook";


function ReplyFeature() {
    useGetReply();

    return (

        <Grid width={"full"}>
            <Flex gap={3} borderBottom='1px solid blue' mt={100}>
                <Avatar size="sm" src={"user?.profile_picture"} />
                <Box mb={4}>
                    <HStack>
                        <Text
                            display="flex"
                            gap={1}
                            fontSize="xl"
                            fontWeight="medium"
                            color="blue"
                            cursor='pointer'
                        >
                            {"user?.full_name"}

                            <Text fontWeight="light" display="flex" color="blue" fontSize={"sm"} alignItems={"center"}>
                                @{"user?.username"} <BsDot color="blue" size={24} />
                                
                            </Text>
                        </Text>
                    </HStack>

                    <Text fontSize="md" color="blue" fontWeight={"normal"} mb={2}>
                        {"content"}
                    </Text>
                </Box>
            </Flex>
        </Grid>
    );
}

export default ReplyFeature;