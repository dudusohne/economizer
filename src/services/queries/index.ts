import { useQuery, UseQueryOptions } from "react-query"

import { endpoints } from "../endpoints";
import { GetFireBaseAdmin } from "../firebase";
import { toast } from "react-toastify";

type Category = {
    id: string;
};

export const makeQuery = () => {
    const { db } = GetFireBaseAdmin();

    function useGetLists() {

        const { data: lists, error } = useQuery('get-lists', async () => {
            try {
                const querySnapshot = await endpoints.getLists(db);
                const lists = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    data.id = doc.id;
                    return data;
                });
                return lists
            } catch (error) {
                console.error('Error fetching lists:', error);
                return error;
            }
        });

        return { lists, error }
    }

    function useGetListById(id: string) {
        const { data: list, error } = useQuery(['get-list-by-id', id], async () => {
            try {
                const querySnapshot = await endpoints.getListById(db, id ?? '');
                if (querySnapshot.exists()) {
                    const data = querySnapshot.data();
                    data.id = querySnapshot.id;
                    console.log(':::::', data)
                    return data;
                }
            } catch (error: any) {
                toast.error('Error fetching products:', error);
                throw error;
            }
        });

        return { list, error }
    }

    //CATEGORY
    function useGetCategories() {

        const { data: categories, error } = useQuery('get-categories', async () => {
            try {
                const querySnapshot = await endpoints.getCategories(db);
                const categoriesData = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    data.id = doc.id;
                    return data;
                });
                return categoriesData
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        });

        return { categories, error }
    }

    function useGetCategoryById(
        id: string,
        options?: UseQueryOptions<Category>
    ) {
        return useQuery<Category>(
            ['get-category-by-id', id],
            async () => {
                const querySnapshot = await endpoints.getCategoryById(db, id);

                if (!querySnapshot.exists()) {
                    throw new Error('Category not found');
                }

                return {
                    id: querySnapshot.id,
                    ...querySnapshot.data(),
                } as Category;
            },
            {
                enabled: !!id,
                ...options,
            }
        );
    }


    return {
        useGetLists,
        useGetListById,
        useGetCategories,
        useGetCategoryById
    }
}