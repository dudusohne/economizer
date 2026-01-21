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
    "greyLight": theme.color.greyLight,
    "yellow": theme.color.yellow,
    "tertiary": theme.color.tertiary,
    "blue": theme.color.blue,
    "fifth": theme.color.fifth,
    "red": theme.color.red,
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
