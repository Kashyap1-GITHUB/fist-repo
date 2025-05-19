import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Creat = (props) => {
  const Todolist = props.Todolist;
  const setTodolist = props.setTodolist;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submithandlare = (data) => {
    console.log(data);

    data.id = nanoid();
    data.isComplited = false;

    const copytodo = [...Todolist];
    copytodo.push(data);
    setTodolist(copytodo);

    toast.success("🟢 Success Todo Created!");

    reset();
  };

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(submithandlare)} className=" w-[60%] p-10  ">
        <h1 className="text-6xl font-thin text-gray-100 ">
          Set <span className="text-amber-600"> Reminders</span> for <br />
          tasks
        </h1>
        <input
          {...register("title", {
            required: "Title not ampty ",
          })}
          className="border-b w-full text-3xl font-thin mt-10  p-2 outline-0 text-white"
          type="text"
          placeholder="Enter Name"
        />
        {errors && errors.title && errors.title.message && (
          <span className="text-black-600 text-2xl">
            {errors.title.message}
          </span>
        )}
        <br />
        <br />
        <button
          className="bg-blue-400 text-4xl p-3 mt-10 rounded-2xl "
          type="submit"
        >
          Creat Todo
        </button>
      </form>
      <hr />
    </>
  );
};

export default Creat;
