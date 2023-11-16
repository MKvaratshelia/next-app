import { useMemo } from 'react';
import classNames from 'classnames';
import styles from './P.module.css';
import { PProps } from './P.props';

export const P = ({ size, children, className, ...props }: PProps): JSX.Element => {
    const classes = useMemo(() => {
        return {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.l]: size === 'l',
        };
    }, [size]);

    return (
        <p className={classNames(styles.p, className, classes)} {...props}>
            {children}
        </p>
    );
};
