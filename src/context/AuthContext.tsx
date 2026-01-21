import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { GetFireBaseAdmin } from "../services/firebase";
import { User } from "../types";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    db: any;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

function Context({ children }: any) {
    const { auth, db } = GetFireBaseAdmin();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser as User);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth]);

    return (
        <AuthContext.Provider value={{ user, loading, db }}>
            {children}
        </AuthContext.Provider>
    );
}

export default Context;

