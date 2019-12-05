import React from "react";
import { shallow, render, mount } from "enzyme";
import StuffingContainer from "./StuffingContainer";

describe("StuffingContainer", () => {
  let props;
  let shallowStuffingContainer;
  let renderedStuffingContainer;
  let mountedStuffingContainer;

  const shallowTestComponent = () => {
    if (!shallowStuffingContainer) {
      shallowStuffingContainer = shallow(<StuffingContainer {...props} />);
    }
    return shallowStuffingContainer;
  };

  const renderTestComponent = () => {
    if (!renderedStuffingContainer) {
      renderedStuffingContainer = render(<StuffingContainer {...props} />);
    }
    return renderedStuffingContainer;
  };

  const mountTestComponent = () => {
    if (!mountedStuffingContainer) {
      mountedStuffingContainer = mount(<StuffingContainer {...props} />);
    }
    return mountedStuffingContainer;
  };

  beforeEach(() => {
    props = {};
    shallowStuffingContainer = undefined;
    renderedStuffingContainer = undefined;
    mountedStuffingContainer = undefined;
  });

  // Shallow / unit tests begin here

  // Render / mount / integration tests begin here
});
