import { NavigateFunction } from "react-router-dom";
import PageController from "./PageController";

type Navigate = {
    page: JSX.Element;
}

import { useContext } from "react";
import { UserContext } from "../contexts/ContextUser"; 

export const MobileFrame = ({ page }: Navigate) => {

    const { user } = useContext(UserContext);
    
    return (
        <div className="mobile-behavior">
            <div className="menu-mobile-container">
                <div className="menu-perfil menu-perfil-mobile">
                    <div className="avatar joao"></div>
                    <h3>{user.role}</h3>
                    <p>{user.name}</p>
                </div>
            </div>
            <PageController page={page} />
            <div className="logo-mobile-container">
                <div className="logo-mobile-behavior"></div>
            </div>
        </div>
    )
}