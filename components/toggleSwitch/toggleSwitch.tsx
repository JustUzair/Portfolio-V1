import { useTheme } from "next-themes";
import React from "react";


export default function Toggle({ toggled, handleClick, changeTheme }) {

    return (
        <div onClick={() => { changeTheme(), handleClick() }} className={`toggle${toggled ? " night" : ""}`}>
            <div className="notch">
                <div className="crater" />
                <div className="crater" />
            </div>
            <div>
                <div className="shape sm" />
                <div className="shape sm" />
                <div className="shape md" />
                <div className="shape lg" />
            </div>
        </div>
    );
}