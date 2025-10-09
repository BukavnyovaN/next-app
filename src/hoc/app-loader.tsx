"use client";

import { useAuthStore } from "@/store/auth.store";
import { useSession } from "next-auth/react";
import { useEffect, ReactNode } from "react";

type AppLoaderProps = {
  children: ReactNode;
}

const AppLoader = ({ children }: AppLoaderProps) => {
  const { data: session, status } = useSession();
  const { setAuthState } = useAuthStore();

  useEffect(() => {
    setAuthState(status, session);
  }, [status, session, setAuthState]);

  return <>{children}</>;
};

export default AppLoader;