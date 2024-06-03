import { Link } from 'react-router-dom'

import data from '../../resources/data/navbarMenu.json'

import './appNavbar.scss'

const AppNavbar = () => {
    const navLi = Object.entries(data).map(([title, obj]) => {
        return (
            <li key={obj.id}>
                <Link to={obj.url}>{title}</Link>
            </li>
        )
    })

    return (
        <header className="header">
            <div className="header-content">
                <ul>{navLi}</ul>
            </div>
        </header>
    )
}

export default AppNavbar
