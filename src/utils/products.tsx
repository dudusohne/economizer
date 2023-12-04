import { GiSlicedBread } from "react-icons/gi";
import { ItemType } from '../types/index';
import { LiaWineBottleSolid } from "react-icons/lia";
import { FaBottleWater } from "react-icons/fa6";
import { theme } from "../theme";

export const products: ItemType[] = [
    {
        id: 1,
        name: 'Pão',
        photo: '',
        prices: ['9,40'],
        icon: <GiSlicedBread fontSize={30} color={theme.color.secondary} />,
        categories: ["common", "cheap"]
    },
    {
        id: 2,
        name: 'Detergente',
        photo: '',
        prices: ['2,30', '2,19'],
        icon: <LiaWineBottleSolid fontSize={30} color={theme.color.secondary} />,
        categories: ["common", "cheap"]
    },
    {
        id: 3,
        name: 'Água Mineral',
        photo: '',
        prices: ['1,20'],
        icon: <FaBottleWater fontSize={30} color={theme.color.secondary} />,
        categories: ["common", "cheap"]
    },
    {
        id: 4,
        name: 'Omo Líquido',
        photo: '',
        prices: ['21,89'],
        icon: <LiaWineBottleSolid fontSize={30} color={theme.color.secondary} />,
        categories: ["common", "expensive"]
    },

]

