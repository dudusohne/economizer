import { GiSlicedBread } from "react-icons/gi";
import { FaBottleWater } from "react-icons/fa6";
import { theme } from "../theme";

export const icons: any = {
    "bread": <GiSlicedBread fontSize={30} color={theme.color.secondary} />,
    "bottle": <FaBottleWater fontSize={30} color={theme.color.secondary} />,
}

export const categoryColor: any = {
    "common": 'red',
    "cheap": 'green',
}