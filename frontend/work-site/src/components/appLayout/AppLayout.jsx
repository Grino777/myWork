import { Outlet } from 'react-router-dom'
import AppNavbar from '../appNavbar/AppNavbar'

import './appLayout.scss'

const AppLayout = () => {
    return (
        <div className="app">
            <AppNavbar />
            <div className="work-window">
                <Outlet />
            </div>
        </div>
    )
}

export default AppLayout
