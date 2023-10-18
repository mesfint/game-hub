import {
  Box,
  Flex,
  HStack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";

function ColorModeSwitch() {
  // The hook useColorMode let you update color mode of your app in every cases.

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    // horizontal stack
    <Flex paddingLeft={2} marginRight={5}>
      <Switch
        marginRight={5}
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace={"nowrap"}>Dark Mode</Text>
    </Flex>
  );
}

export default ColorModeSwitch;
