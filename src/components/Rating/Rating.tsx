'use client';

import classNames from 'classnames';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import { useState, useEffect, KeyboardEvent } from 'react';
import StarIcon from './rating.svg';

export const Rating = ({
    rating,
    className,
    setRating,
    isEditable = false,
    ...props
}: RatingProps): JSX.Element => {
    const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedRating = ratingArr.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={classNames(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onclick(i + 1)}>
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
                            isEditable && handleSpace(i + 1, e)
                        }
                    />
                </span>
            );
        });
        setRatingArr(updatedRating);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onclick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
        if (e.code !== 'Space' || !setRating) {
            return;
        }
        setRating(i);
    };

    return (
        <div {...props}>
            {ratingArr.map((r, i) => {
                return <span key={i}>{r}</span>;
            })}
        </div>
    );
};
