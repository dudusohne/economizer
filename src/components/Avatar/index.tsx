import { AvatarContainer } from "./styles";

interface AvatarProps {
    image?: string;
}

export function Avatar({ image }: AvatarProps) {
    return (
        <AvatarContainer image={image}>
            <img src={image} alt='avatar' />
        </AvatarContainer>
    )
}