export interface Category {
  id: number;
  name: string;
}

interface Props {
  categories: Category[];
  onDelete: (id: number) => void;
}

export const CategoriesList = ({ categories, onDelete }: Props) => {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Category Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>
                <button
                  className="btn btn-outline-danger mx-4"
                  onClick={() => onDelete(category.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => onDelete(category.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
