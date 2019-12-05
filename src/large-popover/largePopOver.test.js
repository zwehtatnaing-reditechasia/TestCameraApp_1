import React from "react";
import { shallow, render, mount } from "enzyme";
import LargePopOver from "./LargePopOver";

describe("LargePopOver", () => {
  let props;
  let shallowLargePopOver;
  let renderedLargePopOver;
  let mountedLargePopOver;

  const shallowTestComponent = () => {
    if (!shallowLargePopOver) {
      shallowLargePopOver = shallow(<LargePopOver {...props} />);
    }
    return shallowLargePopOver;
  };

  const renderTestComponent = () => {
    if (!renderedLargePopOver) {
      renderedLargePopOver = render(<LargePopOver {...props} />);
    }
    return renderedLargePopOver;
  };

  const mountTestComponent = () => {
    if (!mountedLargePopOver) {
      mountedLargePopOver = mount(<LargePopOver {...props} />);
    }
    return mountedLargePopOver;
  };

  beforeEach(() => {
    props = {};
    shallowLargePopOver = undefined;
    renderedLargePopOver = undefined;
    mountedLargePopOver = undefined;
  });

  // Shallow / unit tests begin here

  // Render / mount / integration tests begin here
});
