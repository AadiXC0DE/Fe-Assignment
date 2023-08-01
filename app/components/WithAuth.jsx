"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../api/api";

const withAuth = (Component) => {
  return (props) => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      const checkAuth = async () => {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user) {
          window.location.href = "/auth";
        } else {
          setAuthenticated(true);
        }
      };

      checkAuth();
    }, []);

    if (authenticated) {
      return <Component {...props} />;
    } else {
      return null;
    }
  };
};

withAuth.displayName = "withAuth";
export default withAuth;
