const Fav = () => {
  const fav = JSON.parse(localStorage.getItem("fav"));

  const redfav = fav.map((recipes) => (
 <div key={recipes.id} className="hover:scale-110 transition-transform duration-300 bg-white shadow-md rounded-2xl overflow-hidden h-[70%] w-80 m-4  ">
      <img src={recipes.image} alt={recipes.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{recipes.title}</h2>
        <p className="text-gray-600">{recipes.description}</p>
      </div>
    </div>
  ));

  console.log(fav);
  
  return <div className="bg-amber-200 w-full h-full flex " >
  {redfav}
   </div>;
};

export default Fav;
