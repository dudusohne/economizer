import { useContext } from 'react';
import { useQuery } from 'react-query';
import { endpoints } from '../services/endpoints';
import { AuthContext } from '../context/AuthContext';
import { CategoryType } from '../types';

export function useCategories() {
    const { db } = useContext(AuthContext);

    return useQuery<CategoryType[]>(
        ['get-categories'],
        async () => {
            const snap = await endpoints.getCategories(db);
            return snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as CategoryType[];
        },
        {
            staleTime: 1000 * 60 * 10, //10min
            cacheTime: 1000 * 60 * 30
        }
    );
}
