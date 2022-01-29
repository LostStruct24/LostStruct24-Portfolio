import React from 'react';
import cx from 'classnames';
import './Cow.css';

export const Cow = () => {
    return (
        <div className="cow">
            <div className="horns"></div>
            <div className="head">
            <div className={cx("eye", "left")}></div>
            <div className={cx("eye", "right")}></div>
                <div className="nose">
                    <div className="mouth"></div>
                </div>
            </div>
        </div>
    );
}

