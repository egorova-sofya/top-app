
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import s from './Header.module.css';

const Header = ({ ...props }:HeaderProps):JSX.Element => {
    return (
        <>
            <div {...props}>Header</div>
        </>
    );
};

export default Header;
