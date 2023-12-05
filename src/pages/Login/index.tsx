import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { EcoButton } from "../../components/EcoButton";
import { signInWithGoogle } from "../../services/google.api";
import { GetFireBaseAdmin } from "../../services/firebase";
import { LoginContainer } from "./styles";
import { DividerHorizontal, FlexRow } from "../../Layout";
import { ESubtitle, EconomizerIconBig, EconomizerText } from "../../Layout/text";
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
            <FlexRow style={{ alignItems: 'center', marginBottom: '24px' }}>
                <EconomizerIconBig />
                <EconomizerText style={{ color: `${theme.color.secondary}`, fontSize: '36px' }}>economizer</EconomizerText>
            </FlexRow>
            <DividerHorizontal style={{ width: '22%' }} />

            <ESubtitle style={{ color: `${theme.color.greyDark}`, marginTop: '24px' }}>Faça login abaixo</ESubtitle>
            <EcoButton
                onClick={handleSignInWithGoogle}
                style={{ marginTop: '16px', minWidth: '200px', height: '45px' }}
            >LOGIN</EcoButton>
        </LoginContainer>
    )
}