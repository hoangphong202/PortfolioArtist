import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
Btn.propTypes = {

};

function Btn({ onClick, children, className }) {
    return (
        <button onClick={onClick} className={`${styles.btn} ${className}`}>
            {children}
        </button >
    );
}

export default Btn;