import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import { CategoriesList } from "../../components/category/CategoriesList";
import { CategoryCard } from "../../components/category/CategoryCard";
import { CategoryForm } from "../../components/category/CategoryForm";

export interface Category {
  id: number;
  name: string;
}

interface fetchingCategories {
  results: Category[];
}

const CategoriesPage = () => {
  const [categories, setCategory] = useState<Category[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<fetchingCategories>("https://localhost:7058/api/Category", {
        signal: controller.signal,
      })
      .then((res) => {
        setCategory(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      {isLoading && <div className="spinner-border loader"></div>}
      {error && <h1>{error}</h1>}
      <CategoryForm onSubmit={() => console.log("submitted")} />

      <CategoryCard
        handleClick={() => setShowCategories(!showCategories)}
        count={categories.length}
        buttonName={showCategories ? "Hide Categories" : "Show Categories"}
        buttonColor={showCategories ? "danger" : "success"}
      />

      {showCategories && (
        <CategoriesList
          onDelete={(id) => setCategory(categories.filter((c) => c.id !== id))}
          categories={categories}
        />
      )}
    </>
  );
};

export default CategoriesPage;
