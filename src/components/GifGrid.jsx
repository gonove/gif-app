
import { GifGridItem } from "./GifGridItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category )

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                {/* map de imagenes */}
                {
                    images.map( (images) => (
                        <GifGridItem
                            key={ images.id }
                            { ...images }
                        />
                    ))
                }
            </div>

        </>
    )
}
