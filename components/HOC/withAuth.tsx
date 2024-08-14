/* eslint-disable react/display-name */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withAuthRoute = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

    useEffect(() => {
      const loggedIn = localStorage.getItem("isLoggedIn");
      setIsLoggedIn(loggedIn === "true");
    }, []);

    useEffect(() => {
      if (isLoggedIn === false) {
        router.push("/login");
      }
    }, [isLoggedIn, router]);

    if (isLoggedIn === null) {
      // Muestra algo mientras se verifica el estado de autenticación
      return null;
    }

    // Solo renderiza el componente si está autenticado o si la ruta no requiere autenticación
    return <WrappedComponent {...props} />;
  };
};

export default withAuthRoute;
