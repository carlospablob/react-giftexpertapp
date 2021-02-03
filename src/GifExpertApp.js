import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setcategories] = useState(['One Punch'])

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setcategories} />

            <hr />

            <ol>
                {
                    categories.map(category =>
                         <GiftGrid
                            key={category} 
                            category={category} />
                         )
                }
            </ol>
        </>
    )
}
