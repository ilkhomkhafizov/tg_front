import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

interface HeaderProps {
    title: string;
}

export default function Header({title}:HeaderProps) {
  return (
    <Box fontSize="xl">
      <Flex minWidth="max-content" alignItems="center" gap="2" p={3}>
        <Box p="2">
          <Heading size="md">{title}</Heading>
        </Box>
        <Spacer />
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </Box>
  );
}
