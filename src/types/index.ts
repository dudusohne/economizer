import { ReactNode } from "react";

export type ItemType = {
    id: number;
    name: string;
    photo?: string;
    prices?: string[];
    icon?: ReactNode;
    categories?: ItemCategories[];
}

export type ItemCategories = 'cheap' | 'common' | 'expensive' | 'rare'