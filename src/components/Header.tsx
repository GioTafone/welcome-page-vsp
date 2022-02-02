import React from "react";

interface IProps {
    header: string
}

const Header: React.FC<IProps> = ({ header }) => {
    return(
        <h1>{header}</h1>
    )
}

export default Header