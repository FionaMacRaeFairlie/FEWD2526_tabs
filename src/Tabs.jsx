import React, { useState} from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tab-header">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <div
                className={`tab-item ${index === activeTab ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {child.props.label}
              </div>
            );
          }
        })}
      </div>
      <div className="tab-content">
        {React.Children.map(children, (child, index) => {
          if (index === activeTab) {
            return <>{child}</>;
          }
        })}
      </div>
    </div>
  );
};
export default Tabs;