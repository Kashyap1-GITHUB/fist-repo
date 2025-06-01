import { useContext } from "react";
import { recipescontext } from "../data/Recepiescontext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Singleditails = () => {
  const navigate = useNavigate();

  const [data, setdata] = useContext(recipescontext);

  const param = useParams();

  const recipe = data.find((recipes) => param.id == recipes.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm( {
      defaultvalue : {
      title: recipe.title,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      image: recipe.image,
      ChafeName: recipe.ChafeName,
      category: recipe.category,
      description: recipe.description,
    }

  });

  const onSubmit = (recipe) => {
    const index = data.findIndex((recipe) => param.id == recipe.id);

    const copydata = [...data];

    copydata[index] = { ...copydata[index], ...recipe };

    //  console.log(copydata[index]);

    setdata(copydata);

    toast.success("data Updated");

    reset(); // clears form after submission
  };

  const Deletehandler = () => {
    const filterdata = data.filter((recipe) => recipe.id !== param.id);

    setdata(filterdata);

    toast.success("recipes deleted!");

    navigate("/Racipies");
  };

  return (
    <div className="h-[100%] flex">
      <div className="left w-[50%]">
        <h1 className=" text-6xl pb-10 text-red-400 font-thin ">
          {recipe.title}
        </h1>
        <img
          className="bg-amber-600 w-[50%] h-[50%] rounded"
          src={recipe.image}
          alt=""
        />
      </div>

      <div className="w-[50%]">
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

          <div className="right py-3">
            <input
              {...register("title", {
                required: "title is required for Racipies",
              })}
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
            className="mr-10 mt-10 text-2xl py-2 px-8 rounded-2xl text-center justify-center align-middle bg-blue-600"
          >
            {" "}
            Update
          </button>
          <button
            onClick={Deletehandler}
            type="text"
            className="mt-10 text-2xl py-2 px-8 rounded-2xl text-center justify-center align-middle bg-red-600"
          >
            {" "}
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default Singleditails;
