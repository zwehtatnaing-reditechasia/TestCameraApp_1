import React from "react";
import { shallow, render, mount } from "enzyme";
import StuffingContainerDynamic from "./StuffingContainerDynamic";

describe("StuffingContainerDynamic", () => {
  let props;
  let shallowStuffingContainerDynamic;
  let renderedStuffingContainerDynamic;
  let mountedStuffingContainerDynamic;

  const shallowTestComponent = () => {
    if (!shallowStuffingContainerDynamic) {
      shallowStuffingContainerDynamic = shallow(
        <StuffingContainerDynamic {...props} />
      );
    }
    return shallowStuffingContainerDynamic;
  };

  const renderTestComponent = () => {
    if (!renderedStuffingContainerDynamic) {
      renderedStuffingContainerDynamic = render(
        <StuffingContainerDynamic {...props} />
      );
    }
    return renderedStuffingContainerDynamic;
  };

  const mountTestComponent = () => {
    if (!mountedStuffingContainerDynamic) {
      mountedStuffingContainerDynamic = mount(
        <StuffingContainerDynamic {...props} />
      );
    }
    return mountedStuffingContainerDynamic;
  };

  beforeEach(() => {
    props = {};
    shallowStuffingContainerDynamic = undefined;
    renderedStuffingContainerDynamic = undefined;
    mountedStuffingContainerDynamic = undefined;
  });

  // Shallow / unit tests begin here

  // Render / mount / integration tests begin here
});
