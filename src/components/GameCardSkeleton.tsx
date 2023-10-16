import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

function GameCardSkeleton() {
  return (
    <Card width="300px" borderRadius={10} overflow={"hidden"}>
      <Skeleton h="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
