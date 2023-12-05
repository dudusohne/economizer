import { ReactNode } from "react";

export type ProductType = {
    id?: number;
    name: string;
    prices?: string[];
    icon?: ReactNode;
    iconName?: string;
    categories?: ProductCategoriesType[];
}

export type ProductCategoriesType = string;

export type ListType = {
    id: number;
    description?: string;
    itens: number;
    totalValue?: number;
    createdAt?: string;
}

export type User = {
    uid?: string;
    displayName: string | null;
    name?: string | null;
    email: string | null;
    photoURL?: string | null;
}
   