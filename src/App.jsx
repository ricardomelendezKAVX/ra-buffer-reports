//React imports
import { useState } from 'react'
// import './App.css'

// Libraries imports
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import styled from "styled-components";
import { Flex, Stack, Anchor, Image, Space } from '@mantine/core';

//Custom elements imports
//import LateralBar from './components/LateralBar';
import classes from './components/LateralBar.module.css';
import OptionButton from "./components/OptionButton";
import SubOptionButton from "./components/SubOptionButton";


//Components made with styled-components
const MainPageTitle = styled.span`
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
    font-size: 1.3rem;
    color: #FFF;
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

const CustomContainer = styled.div`
    display: flex;
`;

function deriveCurrentSelectedButton(prevSelectedButton){
    let currentSelectedButton = ""

    switch (prevSelectedButton) {
        case "buttonOneBufferRA":
            currentSelectedButton = "buttonOneBufferRA";
            break;

        case "buttonTwoFactoryMes":
            currentSelectedButton = "buttonTwoFactoryMes";
            break;

        case "buttonThreeCapme":
            currentSelectedButton = "buttonThreeCapme";
            break;

        case "buttonFourMisc":
            currentSelectedButton = "buttonFourMisc";
            break;
    
        default:
            currentSelectedButton = ""
            break;
    }

    return currentSelectedButton;
}

function App() {
  const [selectedButton, setSelectedButton] = useState("");
  const [reportName, setReportName] = useState("");

  const pressedButton = deriveCurrentSelectedButton(selectedButton);

  function handleIsVisble(value) {
      setSelectedButton(() => {
          const currentSelectedButton = deriveCurrentSelectedButton(value);
          return currentSelectedButton;
      });
  }

  function handleReportName(value) {
    setReportName(value);
  }

  return (
    <MantineProvider>
      <div style={{display: "flex" }}>
        <CustomContainer>
          <Flex className={classes.lateralBar} direction="column">
            <Anchor href="/">
              <Flex align="center" justify="center">
                <Image
                  src="././src/assets/AVX Kyocera Logo.png"
                  w="6.5rem"
                  fit="contain"
                  radius="sm"
                />
                <Space w="xs"></Space>
                <MainPageTitle>Reportes Buffer RA</MainPageTitle>
              </Flex>
            </Anchor>
            <HorizontalSeparators></HorizontalSeparators>

            <Stack>
              <CustomUnorderedList>
                <div
                  type="button"
                  onClick={() => handleIsVisble("buttonOneBufferRA")}
                  className={
                    pressedButton === "buttonOneBufferRA"
                      ? classes.optionBtnSelected
                      : classes.optionTitleText
                  }
                >
                  <OptionButton
                    iconName="shelves"
                    optionName="BUFFER"
                  ></OptionButton>
                </div>
                <div
                  className={
                    pressedButton === "buttonOneBufferRA"
                      ? classes.slideInLeft
                      : classes.hideOptions
                  }
                >
                  <SubOptionButton
                    showReportName={handleReportName}
                    subOptionName="Disponibilidad buffer"
                    idName="raBufferAvailability"
                  ></SubOptionButton>
                  <SubOptionButton
                    subOptionName="Compras buffer RA"
                    idName="lotsToInventoryQuery"
                  ></SubOptionButton>
                  <SubOptionButton
                    subOptionName="Histórico Compras"
                    idName="historicLotsToInventoryQuery"
                  ></SubOptionButton>
                </div>
                <hr></hr>
                <div
                  type="button"
                  onClick={() => handleIsVisble("buttonTwoFactoryMes")}
                  className={
                    pressedButton === "buttonTwoFactoryMes"
                      ? classes.optionBtnSelected
                      : classes.optionTitleText
                  }
                >
                  <OptionButton
                    iconName="factory"
                    optionName="MES/Factory Works"
                  ></OptionButton>
                </div>
                <div
                  className={
                    pressedButton === "buttonTwoFactoryMes"
                      ? classes.slideInLeft
                      : classes.hideOptions
                  }
                >
                  <SubOptionButton
                    subOptionName="Reportes de MESUtils"
                    idName="creacionDescarga"
                  ></SubOptionButton>
                  <SubOptionButton
                    subOptionName="Negativos FW-COPICS"
                    idName="fwCopicsNegative"
                  ></SubOptionButton>
                  <SubOptionButton
                    subOptionName="CONSULTA UBICACIONES BUFFERS"
                    idName="bufferLocationQuery"
                  ></SubOptionButton>
                </div>
                <hr></hr>
                <div
                  type="button"
                  onClick={() => handleIsVisble("buttonThreeCapme")}
                  className={
                    pressedButton === "buttonThreeCapme"
                      ? classes.optionBtnSelected
                      : classes.optionTitleText
                  }
                >
                  <OptionButton
                    iconName="storage"
                    optionName="CAPME"
                  ></OptionButton>
                </div>
                <div
                  className={
                    pressedButton === "buttonThreeCapme"
                      ? classes.slideInLeft
                      : classes.hideOptions
                  }
                >
                  <SubOptionButton
                    subOptionName="Reportes #TAJCM0035R"
                    idName="reporteTajcm0035r"
                  ></SubOptionButton>
                  <SubOptionButton
                    subOptionName="SUB INVENTORY LOCATORS REPORT"
                    idName="subInvLocatorsReport"
                  ></SubOptionButton>
                </div>
                <hr></hr>
                <div
                  type="button"
                  onClick={() => handleIsVisble("buttonFourMisc")}
                  className={
                    pressedButton === "buttonFourMisc"
                      ? classes.optionBtnSelected
                      : classes.optionTitleText
                  }
                >
                  <OptionButton
                    iconName="miscellaneous_services"
                    optionName="MISCELÁNEOS"
                  ></OptionButton>
                </div>
                <div
                    className={
                    pressedButton === "buttonFourMisc"
                        ? classes.slideInLeft
                        : classes.hideOptions
                    }
                >
                <SubOptionButton
                    subOptionName="TRANSFERENCIAS LOTES ENSAMBLE"
                    idName="lotRescheduleReport"
                ></SubOptionButton>
                </div>
              </CustomUnorderedList>
            </Stack>
          </Flex>
          <VerticalDivider></VerticalDivider>
        </CustomContainer>


        <div style={{ display: "flex", flexWrap: "nowrap", flexGrow: 1, justifyContent: "center", alignSelf: "center" }}>
          <span>{reportName}</span>
        </div>
      </div>
    </MantineProvider>
  )
}

export default App
