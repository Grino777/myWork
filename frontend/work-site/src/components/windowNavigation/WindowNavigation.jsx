import { Link } from 'react-router-dom'
import data from '../../resources/data/workWindowNavigation.json'

import './windowNavigation.scss'

const WindowNavigation = () => {
    const navMenu = Object.entries(data).map(([items, obj]) => {
        return (
            <li key={obj.id}>
                <Link to={obj.url} className="navigation-link">
                    {items}
                </Link>
            </li>
        )
    })

    return (
        <div className="window-navigate">
            <div></div>
            <ul className="navigation-list">{navMenu}</ul>
        </div>
    )
}

export default WindowNavigation
