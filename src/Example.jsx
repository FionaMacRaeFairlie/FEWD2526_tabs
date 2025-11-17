import Tabs from "./Tabs";
import Tab from "./Tab";

const Example = () => {
  return (
    <Tabs>
      <Tab label="Tab 1">
        <div>Contents of tab 1</div>
      </Tab>
      <Tab label="Tab 2">
        <div>Contents of tab 2</div>
      </Tab>
      <Tab label="Tab 3">
        <div>Contents of tab 3</div>
      </Tab>
    </Tabs>
  );
};

export default Example;
