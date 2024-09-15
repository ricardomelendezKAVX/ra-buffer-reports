import { Group } from '@mantine/core';

export default function OptionButton({ iconName, optionName }) {

    return(
        <li>
            <div type="button">
                <Group>
                    <span className="material-icons">{iconName}</span>{optionName}
                </Group>
            </div>
        </li>
    );
}