
import { FooterProps } from './Footer.props';
import cn from 'classnames';
import s from './Footer.module.css';
import { format } from 'date-fns';

const Footer = ({className,  ...props }:FooterProps):JSX.Element => {
    return (
        <>
            <footer className={cn(className, s.wrapper)} {...props}>
                <p>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</p>
                <p className={s.agreement}>
                    <a href='#' target='_blank'>Пользовательское соглашение</a>
                    </p>
                <p className={s.policy}>
                    <a href='#' target='_blank'>Политика конфиденциальности</a>
                    </p>
            </footer>
        </>
    );
};

export default Footer;
