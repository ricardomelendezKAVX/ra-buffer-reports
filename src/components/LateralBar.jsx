import styled from "styled-components";
import { Flex, Stack, Group, Anchor, Image } from '@mantine/core';
import classes from './lateralBar.module.css';

const GroupingDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    padding: 1rem;
    background-color: RGBA(var(--bs-dark-rgb), var(--bs-bg-opacity, 1));
    min-height: 100vh;
    min-height: -webkit-fill-available;
`;

const MainScreenImage = styled.img`
    padding: 0.25rem;
    background-color: var(--bs-body-bg);
    border: var(--bs-border-width) solid var(--bs-border-color);
    border-radius: var(--bs-border-radius);
    max-width: 100%;
    height: auto;
    width: 70px;
`;

const MainPageTitle = styled.span`
    text-align: center;
    color: tomato;
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
    font-size: 16px;
    text-transform: uppercase;
`;

const CustomAnchor = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    align-items: center;
`;

const HorizontalSeparators = styled.hr`
    width: -webkit-fill-available;
    color:darkgrey;
    margin: 0.75rem;
    display: flex;
`;

const CustomUnorderedList = styled.ul`
    padding-left: 2rem;
    margin-top: 0;
    margin-bottom: 1rem;
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
    flex-wrap: wrap;
    margin-bottom: auto;
    gap: 4em;
`;

const VerticalDivider = styled.div`
    width: 100%;
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;    
`;

const CustomMain = styled.main`
    display: flex;
    flex-direction: column;BBB
`;

export default function LateralBar(){
    return (
      <CustomMain>
        <Group>
            <Stack align="flex-start">
                <Anchor href="/">
                <Flex align="center" justify="center">
                    <Image
                    src="././src/assets/AVX Kyocera Logo.png"
                    w="5rem"
                    fit="contain"
                    radius="md"
                    />
                    <MainPageTitle className={classes.maiPageTitleText}>Reportes Buffer RA</MainPageTitle>
                </Flex>
                </Anchor>
                <HorizontalSeparators></HorizontalSeparators>

                <Stack justify="center" gap="xl">
                <CustomUnorderedList>
                    <li>
                    <Group justify="center" id="buttonOneBufferRA">
                        <Flex
                        align="center"
                        justify="center"
                        type="button"
                        id="reportesBufferRa"
                        gap="md"
                        className={classes.optionTitleText}
                        >
                        <span className="material-icons">shelves</span>BUFFER
                        </Flex>
                    </Group>
                    </li>
                    <li>
                    <Group justify="center" id="buttonTwoFactoryMes">
                        <Flex
                        align="center"
                        justify="center"
                        type="button"
                        id="reportesFactoryMes"
                        gap="md"
                        className={classes.optionTitleText}
                        >
                        <span className="material-icons">factory</span>MES/Factory Works
                        </Flex>
                    </Group>
                    </li>
                    <li>
                    <Group justify="center" id="buttonThreeCapme">
                        <Flex
                        align="center"
                        justify="center"
                        type="button"
                        id="reportesCapme"
                        gap="md"
                        className={classes.optionTitleText}
                        >
                        <span className="material-icons">storage</span>CAPME
                        </Flex>
                    </Group>
                    </li>
                    <li>
                    <Group justify="center" id="buttonFourMisc">
                        <Flex
                        align="center"
                        justify="center"
                        type="button"
                        id="reportesMiscelaneos"
                        gap="md"
                        className={classes.optionTitleText}
                        >
                        <span className="material-icons">miscellaneous_services</span>MISCELÁNEOS
                        </Flex>
                    </Group>
                    </li>
                </CustomUnorderedList>
                </Stack>
            </Stack>
            <VerticalDivider></VerticalDivider>
        </Group>
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

            <VerticalDivider></VerticalDivider> */}
      </CustomMain>
    );
}