import { FormControl, Input, Text, Button } from "@chakra-ui/react";
import { FormRegisterHook } from "../hooks/FormRegisterHook";

export default function FormRegister() {
    const { handleChange, handleRegister } = FormRegisterHook();

    return (

        <FormControl
            isRequired
            display={"flex"}
            flexDirection={"column"}
            gap={3}
            width={"350px"}
            bg={"transparent"}
            color={"black"}
            border={"1px solid blue"}
            borderRadius={10}
            padding={5}
        >

            <Text color={"blue"} fontSize={"2xl"} fontWeight={"bold"}>
                Hoyolab
            </Text>

            <Text fontSize={"2xl"} fontWeight={"bold"} color={"blue"}>
                Create Account Connect
            </Text>

            <Input
                placeholder="Full name"
                name="full_name"
                onChange={handleChange}
            />

            <Input placeholder="Username" name="username" onChange={handleChange} />

            <Input placeholder="Email" name="email" onChange={handleChange} />

            <Input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
            />

            <Button
                backgroundColor={"blue"}
                colorScheme="green"
                color={"white"}
                onClick={handleRegister}>
                Create
            </Button>

        </FormControl>
    );
}
