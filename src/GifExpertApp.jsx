import { AddCategory, GifGrid } from "./components";

import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories ]);

    }


    return (
        <>
    
            <h1>GifExpertApp</h1>

            <AddCategory 
            onNewCategory={ onAddCategory }
            />

            {/* <button onClick={onAddCategory}>Agregar</button> */}

        {
            categories.map( category => (   
            <GifGrid 
            key={category} 
            category={ category }/>
            ))
        }

        </>
    )
}