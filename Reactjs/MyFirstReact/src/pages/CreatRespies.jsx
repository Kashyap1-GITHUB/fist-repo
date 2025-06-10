import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipescontext } from "../data/Recepiescontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreatRespies = () => {
  const [info, setinfo] = useContext(recipescontext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (recipe) => {
    recipe.id = nanoid();

    const copy = [...info];
    copy.push(recipe);
    localStorage.setItem("recipe", JSON.stringify(copy));
    setinfo(copy);

    toast.success("new recipes created");

    reset(); // clears form after submission

    navigate("/Recipies");
  };
  console.log(info);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" rounded-2xl px-20 ">
      <div className="py-3">
        <input
          {...register("image", { required: "Url is required" })}
          type="Url"
          placeholder="Enter Image Url"
          className=" rounded-2xl px-4 py-2 w-[50%] border-b-1 text-white"
        />
        {errors.image && (
          <p className="text-red-600  ">{errors.image.message}</p>
        )}
      </div>

      <div className="py-3">
        <input
          {...register("title", { required: "title is required for Racipies" })}
          type="text"
          placeholder="Recipies Tital"
          className=" rounded-2xl px-4 py-2 w-[50%] border-b-1 text-white"
        />
      </div>
      <div className="py-3">
        <input
          {...register("ChafeName", {
            required: "ChafeName is required for Racipies",
          })}
          type="text"
          placeholder="Chafe Name"
          className=" rounded-2xl px-4 py-2 w-[50%] border-b-1 text-white"
        />
      </div>
      <div className="py-3">
        <textarea
          {...register("description", {
            required: "Enter star from discription",
          })}
          type="textarea"
          placeholder="Discription"
          className="rounded-2xl px-4 py-2 w-[50%] border-b-1 text-white"
        ></textarea>
      </div>
      <div className="py-3">
        <input
          {...register("ingredients", {
            required: "write ingredients it is required",
          })}
          type="text"
          placeholder="write ingredients seperated by comma"
          className=" rounded-2xl px-4 py-2 w-[50%] border-b-1 text-white"
        />
      </div>
      <div className="py-3">
        <input
          {...register("instructions", {
            required: "write instructions it is required",
          })}
          type="text"
          placeholder="write instructions seperated by commaa"
          className=" rounded-2xl px-4 py-2 w-[50%] border-b-1 text-white"
        />
      </div>
      <div className="py-3">
        <select
          name="Dicess"
          className="bg-white text-black rounded text-[1.3rem]"
          {...register("category", { required: "plz chuse category" })}
          id=""
        >
          <option value="lunch">lunch</option>
          <option value="Breakfast">Breakfast</option>
          <option value="supper">supper</option>
          <option value="dinner">dinner</option>
        </select>
      </div>

      <button
        type="text"
        className="text-2xl py-2 px-8 rounded-2xl text-center justify-center align-middle bg-blue-600"
      >
        {" "}
        submit
      </button>
    </form>
  );
};

export default CreatRespies;
