import { GiSlicedBread, GiFruitBowl, GiFrozenOrb } from "react-icons/gi";
import { GiMeat } from "react-icons/gi";
import { FaBottleWater } from "react-icons/fa6";
import { MdOutlineCleaningServices, MdBathroom } from "react-icons/md";
import { FaDog } from "react-icons/fa";
import { FaCandyCane } from "react-icons/fa";
import { GiCigarette } from "react-icons/gi";
import { theme } from "../theme";

export const icons: Record<string, any> = {
    "bread": <GiSlicedBread fontSize={30} color={theme.color.secondary} />,
    "bottle": <FaBottleWater fontSize={30} color={theme.color.secondary} />,
    "fruit": <GiFruitBowl fontSize={30} color={theme.color.secondary} />,
    "frozen": <GiFrozenOrb fontSize={30} color={theme.color.secondary} />,
    "cleaning": <MdOutlineCleaningServices fontSize={30} color={theme.color.secondary} />,
    "bathroom": <MdBathroom fontSize={30} color={theme.color.secondary} />,
    "cigarrete": <GiCigarette fontSize={30} color={theme.color.secondary} />,
    "candy": <FaCandyCane fontSize={30} color={theme.color.secondary} />,
    "meat": <GiMeat fontSize={30} color={theme.color.secondary} />,
    "dog": <FaDog fontSize={30} color={theme.color.secondary} />,
}

export const categoryColor: Record<string, string> = {
    "greyLight": theme.color.greyLight,
    "yellow": theme.color.yellow,
    "tertiary": theme.color.tertiary,
    "blue": theme.color.blue,
    "fifth": theme.color.fifth,
    "red": theme.color.red,
}