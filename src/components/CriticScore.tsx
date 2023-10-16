import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score > 60 ? "Yellow" : "";
  return (
    <div>
      <Badge
        fontSize={"14px"}
        paddingX={2}
        borderRadius={"4px"}
        colorScheme={color}
      >
        {score}
      </Badge>
    </div>
  );
}

export default CriticScore;
