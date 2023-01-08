import { Wrap, Spinner } from "@chakra-ui/react";
import ToastStatus from "../common/ToastStatus";
import { ICategory } from "../models/ICategoryResponse";
import { useCategoriesQuery } from "../redux/api/reference.api";
import CategoryPage from "./CategoryPage";

export const HomePage = () => {
  const { isLoading, isError, data: categories } = useCategoriesQuery(1);
  return (
    <div>
      {isError && <ToastStatus isError={isError} />}
      {isLoading && <Spinner size="lg" />}
      <Wrap>
        {categories &&
          categories.map((category: ICategory) => (
            <CategoryPage
              key={category.thumbnail}
              thumbnail={category.thumbnail}
              translations={category.translations}
            />
          ))}
      </Wrap>
    </div>
  );
};
