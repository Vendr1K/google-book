import React, {useState} from 'react';
import { useAppDispatch } from '../../../redux/useReduxHook';
import { EIcons, Icon } from '../Icon/Icon';

import styles from './select.module.css';

interface ISelect {
    selected: string,
    objectSelectValue: object,
    action(obj: string): any
};

export function Select({selected, objectSelectValue, action}: ISelect) {

    const [isSelectWeekOpen, setIsSelectWeekOpen] = useState(false);
    const allObjElements = Object.keys(objectSelectValue) as Array<keyof typeof objectSelectValue>;
    const dispatch = useAppDispatch();

    const handleChangeWeek = (newSelected: string) => {
        dispatch(action(newSelected));
        setIsSelectWeekOpen(false);
    }

  return (
    <div className={`${styles.statistic_head__select_wrapper} ${styles.select}`}>
        <button className={`${styles.select__button} btn-reset`} onClick={() => setIsSelectWeekOpen(true)}>
            {selected}
            <Icon name={EIcons.selectArrow} style={isSelectWeekOpen ? {rotate: '180deg', zIndex: 10} : {}}/>
        </button>
        {isSelectWeekOpen && (
            <div className={styles.select__list}>
                {allObjElements.map((element) => {
                    return (
                        <button 
                            key={objectSelectValue[element]} 
                            className={`${styles.select__button} btn-reset`} 
                            onClick={() => handleChangeWeek(objectSelectValue[element])}
                        >
                            {objectSelectValue[element]}
                        </button>
                    )
                })}
            </div>
        )}
    </div>
  );
};
