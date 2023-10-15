import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  // The hook useColorMode let you update color mode of your app in every cases.

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    // horizontal stack
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text>Dark Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
