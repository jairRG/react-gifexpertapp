import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp=()=> {

    //const categorias = ['Pokemon', 'Yugioh', 'DC'];
    const [categories, setCategories] = useState(['DC']);

    // const handleAdd = () =>{
    //     setCategories([...categories,'5DS']);
    // }
  return (
      <>
        <h2>GifExpertApp</h2> 
        < AddCategory setCategories={setCategories}/>
        <hr />

       
        <ol>
            {
                categories.map(category => 
                     <GifGrid 
                        key={category}
                        category={category} 
                     
                     />
                )
            }
        </ol>
      </>
    
   
  )
}
