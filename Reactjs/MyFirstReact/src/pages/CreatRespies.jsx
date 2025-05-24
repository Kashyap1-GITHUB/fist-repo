import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipescontext } from "../data/Recepiescontext";

const CreatRespies = () => {
  const [info, setinfo] = useContext(recipescontext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, index) => {
    data.id = nanoid();

    const copy = [...info];
    copy.push(data);
    setinfo(copy);

    reset(); // clears form after submission
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
        {errors.image && <p className="text-red-600  ">{errors.image.message}</p>}
      </div>

      <div className="py-3">
        <input
          {...register("Title", { required: "Title is required for Racipies" })}
          type="text"
          placeholder="Recipies Tital"
          className=" rounded-2xl px-4 py-2 w-[50%] border-b-1 text-white"
        />
        {errors.Title && <p className="text-red-600">{errors.Title.message}</p>}
      </div>
      <div className="py-3">
        <input
          {...register("ChafeName", {
            required: "Title is required for Racipies",
          })}
          type="text"
          placeholder="Chafe Name"
          className=" rounded-2xl px-4 py-2 w-[50%] border-b-1 text-white"
        />
        {errors.ChafeName && (
          <p className="text-red-600">{errors.ChafeName.message}</p>
        )}
      </div>
      <div className="py-3">
        <input
          {...register("description", { required: "Enter star from dice" })}
          type="text"
          placeholder="Star from here"
          className=" rounded-2xl px-4 py-2 w-[50%] border-b-1 text-white"
        />
        {errors.description && <p className="text-red-600">{errors.description.message}</p>}
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
        {errors.ingredients && (
          <p className="text-red-600">{errors.ingredients.message}</p>
        )}
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
        {errors.instructions && (
          <p className="text-red-600">{errors.instructions.message}</p>
        )}
      </div>
      <div className="py-3">
        <select
          name="Dicess"
          className="bg-white text-black rounded text-[1.3rem]"
          {...register("country", { required: "plz chuse country" })}
          id=""
        >
          <option value="indian">indian</option>
          <option value="italy">italy</option>
          <option value="US">US</option>
          <option value="new lande">New lande</option>

          {errors.country &&
            errors.country.message &&
            console.log(errors.country.message)}
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
