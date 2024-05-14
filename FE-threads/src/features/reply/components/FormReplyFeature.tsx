import {
	Avatar,
	Box,
	Button,
	Divider,
	FormControl,
	HStack,
	Image,
	Input,
	Text,
} from "@chakra-ui/react";
import { BiImageAdd } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "@/store/type/RootState";
import { usePostReply } from "../hooks/PostReplyHook";
import { ReplyType } from "@/types/ReplyType";

type RepliesProps = {
	threadReply: {
		replies: ReplyType[];
	};
};


export default function FormReplyFeature({ threadReply }: RepliesProps) {
	const user = useSelector((state: RootState) => state.auth);
	const {
		handleButtonClick,
		handleChange,
		handlePost,
		setImage,
		isPending,
		fileInputRef,
		form,
	} = usePostReply();
	
	return (
		<>
			<form encType="multipart/form-data">
				<FormControl mb={15}>
					<HStack
						mt={5}
						p={15}
						justify="space-between"
						border={"1px solid blue"}
						borderRadius={"full"}>
						<HStack w={"full"}>
							<Avatar
								size="sm"
								mr={3}
								name={user.full_name}
								src={user.profile_picture}
							/>
							<Input
								variant="unstyled"
								color="blue"
								placeholder="Reply to this thread!"
								_focus={{ color: "blue" }}
								name="content"
								onChange={handleChange}
								value={form.content}
							/>
						</HStack>
						<HStack>
							<Box cursor="pointer">
								<BiImageAdd
									size={25}
									color="blue"
									onClick={handleButtonClick}
								/>
								<Input
									type="file"
									name="image"
									onChange={(e) => {
										if (e.target?.files) {
											setImage(e.target?.files[0]);
										} else {
											setImage(null);
										}
									}}
									style={{ display: "none" }}
									ref={fileInputRef}
								/>
							</Box>
							<Button
								colorScheme="blue"
								size="xs"
								px={3}
								rounded="full"
								onClick={() => handlePost()}
								isLoading={isPending}>
								Post
							</Button>
						</HStack>
					</HStack>
				</FormControl>
			</form>
			{threadReply.replies.map((reply: ReplyType) => (
				<Box key={reply.id} px="12" pt="3">
					<Box display="flex" gap="8px">
						<Avatar
							name={reply.user?.full_name}
							src={reply.user?.profile_picture}
							size="sm"
							mr="3"
							_hover={{
								cursor: "pointer",
							}}
						/>
						<Text fontWeight="semibold" fontSize="xs" color={"blue"}>
							{reply.user?.full_name}
						</Text>
					</Box>
					<Box px={12} py={3}>
						{reply.image && (
							<Image
								src={reply.image}
								boxSize="200px"
								objectFit="cover"
								alt="Dan Abramov"
								rounded="md"
								mb={3}
								
							/>
						)}
						<Text color={"blue"} fontSize="xs">
							{reply.content}
						</Text>
					</Box>
					<Divider />
				</Box>
			))}
		</>
	);
}

