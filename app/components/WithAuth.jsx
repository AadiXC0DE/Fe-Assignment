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
          window.location.href = "/"; // Redirect to login if the user is not authenticated
        } else {
          setAuthenticated(true);
        }
      };

      checkAuth();
    }, []);

    if (authenticated) {
      return <Component {...props} />;
    } else {
      return null; // Alternatively, you can return a loading indicator or a login prompt here
    }
  };
};

withAuth.displayName = "withAuth";
export default withAuth;
