import { FormControl, Input, Text, Button, Box } from "@chakra-ui/react";
import { FormLoginHook } from "../hooks/FormLoginHook";

export default function FormLogin() {
	const { handleChange, handleLogin } = FormLoginHook();

	return (
		<FormControl
			isRequired
			display={"flex"}
			flexDirection={"column"}
			gap={3}
			width={"350px"}
			bg={"transparent"}
			color={"black"}
			border={"1px solid black"}
			borderRadius={10}
			padding={5}	
		>

			<Text color="blue" fontSize={"2xl"} fontWeight={"bold"} >
				Hoyolab
			</Text>

			<Text fontSize={"2xl"} fontWeight={"bold"} color={"blue"}>
				Login to Hoyolab
			</Text>

			<Input
				placeholder="Username"
				name="username"
				onChange={handleChange}
			/>

			<Input
				type="password"
				placeholder="Password"
				name="password"
				onChange={handleChange}
				color={"black"}
			/>

			<Box display="flex" justifyContent={"flex-end"} color={"blue"}> 

				<Text>Forgot password?</Text>

			</Box>

			<Button
				backgroundColor={"blue"}
				colorScheme="green"
				color={"white"}
				onClick={handleLogin}>
				Login
			</Button>

		</FormControl>
	);
}
