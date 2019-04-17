import React from 'react';
import classNames from 'classnames';
import { FaCheck } from 'react-icons/fa';

// Styles
import styles from './styles.module.scss';

interface RadioProps {
  checked: boolean,
  onToggle: any
}

function Radio({ checked, onToggle }: RadioProps) {
  return (
    <div
      className={classNames(styles['Radio'], { [styles['checked']]: checked })}
      onClick={onToggle}
    >
      {checked && (
        <FaCheck />
      )}
    </div>
  );
}

export default Radio;
