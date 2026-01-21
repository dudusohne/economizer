import { useContext } from "react"
import { toast } from "react-toastify"

import { endpoints } from "../services/endpoints"
import { AuthContext } from "../context/AuthContext"
import { queryClient } from "../services/queryClient"

const useProducts = () => {
    const { db } = useContext(AuthContext)

    const handleAddProduct = async (formState: any) => {
        const product = {
            name: formState.name,
            prices: formState.prices,
            iconName: formState.iconName,
            categories: formState.categories
        }
        try {
            await endpoints.addProduct(db, product)
            toast.success('New Product saved!')
            queryClient.invalidateQueries('get-products')
        } catch (err) {
            toast.error('Product not saved, please try again')
        }
    }

    return {
        handleAddProduct
    }
}

export default useProducts
