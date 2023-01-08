import { Card, CardBody, CardFooter, Stack } from "@chakra-ui/react";
import React from "react";
import { ICategory } from "../models/ICategoryResponse";
import { Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function CategoryItemPage({
  thumbnail,
  translations,
}: ICategory) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={thumbnail}
        alt="Caffe Latte"
      />
      <CardBody>
        <Heading size="md">{translations.ru.title}</Heading>
      </CardBody>
    </Card>
  );
}
