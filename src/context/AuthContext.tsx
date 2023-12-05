// AuthContext.tsx
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { GetFireBaseAdmin } from "../services/firebase";
import { User } from "../types";

interface AuthContextType {
    user: User;
}

export const AuthContext = createContext<AuthContextType | any>({});

function Context({ children }: any) {
    const { auth, db } = GetFireBaseAdmin();
    const [user, setUser] = useState<User | undefined>()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [auth])

    return (
        <AuthContext.Provider value={{ user, db }}>
            {children}
        </AuthContext.Provider>
    );
}

export default Context;
