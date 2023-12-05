import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { EcoButton } from "../../components/EcoButton";
import { signInWithGoogle } from "../../services/google.api";
import { GetFireBaseAdmin } from "../../services/firebase";
import { LoginContainer } from "./styles";
import { FlexRow } from "../../Layout";
import { EconomizerIcon, EconomizerText } from "../../Layout/text";
import { theme } from "../../theme";

export function Login() {
    const { auth, db } = GetFireBaseAdmin();

    const navigate = useNavigate()

    const handleSignInWithGoogle = async () => {
        try {
            const response = await signInWithGoogle(auth, db)
            if (response.status) {
                navigate('/')
            }
        } catch (err) {
            toast.error('Recarregue a página e tente novamente!')
        }
    };

    return (
        <LoginContainer>
            <FlexRow style={{ alignItems: 'center', marginBottom: '16px' }}>
                <EconomizerIcon />
                <EconomizerText style={{ color: `${theme.color.secondary}`}}>economizer</EconomizerText>
            </FlexRow>
            <EcoButton onClick={handleSignInWithGoogle}>LOGIN</EcoButton>
        </LoginContainer>
    )
}