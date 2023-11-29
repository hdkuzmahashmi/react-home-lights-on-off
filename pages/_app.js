import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  {
    id: 1,
    name: "Living Room",
    isOn: false,
  },
  {
    id: 2,
    name: "Kitchen",
    isOn: false,
  },
  {
    id: 3,
    name: "Bedroom",
    isOn: false,
  },
  {
    id: 4,
    name: "Bathroom",
    isOn: false,
  },
  {
    id: 5,
    name: "Garage",
    isOn: false,
  },
  {
    id: 6,
    name: "Porch",
    isOn: false,
  },
  {
    id: 7,
    name: "Garden",
    isOn: false,
  },
  {
    id: 8,
    name: "Office",
    isOn: false,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function handleToggle(lightid) {
    setLights(
      lights.map((light) => {
        if (light.id === lightid) {
          return { ...light, isOn: !light.isOn };
        } else return light;
      })
    );
  }

  const onlightCounts = lights.filter((light) => light.isOn === true).length;

  function handleTurnOffAll() {
    setLights(
      lights.map((light) => {
        if (light.isOn) {
          return { ...light, isOn: !light.isOn };
        } else return light;
      })
    );
  }

  function handleTurnOnAll() {
    setLights(
      lights.map((light) => {
        if (light.isOn === false) {
          return { ...light, isOn: !light.isOn };
        } else return light;
      })
    );
  }

  const isOnCount = lights.reduce(
    (onCount, light) => (light.isOn ? onCount + 1 : onCount),
    0
  );
  return (
    <Layout isDimmed={isOnCount === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleToggle={handleToggle}
        onlightCounts={onlightCounts}
        handleTurnOffAll={handleTurnOffAll}
        handleTurnOnAll={handleTurnOnAll}
        isOnCount={isOnCount}
      />
    </Layout>
  );
}
