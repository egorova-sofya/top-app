import React from 'react';
import { PProps } from './P.props';
import cn from 'classnames';
import s from './P.module.css';

const P = ({children, size ='size16px', className, ...props }:PProps):JSX.Element => {
    return (
        <>
<p  className={cn(s.p, className, {
    [s.size18px]: size === 'size18px',
    [s.size16px]: size === 'size16px',
    [s.size14px]: size === 'size14px',
}
    )}
    {...props}
    >{children}</p>
        </>
    );
};

export default P;
