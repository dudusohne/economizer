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
   