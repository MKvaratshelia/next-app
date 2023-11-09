import { ReactNode, useMemo } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import classNames from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({
    appearance,
    arrow = 'none',
    children,
    className,
    ...props
}: ButtonProps): ReactNode => {
    const classes = useMemo(
        () => ({
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost',
        }),
        [appearance],
    );

    return (
        <button className={classNames(styles.button, classes, className)} {...props}>
            {children}
            {arrow !== 'none' && (
                <span
                    className={classNames(styles.arrow, {
                        [styles.right]: arrow === 'right',
                        [styles.down]: arrow === 'down',
                    })}>
                    <ArrowIcon />
                </span>
            )}
        </button>
    );
};
