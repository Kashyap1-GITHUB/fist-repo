import React, { createContext, useContext, useState } from "react";

export const recipescontext = createContext(null);

const Recepiescontext = (props) => {
  const [info, setinfo] = useState([
    {
      id: 1,
      title: "Classic Margherita Pizza",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      servings: 4,
      difficulty: "Easy",
      cuisine: "Italian",
      caloriesPerServing: 300,
      tags: ["Pizza", "Italian"],
      userId: 166,
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      ChafeName: "baghel kashyap",
      category: "dinner",
      description:
        "Roll out the pizza dough and spread tomato sauce evenly.Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
    },
  ]);

  return (
    <recipescontext.Provider value={[info, setinfo]}>
      {props.children}
    </recipescontext.Provider>
  );
};

export default Recepiescontext;
