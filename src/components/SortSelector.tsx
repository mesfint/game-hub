import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
function SortSelector({ gameQuery }: Props) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {gameQuery.platform?.name || "Order by: Relevance"}
      </MenuButton>
      <MenuList>
        {/* {gameQuery.map((platform) => ( */}
        <MenuItem
        // key={platform.id}
        // onClick={() => onSelectPlatform(platform)}
        >
          {/* {platform.name} */} item 1
        </MenuItem>
        {/* ))} */}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
