import { Flex, Group } from '@mantine/core';
import classes from './LateralBar.module.css';

export default function OptionButton({ subOptionName, idName, showReportName }) {
    return (
      <li>
        <div style={{ paddingTop: "0.5rem", display: "flex"}}>
          <Group className={classes.normalText} id={idName} style={{ display: "flex", flexFlow: 1, flexWrap: "nowrap", justifyContent: "center", alignSelf: "center", paddingRight: "1rem " }}>
            <div type="button" onClick={(event) => showReportName(event.target.parentElement.id)} className={classes.containerPadding}>
              <Flex align="center" justify="center">
                <span className="material-icons">chevron_right</span>
                {subOptionName}
              </Flex>
            </div>
          </Group>
        </div>
      </li>
    );
}