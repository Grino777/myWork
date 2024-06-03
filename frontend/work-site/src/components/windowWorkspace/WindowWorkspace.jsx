import { Outlet } from 'react-router-dom';

import './windowWorkspace.scss';

const WindowWorkspace = () => {
    return (
        <div className="window-workspace">
            <Outlet />
        </div>
    );
};

export default WindowWorkspace;
