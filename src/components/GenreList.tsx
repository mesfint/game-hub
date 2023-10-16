import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data, isLoading, error } = useGenres();
  //In this case GenreList know about the endpoint, but we don't want that
  //Therefore we use useData Inside useGenres to hide that
  //const { data } = useData<Genre>("/genres");

  if (isLoading) return <Spinner />; //This is  all we have to do for Spinner
  //BUt we have skeleton loading so no need spinner

  //error
  if (error) return null;

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
