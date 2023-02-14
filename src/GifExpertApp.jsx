import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Coding' ])

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return

        setCategories( cate => [newCategory, ...cate] )
    }

    return (
        <>
            {/* Title */}
            <h1>Gif App ❤️</h1>

            {/* Input */}

            <AddCategory
                onNewCategory = { onAddCategory  }
            />

            {/* Listado de Gifs */}
            { categories.map( cate =>
                (
                    // Gif Item
                    <GifGrid key={ cate }
                            category={cate} />
                )
            )}



        </>
)
}
