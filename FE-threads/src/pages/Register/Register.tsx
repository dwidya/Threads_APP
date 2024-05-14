import { Box, Text } from "@chakra-ui/react";
import FormRegister from "@/features/auth/components/FormRegister";
import { useNavigate } from "react-router-dom";
export default function Register() {
	const navigate = useNavigate();
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			marginTop={"50px"}
			color={"black"}>
			<FormRegister />
			<Box display={"flex"} gap={2} color={"blue"}>
				<Text>Already have account?</Text>
				<Text
					color={"blue"}
					cursor={"pointer"}
					onClick={() => navigate("/login")}>
					Login
				</Text>
			</Box>
		</Box>
	);
}
