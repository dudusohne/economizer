import { ReactNode } from "react";

export type ProductType = {
    id?: number;
    name?: string;
    prices?: string[];
    icon?: ReactNode;
    iconName?: string;
    categories: string[];
    onChangeCheckbox?: () => void;
    checked?: boolean;
    onClick?: () => void
}

export type ListType = {
    id?: number;
    description?: string;
    itens?: number;
    totalValue?: number;
    createdAt?: string;
    products?: any[];
    date?: string;
    sum?: number;
}

export interface CategoryType {
    id?: string;
    name: string;
    iconName?: string;
    color?: string;
    createdAt?: Date;
}

export type User = {
    uid?: string;
    displayName: string | null;
    name?: string | null;
    email: string | null;
    photoURL?: string | null;
}
   