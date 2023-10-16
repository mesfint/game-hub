import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data } = useGenres();
  //In this case GenreList know about the endpoint, but we don't want that
  //Therefore we use useData Inside useGenres to hide that
  //const { data } = useData<Genre>("/genres");

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
