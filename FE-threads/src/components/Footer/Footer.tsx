import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import {
    BiLogoFacebook,
    BiLogoGithub,
    BiLogoInstagramAlt,
    BiLogoYoutube,
} from "react-icons/bi";

export default function FooterComponent() {
    return (
        <Card
            as={Flex}
            basis="10%"
            direction="column"
            gap={4}
            p={4}
            border={"1px solid blue"}
            color="blue">
            <Flex gap={4} flexDirection={"column"}>
                <Text fontSize={"sm"}>
                    Developed by{" "}
                    <Text as="span" fontWeight={600}>
                        Dwidya Dhamawanto
                    </Text>
                </Text>
                <Box as={Flex} gap={1}>
                    <BiLogoGithub />
                    <BiLogoFacebook />
                    <BiLogoInstagramAlt />
                    <BiLogoYoutube />
                </Box>
            </Flex>
            <Flex gap={2} align="center" color="blue">
                <Text fontSize="xs">Powered by</Text>
                <Image display="inline" h="16px" src="./src/assets/logo.png" />
                <Text fontSize="xs">Dumbways Indonesia</Text>
            </Flex>
        </Card>
    );
}
