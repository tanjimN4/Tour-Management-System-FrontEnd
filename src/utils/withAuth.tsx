import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";
export const withAuth = (Component :ComponentType,requireRole?: TRole) => {
    return function AuthWrapper(){
        const {data,isLoading}=useUserInfoQuery(undefined);
        console.log(data);
        
        if (!isLoading && !data?.data?.email) {
            return <Navigate to="/login"/>
            
        }
        if (requireRole && !isLoading && requireRole !== data?.data?.role) {
            return <Navigate to="/unauthorized"/>
        }
        return <Component/>
    }
    
}