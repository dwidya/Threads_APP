import { Avatar, Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { ThreadType } from "@/types/ThreadType";
import getPostedTime from "@/utils/getPostedTime";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/type/RootState";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "@/config/api";

function ThreadBase(props: ThreadType) {
    const { content, image, user, replies, likes, createdAt, id } = props;
    
    console.log(likes);

    const [like, setLike] = useState({
		thread: id,
	});
	const userId = useSelector((state: RootState) => state?.auth);

	const queryClient = useQueryClient();

    const created_At= getPostedTime(createdAt)
    console.log(props, "bang")

	const { mutate: handleLike } = useMutation({
		mutationFn: () => {
			return API.post(`like`, like);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["thread"] });
		},
		onError: (error) => {
			console.log(error);
		},
	});

	function handleClick() {
		setLike({ thread: id });
		handleLike();
	}



    // console.log("time",props.createdAt);
    
    return (
        <Flex gap={3} borderBottom='1px solid gray' >

            <Avatar size="sm" src={user?.profile_picture} />

            <Box mb={4}>
                <HStack>
                    <Text
                        display="flex"
                        gap={1}
                        fontSize="sm"
                        fontWeight="semibold"
                        color="blue"
                        cursor='pointer'
                    >
                        {user?.full_name}
                        <Text fontWeight="light" display="flex" color="blue">
                            @{user?.username} <BsDot color="blue" size={24} />
                            <Text>{created_At}</Text>


                        </Text>
                    </Text>

                
                    

                </HStack>

                <Text fontSize="xs" color="blue" fontWeight='light' mb={2}>
                    {content}
                </Text>

                {image && <Image src={image} />}

                <HStack spacing={6}>                    
                    <HStack
                        onClick={handleClick}
                        cursor="pointer"
                        color="blue."
                        mt={2}
                    >
                        <AiFillHeart 
                            size={20}
                            color={
                                likes?.map((like) => like?.user?.id).includes(userId.id)
                                ? "red" : ""}
                                 />
                        <Text fontSize="sm" color="blue.">
                            {likes?.length}
                        </Text>
                    </HStack>

                    <Link to={`/thread/${id}`}>
                    <HStack cursor="pointer" color="blue." mt={2}>
                        <BiCommentDetail size={20} />
                        <Text fontSize="sm" color="blue.">
                            {replies?.length}
                        </Text>
                    </HStack>
                    </Link>
                </HStack>

            </Box>

        </Flex>
    );
}

export default ThreadBase;