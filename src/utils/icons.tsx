/* eslint-disable no-unsafe-optional-chaining */
import { GiSlicedBread, GiFruitBowl, GiFrozenOrb } from "react-icons/gi";
import { GiMeat } from "react-icons/gi";
import { FaBottleWater } from "react-icons/fa6";
import { MdOutlineCleaningServices, MdBathroom } from "react-icons/md";
import { FaDog } from "react-icons/fa";
import { FaCandyCane } from "react-icons/fa";
import { GiCigarette } from "react-icons/gi";
import { theme } from "../theme";
import { IconType } from "react-icons";

export const icons: Record<string, IconType> = {
    bread: GiSlicedBread,
    bottle: FaBottleWater,
    fruit: GiFruitBowl,
    frozen: GiFrozenOrb,
    cleaning: MdOutlineCleaningServices,
    bathroom: MdBathroom,
    cigarrete: GiCigarette,
    candy: FaCandyCane,
    meat: GiMeat,
    dog: FaDog,
};

export const categoryColor: Record<string, string> = {
    "greyLight": theme.color.categoryColor5,
    "yellow": theme.color.categoryColor1,
    "tertiary": theme.color.categoryColor6,
    "blue": theme.color.categoryColor4,
    "fifth": theme.color.categoryColor3,
    "red": theme.color.categoryColor2,
}
interface RenderIconProps {
    name?: string;
    size?: number;
    color?: string;
}

export const renderIcon = ({
    name,
    size = 24,
    color = theme.color.secondary,
}: RenderIconProps) => {
    if (!name || !icons[name]) return null;

    const Icon = icons[name];
    return <Icon size={size} color={color} />;
};

export function formatDateBR(date: string) {
    if (date === "" || date === undefined) return
    const [year, month, day] = date?.split('-');
    return `${day}/${month}/${year}`;
}

export function getLocalISODate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}
