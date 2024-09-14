import { Flex, Group } from '@mantine/core';
import classes from './OptionButton.module.css';

export default function OptionButton({ onSelectOption, iconName, optionName, idName, isVisible }) {
    return(
        <li>
            <Group className={classes.optionTitleText} id={idName}>
                <div className={classes.containerPadding}>
                    <Flex
                    align="center"
                    justify="center"
                    gap="sm"
                    itemType='button'
                    onClick={() => onSelectOption(!isVisible)}
                    >
                        <span className="material-icons">{iconName}</span>{optionName}
                    </Flex>
                </div>
            </Group>
        </li>
    );
}