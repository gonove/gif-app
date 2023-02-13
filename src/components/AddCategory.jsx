import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('Hello World')

    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if ( inputValue.trim() <= 1 ) return
        // setCategories([ ...categories //no necesary send de cate in props, inputValue ])
        // setCategories( cate => [inputValue, ...cate] )
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder='Buscar gifs...'
                value={ inputValue }
                onChange = { onInputChange }
            />
        </form>
    )
}
