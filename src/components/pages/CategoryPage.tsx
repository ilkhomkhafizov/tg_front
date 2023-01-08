import { ICategory } from "../models/ICategoryResponse";
import {
  Image,
  Heading,
  Box,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";

export default function CategoryPage({ thumbnail, translations }: ICategory) {
  return (
    <Box p="2">
      <Card maxW="sm">
        <CardBody>
          <Image
            boxSize="100px"
            maxW={{ base: '100%', sm: '200px' }}
            src={thumbnail}
            alt={translations.en.title}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3" textAlign="center">
            <Heading size="md" noOfLines={1}>{translations.ru.title}</Heading>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
