import React from 'react';
import { PProps } from './Tag.props';
import cn from 'classnames';
import s from './Tag.module.css';

const Tag = ({children, size ='m', color='ghost', href, className, ...props }:PProps):JSX.Element => {
    return (
        <>
<div  className={cn(s.tag, className, {
    [s.m]: size === 'm',
    [s.l]: size === 'l',
    [s.ghost]: color === 'ghost',
    [s.red]: color === 'red',
    [s.gray]: color === 'gray',
    [s.green]: color === 'green',
    [s.primary]: color === 'primary',

}
    )}
    {...props}
    >{href ? <a href={href}>{children}</a> : <>{children}</>} </div>
        </>
    );
};

export default Tag;
