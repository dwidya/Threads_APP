import FormLogin from "@/features/auth/components/FormLogin";
import { Box, Text } from "@chakra-ui/react";
// import FormLogin from "@/features/auth/components/FormLogin";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			marginTop={"50px"}
			color={"black"}>
			
			<FormLogin />
			<Box display={"flex"} gap={2} color={"blue"}>
				<Text>Don't have an account yet?</Text>
				<Text
					color={"blue"}
					cursor={"pointer"}
					onClick={() => navigate("/register")}>
					Create account
				</Text>
			</Box>
		</Box>
	);
}
