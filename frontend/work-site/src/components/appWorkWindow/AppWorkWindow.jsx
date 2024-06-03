import { Outlet } from 'react-router-dom';
import WindowNavigation from '../windowNavigation/WindowNavigation';
import WindowWorkspace from '../windowWorkspace/WindowWorkspace';

import './appWorkWindow.scss';

const AppWorkWindow = () => {
    return (
        <>
            <div className="empty"></div>
            <div className="window">
                <WindowNavigation />
                <WindowWorkspace>
                    <Outlet />
                </WindowWorkspace>
            </div>
        </>
    );
};

export default AppWorkWindow;
