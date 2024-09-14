import { Flex, Group } from '@mantine/core';
import classes from './SubOptionButton.module.css';

export default function OptionButton({ subOptionName, idName, isVisible }) {
    return(
        <li>
        <div className={isVisible ? classes.slideInLeft : classes.slideOutRight} style={{paddingLeft: "3rem"}}>
            <Group className={classes.normalText} id={idName}>
                <div className={classes.containerPadding}>
                    <Flex
                    align="center"
                    justify="center"
                    >
                        <span className="material-icons">chevron_right</span>{subOptionName}
                    </Flex>
                </div>
            </Group>
        </div>
        </li>
    );
}