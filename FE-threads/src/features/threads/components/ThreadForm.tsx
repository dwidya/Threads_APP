import {
	Avatar,
	Box,
	Button,
	FormControl,
	HStack,
	Input,
} from "@chakra-ui/react";
import { BiImageAdd } from "react-icons/bi";
import { usePostThread } from "@/features/threads/hooks/usePostThread";
import { useSelector } from "react-redux";
import { RootState } from "@/store/type/RootState";

export default function ThreadForm() {
	const user = useSelector((state: RootState) => state.auth);
	const {
		handleButtonClick,
		handleChange,
		handlePost,
		setImage,
		isPending,
		fileInputRef,
		form,
	} = usePostThread();

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			handlePost();
		}
	};

	return (
		<form encType="multipart/form-data">
			<FormControl>
				<HStack
					mt={5}
					justify="space-between"
					border={"1px solid blue"}
					p={5}
					rounded={"full"}
						
					>
					<HStack w={"full"}>
						<Avatar
							size="lg"
							mr={2}
							name={user.full_name}
							src={user.profile_picture}
						/>
						<Input
							variant="unstyled"
							color="blue"
							placeholder="What is happening?!"
							_focus={{ color: "blue" }}
							name="content"
							rounded={"10"}
							onChange={handleChange}
							value={form.content}
							onKeyDown={handleKeyDown}
						/>
					</HStack>
					<HStack>
						<Box cursor="pointer">
							<BiImageAdd size={25} color="blue" onClick={handleButtonClick} />
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
	);
}
