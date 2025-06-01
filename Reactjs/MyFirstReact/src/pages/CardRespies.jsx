import { Link } from "react-router-dom";

const CardRespies = (props) => {
  const { id, title, image, ChafeName, deascc } = props.recipes;

  return (
    <Link 
    to={`/recipe/detail/${id}`} 
     className=" hover:scale-110 transition-transform duration-300 block w-[20vw] overflow-hidden rounded  border-1 border-blue-600 p-3 bg-purple-700 ">
      <img src={image} alt=""  className=" object-cover w-full h-[25vh] rounded-2xl "/>
      <h1 className="text-2xl  font-thin "  >{title}</h1>
      <p>{ChafeName}</p>
      <p>{deascc}...{" "}
        <span className="text-blue-700" >More</span>
      </p>

    </Link>
  );
};

export default CardRespies;
