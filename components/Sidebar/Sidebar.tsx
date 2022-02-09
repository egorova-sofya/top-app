
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import s from './Sidebar.module.css';

const Sidebar = ({ ...props }:SidebarProps):JSX.Element => {
    return (
        <>
            <div {...props}>
                Sidebar
            </div>
        </>
    );
};

export default Sidebar;
