import { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../contexts/auth"
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'
import './title.css'

export default function Title({children, name}) {
    const { user } = useContext(AuthContext);

    return (
        <div className="title">
            {children}
           <span>{name}</span>
        </div>
    )
}