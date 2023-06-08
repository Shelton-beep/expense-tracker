import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

interface Props {
  onSelectCategory: (category: string) => void;
}

export interface Category {
  id: number;
  name: string;
}

interface fetchingCategories {
  results: Category[];
}

export const ExpenseFilter = ({ onSelectCategory }: Props) => {
  const [categories, setCategory] = useState<Category[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get<fetchingCategories>("https://localhost:7058/api/Category", {
        signal: controller.signal,
      })
      .then((res) => {
        setCategory(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  if (error) {
    return null;
  }

  return (
    <>
      <select
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </>
  );
};
