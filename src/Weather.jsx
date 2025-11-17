import Tabs from "./Tabs";
import Tab from "./Tab";

const Example = () => {
  return (
    <Tabs>
      <Tab label="Weather warning">
        <div>
          November has so far been exceptionally mild with temperatures 3-6C
          above average. But that has now changed as a northerly wind is
          dragging cold Arctic air across the UK with temperatures now falling
          3-6C below the mid-November average. Cold-health alerts are in force
          across the Midlands and northern England until 08:00 GMT Friday. These
          alerts are mainly for health and social care services, warning of
          "significant" impacts to more vulnerable members of the community.
          Extra services may be required to deal with the colder weather
        </div>
      </Tab>
      <Tab label="Driving in winter weather">
        <div>
          Allow extra time before you set off to de-ice the car, and expect
          journeys to take much longer. Check traffic reports and plan your
          journey around major roads, which are more likely to be gritted or
          cleared. Avoid shortcuts on minor roads. Wear warm clothes and
          comfortable shoes. Pack a coat, hat, gloves, sturdy boots and a
          blanket to keep you warm in case you do get stuck or have to leave
          your car. You may also need sunglasses in bright weather.
        </div>
      </Tab>
      <Tab label="Health risks">
        <div>
          When it is cold outside, people tend to spend more time indoors, where
          it can be easier to catch an infection. For example, coughs and
          sneezes in an enclosed space with little or no ventilation can quickly
          spread illnesses from person to person. Opening windows where possible
          and practising good hygiene - using and then binning a tissue for
          coughs and sneezes and washing your hands - can help prevent this.
        </div>
      </Tab>
      <Tab label="Pet winter care">
        <div>
          ke humans, animals can be at risk of hypothermia if they become too
          cold. Veterinary charity PDSA advises giving dogs and cats extra
          blankets for their beds over the winter months and a few extra spaces
          to curl up around their home. Raised beds can keep older dogs away
          from draughts, while cats may like high-up dens. The charity also
          recommends extra playtime for pets to make sure they keep active if
          they are spending less time outside. Indoor toys can help.
        </div>
      </Tab>
    </Tabs>
  );
};

export default Example;
