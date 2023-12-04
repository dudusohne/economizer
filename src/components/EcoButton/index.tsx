import { ButtonContainer } from "./styles";

export function EcoButton({ children, ...rest }: any) {

    return (
        <ButtonContainer type='button' {...rest}>
            {children}
        </ButtonContainer>
    )
}