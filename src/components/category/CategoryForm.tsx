import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name should be at least 3 characters." })
    .max(50, { message: "Name cannot be more than 50 characters" }),
});

type CategoryFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: CategoryFormData) => void;
}

export const CategoryForm = ({ onSubmit }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Category Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
