import React from "react";
import PropTypes from "prop-types";
import styles from "./camera.css";
import { Grid, Box } from "@material-ui/core";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section.
class ClientCamera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentActionName: this.props.actionFor
    };
  }

  onTakePhoto(dataUri) {
    if (dataUri !== undefined && dataUri !== null) {
      this.props.handelChange(dataUri, this.state.currentActionName);
    }
    this.props.closeCamera();
  }

  render() {
    return (
      <Grid item container xs={12}>
        <Camera
          idealFacingMode={FACING_MODES.ENVIRONMENT}
          idealResolution={{ width: 768, height: 1024 }}
          imageType={IMAGE_TYPES.PNG}
          imageCompression={0.97}
          isMaxResolution={true}
          isImageMirror={false}
          isSilentMode={true}
          isDisplayStartCameraError={true}
          isFullscreen={true}
          sizeFactor={1}
          onTakePhoto={dataUri => {
            this.onTakePhoto(dataUri);
          }}
        />
      </Grid>
    );
  }
}

const CameraPropTypes = {
  // always use prop types!
};

Camera.propTypes = CameraPropTypes;

export default ClientCamera;
