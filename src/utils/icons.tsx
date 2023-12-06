import { GiSlicedBread, GiFruitBowl, GiFrozenOrb } from "react-icons/gi";
import { FaBottleWater } from "react-icons/fa6";
import { MdOutlineCleaningServices, MdBathroom } from "react-icons/md";
import { theme } from "../theme";

export const icons: Record<string, any> = {
    "bread": <GiSlicedBread fontSize={30} color={theme.color.secondary} />,
    "bottle": <FaBottleWater fontSize={30} color={theme.color.secondary} />,
    "fruit": <GiFruitBowl fontSize={30} color={theme.color.secondary} />,
    "frozen": <GiFrozenOrb fontSize={30} color={theme.color.secondary} />,
    "cleaning": <MdOutlineCleaningServices fontSize={30} color={theme.color.secondary} />,
    "bathroom": <MdBathroom fontSize={30} color={theme.color.secondary} />
}

export const categoryColor: Record<string, string> = {
    "common": 'red',
    "cheap": 'green',
}