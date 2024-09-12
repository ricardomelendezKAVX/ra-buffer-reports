import { Flex, Group } from '@mantine/core';
import classes from './OptionButton.module.css';

export default function OptionButton({ iconName, optionName, idName }) {
    return(
        <li>
        <Group justify="flex-start" id={idName}>
            <Flex
            align="center"
            justify="center"
            type="button"
            id="reportesBufferRa"
            gap="sm"
            className={classes.optionTitleText}
            >
            <span className="material-icons">{iconName}</span>{optionName}
            </Flex>
        </Group>
        </li>
    );
}