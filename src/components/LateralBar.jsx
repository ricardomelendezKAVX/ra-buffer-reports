import { useState } from "react";

import styled from "styled-components";
import { Flex, Stack, Anchor, Image, Space } from '@mantine/core';
import classes from './LateralBar.module.css';
import OptionButton from "./OptionButton";
import SubOptionButton from "./SubOptionButton";

const MainPageTitle = styled.span`
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
    font-size: 16px;
    text-transform: uppercase;
`;

const HorizontalSeparators = styled.hr`
    width: -webkit-fill-available;
    color:darkgrey;
    margin: 0.75rem;
    display: flex;
`;

const CustomUnorderedList = styled.ul`
    padding-left: 0.5rem;
    margin-top: 0;
    --bs-nav-pills-border-radius: var(--bs-border-radius);
    --bs-nav-pills-link-active-color: #fff;
    --bs-nav-pills-link-active-bg: #0d6efd;
    --bs-nav-link-padding-x: 1rem;
    --bs-nav-link-padding-y: 0.5rem;
    --bs-nav-link-font-weight: ;
    --bs-nav-link-color: var(--bs-link-color);
    --bs-nav-link-hover-color: var(--bs-link-hover-color);
    --bs-nav-link-disabled-color: var(--bs-secondary-color);
    display: flex;
    flex-direction: column;
    padding-top: 0.5rem;
    gap: 1.2em;
`;

const VerticalDivider = styled.div`
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
`;

const CustomMain = styled.main`
    height: 100vh;
    padding: 1rem;
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity));
`;

const CustomContainer = styled.div`
    display: flex;
`;

export default function LateralBar(){
    const [isVisible, setIsVisible] = useState(false);

    function handleIsVisble(value) {
        useState(!value);
    }

    return (
      <CustomContainer>
        <Flex className={classes.lateralBar} direction="column">
            <Anchor href="/">
                <Flex align="center" justify="center">
                    <Image
                    src="././src/assets/AVX Kyocera Logo.png"
                    w="6rem"
                    fit="contain"
                    radius="sm"
                    />
                    <Space w="xs"></Space>
                    <MainPageTitle className={classes.mainPageTitleText}>Reportes Buffer RA</MainPageTitle>
                </Flex>
            </Anchor>
            <HorizontalSeparators></HorizontalSeparators>

            <Stack>
                <CustomUnorderedList>
                    <OptionButton onSelected={handleIsVisble} iconName="shelves" optionName="BUFFER" idName="buttonOneBufferRA"></OptionButton>
                    <SubOptionButton subOptionName="Disponibilidad buffer" idName="disponibilidadBufferRa"></SubOptionButton>
                    <SubOptionButton subOptionName="Compras buffer RA" idName="comprasBufferRa"></SubOptionButton>
                    <SubOptionButton subOptionName="Histórico Compras" idName="historicoBuffer"></SubOptionButton>
                    <hr></hr>
                    <OptionButton iconName="factory" optionName="MES/Factory Works" idName="buttonTwoFactoryMes"></OptionButton>
                    <hr></hr>
                    <OptionButton iconName="storage" optionName="CAPME" idName="buttonThreeCapme"></OptionButton>
                    <hr></hr>
                    <OptionButton iconName="miscellaneous_services" optionName="MISCELÁNEOS" idName="buttonFourMisc"></OptionButton>
                </CustomUnorderedList>
            </Stack>
        </Flex>
        <VerticalDivider></VerticalDivider>
      </CustomContainer>
    );
}





{/* <GroupingDiv>
                <Flex align="center" justify="center">
                    <Anchor href="/">
                        <Image src="././src/assets/AVX Kyocera Logo.png" w="5rem" fit="contain" radius="md"/>
                        <MainPageTitle>Reportes Buffer RA</MainPageTitle>
                    </Anchor>
                </Flex>
                <Divider my="md" />
                <CustomUnorderedList>
                    <li>
                        <GroupingDiv id="buttonOneBufferRA">
                            <div type="button" id="reportesBufferRa"><span className="material-icons">shelves</span>BUFFER</div>
                        </GroupingDiv>
                    </li>
                    <li>
                        <GroupingDiv id="buttonTwoFactoryMes">
                            <div type="button" id="reportesFactoryMes"><span className="material-icons">factory</span>MES/Factory Works</div>
                        </GroupingDiv>
                    </li>
                    <li>
                        <GroupingDiv id="buttonThreeCapme">
                            <div type="button" id="reportesCapme"><span className="material-icons">storage</span>CAPME</div>
                        </GroupingDiv>
                    </li>
                    <li>
                        <GroupingDiv id="buttonFourMisc">
                            <div type="button" id="reportesMiscelaneos"><span className="material-icons">miscellaneous_services</span>MISCELÁNEOS</div>
                        </GroupingDiv>
                    </li>
                </CustomUnorderedList>
            </GroupingDiv>

            <VerticalDivider></VerticalDivider>  */}