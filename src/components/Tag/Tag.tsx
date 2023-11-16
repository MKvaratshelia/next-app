import { useMemo } from 'react';
import classNames from 'classnames';
import styles from './Tag.module.css';
import { TagProps } from './Tag.props';

export const Tag = ({
    size,
    color,
    href,
    children,
    className,
    ...props
}: TagProps): JSX.Element => {
    const classes = useMemo(() => {
        return {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.ghost]: color === 'ghost',
            [styles.red]: color === 'red',
            [styles.green]: color === 'green',
            [styles.primary]: color === 'primary',
        };
    }, [size, color]);
    return (
        <div className={classNames(styles.tag, className, classes)} {...props}>
            {href ? <a href={href}> {children}</a> : <>{children}</>}
        </div>
    );
};
