import { useContext, useEffect, useState } from "react";
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
  } = useForm();

  const update_h = (recipe) => {
    const index = data.findIndex((recipe) => param.id == recipe.id);

    const copydata = [...data];

    copydata[index] = { ...copydata[index], ...recipe };

    //  console.log(copydata[index]);

    setdata(copydata);
    localStorage.setItem("recipe", JSON.stringify(copydata));

    toast.success("data Updated");

    reset(); // clears form after submission
  };

  const Deletehandler = () => {
    const filterdata = data.filter((recipe) => recipe.id !== param.id);

    setdata(filterdata);
    localStorage.setItem("recipe", JSON.stringify(filterdata));
    localStorage.setItem("fav", JSON.stringify(filterdata));
    toast.success("recipes deleted!");
    navigate("/Recipies");
  };

  useEffect(() => {
    if (recipe) {
      reset({
        title: recipe.title,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        image: recipe.image,
        ChafeName: recipe.ChafeName,
        category: recipe.category,
        description: recipe.description,
      });
    }
  }, [recipe, reset]);
 

  const [Faverite, setFaverite] = useState(JSON.parse(localStorage.getItem("fav")) || [])

  // const Favarite = JSON.parse(localStorage.getItem("fav")) || [];

  const Favhandle = () => {
    let copyfav = [...Faverite];
    copyfav.push(recipe);
    localStorage.setItem("fav", JSON.stringify(copyfav));
    setFaverite(copyfav)
  };
  
  const unFavhandle = () => {
    const filter = Faverite.filter((f) => f.id != recipe?.id)
    localStorage.setItem("fav",JSON.stringify(filter))
    setFaverite(filter)
    console.log(filter);
  };
  console.log(Faverite);

  // console.log(Favarite.find((f) => f.id == recipe?.id))

  return (
    <div className="h-[100%] flex">
      <div className=" relative left w-[50%]">
        {Faverite.find((f) => f.id == recipe?.id) ? (
          <i
            onClick={unFavhandle}
            className="  absolute left-[80%] top-[13%] text-4xl ri-heart-fill"
          ></i>
        ) : (
          <i
            onClick={Favhandle}
            className="  absolute left-[80%] top-[13%] text-4xl ri-heart-line"
          ></i>
        )}

        <h1 className=" text-6xl pb-10 text-red-400 font-thin ">
          {recipe?.title}
        </h1>
        <img
          className="bg-amber-600 w-[50%] h-[50%] rounded"
          src={recipe?.image}
          alt=""
        />
      </div>

      <div className="w-[50%]">
        <form onSubmit={handleSubmit(update_h)} className=" rounded-2xl px-20 ">
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
              {...register("title")}
              type="text"
              placeholder="Recipies Tital"
              className=" rounded-2xl px-4 py-2 w-[50%] border-b-1 text-white"
            />
          </div>
          <div className="py-3">
            <input
              {...register("ChafeName")}
              type="text"
              placeholder="Chafe Name"
              className=" rounded-2xl px-4 py-2 w-[50%] border-b-1 text-white"
            />
          </div>
          <div className="py-3">
            <textarea
              {...register("description")}
              type="textarea"
              placeholder="Discription"
              className="rounded-2xl px-4 py-2 w-[50%] border-b-1 text-white"
            ></textarea>
          </div>
          <div className="py-3">
            <input
              {...register("ingredients")}
              type="text"
              placeholder="write ingredients seperated by comma"
              className=" rounded-2xl px-4 py-2 w-[50%] border-b-1 text-white"
            />
          </div>
          <div className="py-3">
            <input
              {...register("instructions")}
              type="text"
              placeholder="write instructions seperated by commaa"
              className=" rounded-2xl px-4 py-2 w-[50%] border-b-1 text-white"
            />
          </div>
          <div className="py-3">
            <select
              name="Dicess"
              className="text-white border-b-2 rounded text-[1.3rem]"
              {...register("category")}
              id=""
            >
              <option className="bg-black" value="lunch">
                lunch
              </option>
              <option className="bg-black" value="Breakfast">
                Breakfast
              </option>
              <option className="bg-black" value="supper">
                supper
              </option>
              <option className="bg-black" value="dinner">
                dinner
              </option>
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
