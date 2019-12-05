import React from "react";
import { shallow, render, mount } from "enzyme";
import Camera from "./Camera";

describe("Camera", () => {
  let props;
  let shallowCamera;
  let renderedCamera;
  let mountedCamera;

  const shallowTestComponent = () => {
    if (!shallowCamera) {
      shallowCamera = shallow(<Camera {...props} />);
    }
    return shallowCamera;
  };

  const renderTestComponent = () => {
    if (!renderedCamera) {
      renderedCamera = render(<Camera {...props} />);
    }
    return renderedCamera;
  };

  const mountTestComponent = () => {
    if (!mountedCamera) {
      mountedCamera = mount(<Camera {...props} />);
    }
    return mountedCamera;
  };

  beforeEach(() => {
    props = {};
    shallowCamera = undefined;
    renderedCamera = undefined;
    mountedCamera = undefined;
  });

  // Shallow / unit tests begin here

  // Render / mount / integration tests begin here
});
