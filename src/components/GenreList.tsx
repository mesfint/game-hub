import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Genre, useGenres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
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
            <Button
              onClick={() => onSelectGenre(genre)}
              variant={"link"}
              fontSize="lg"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} //make the selected Genre highlighted, also update the component in App.tsx
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
