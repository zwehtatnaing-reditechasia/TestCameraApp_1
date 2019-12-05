import React, { Component, forwardRef, createRef } from "react";
import PropTypes from "prop-types";
import "./stuffingContainerDynamic.css";
import {
  Grid,
  Button,
  Dialog,
  Typography,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  AppBar,
  TextField,
  FormControl,
  Snackbar,
  Switch,
  Slide,
  Toolbar,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Fab,
  CardMedia,
  CardHeader
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import ClientCamera from "../camera/camera";
import LabelledOutline from "../outLineDiv/outLineDiv";
import defaultImg from "../images/openCamera_3.png";
import LargePopOver from "../large-popover/largePopOver";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" />;
});

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section.
const defaultImage = "/Images/openCamera.png";
const formControls = {
  ShippingType: {
    valid: true,
    message: "",
    value: ""
  },
  Factory: {
    valid: true,
    message: "",
    value: ""
  },
  StuffingDate: {
    valid: true,
    message: "",
    value: ""
  },
  SI: {
    valid: true,
    message: "",
    value: ""
  },
  Container: {
    valid: true,
    message: "",
    value: ""
  }
};

class StuffingContainerDynamic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      formControls: { ...formControls },
      currentImgData: "",
      openCamera: false,
      openImageForm: false,
      currentActionName: "ImageData",
      imageContent: "",
      modalState: false,
      factorySelectedValue: "",
      formState: {
        valid: true,
        errors: []
      }
    };
    this.closeCamera = this.closeCamera.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.openCamera = this.openCamera.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.imgFormOnChange = this.imgFormOnChange.bind(this);
    this.onImgSave = this.onImgSave.bind(this);
    this.onImgCancel = this.onImgCancel.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  openImageForm = () => {
    this.setState({ openImageForm: true });
  };

  closeImageForm = () => {
    this.setState({ openImageForm: false });
  };

  openCamera(index) {
    if(index === undefined || index === null)
    {
      this.setState({ openCamera: true });
    } else {
      let imgContents = {
        img: this.state.data[index].ImageData,
        propertyName: this.state.data[index].Description
      };
      this.setState({ modalState: true, imageContent: imgContents });
    }
    
  }

  closeCamera() {
    this.setState({ openCamera: false });
  }

  closeModal() {
    this.setState({ modalState: false });
  }

  onImgSave = () => {
    let formData = [...this.state.data];
    let currentData = { ...this.state.currentImgData };
    formData.push(currentData);
    this.setState({ data: formData, openImageForm: false, currentImgData: "" });
  };

  onImgCancel = () => {
    let frmState = { ...this.state.formState };
    frmState.valid = true;
    frmState.errors = [];
    this.setState({
      currentImgData: "",
      openImageForm: false,
      formState: frmState
    });
  };

  imgFormOnChange(value, propertyName) {
    let currentData = { ...this.state.currentImgData };
    let frmState = { ...this.state.formState };
    if (value !== undefined && value !== null && value !== "") {
      currentData[propertyName] = value;
      frmState.valid = true;
      this.setState({ currentImgData: currentData, formState: frmState });
    } else {
      frmState.valid = false;
      this.setState({ formState: frmState });
    }
  }

  renderImageData() {
    return this.state.data.map((dt, i) => {
      return (
        <Grid key={i} item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
          <Card>
            <CardHeader
              action={
                <IconButton
                  aria-label="close"
                  onClick={event => {
                    this.removeImage(dt);
                  }}
                >
                  <CloseIcon />
                </IconButton>
              }
              title={dt.Description}
            />
            <CardActionArea onClick={event => {this.openCamera(i);}}>
              <CardMedia
                style={{ height: 250, backgroundSize: "cover" }}
                image={dt.ImageData}
                title={dt.Description}
              />
            </CardActionArea>
          </Card>
        </Grid>
      );
    });
  }

  handelChange(value, propertyName) {
    let formControlObject = { ...this.state.formControls };
    let newData = { ...this.state.data };
    if (
      this.state.formControls.hasOwnProperty(propertyName) &&
      (value === "" || value === undefined)
    ) {
      formControlObject[propertyName].valid = false;
      formControlObject[
        propertyName
      ].message = `${propertyName} cannot be Empty`;
    } else {
      if (this.state.formControls.hasOwnProperty(propertyName)) {
        formControlObject[propertyName].valid = true;
        formControlObject[propertyName].message = "";
      }
      newData[propertyName] = value;
    }
    if (propertyName === "Factory") {
      this.setState({ factorySelectedValue: value });
    }
    this.setState({ data: newData, formControls: formControlObject });
  }

  handleDateChange = (dateData, eventName) => {
    if (dateData !== undefined && dateData !== null) {
      let newDate = new Date(dateData);
      this.handelChange(newDate, eventName);
    }
  };

  removeImage(removeData) {
    let newData = [...this.state.data];
    var idx = newData.indexOf(removeData);
    newData.splice(idx, 1);
    this.setState({ data: newData });
  }

  save = () => {

  };

  render() {
    return (
      <Grid container>
        <Typography variant="h4">Stuffing Container</Typography>

        {/** Form Controls Containers */}
        <Grid item container xs={12}>
          <Grid container direction="row" justify="flex-start" wrap="wrap">
            {/** Shipping_Type */}
            <Grid item style={{ padding: 10 }} xs={12} sm={6} md={6} lg={6}>
              <FormControl style={{ width: "100%", margin: 4 }}>
                <TextField
                  id="Shipping_Type"
                  label="Shipping Type"
                  error={!this.state.formControls.ShippingType.valid}
                  helperText={this.state.formControls.ShippingType.message}
                  defaultValue=""
                  className=""
                  onChange={event =>
                    this.handelChange(event.target.value, "ShippingType")
                  }
                  margin="dense"
                />
              </FormControl>
            </Grid>
            {/** End Shipping_Type */}
          </Grid>
        </Grid>
        {/**END Form Controls Containers */}

        {/** Imgs Containers */}
        <Grid item container xs={12}>
          <LabelledOutline
            label="Group: 1. Before Stuffing"
            style={{ width: "100%", padding: "10px" }}
          >
            {/** Documentation  */}
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              wrap="wrap"
            >
              {/** Dynamic Container */}
              {this.state.data.length === 0 ? <h5>No Data</h5> : ""}
              {this.renderImageData()}
              {/** End Dynamic Container */}
            </Grid>
          </LabelledOutline>
        </Grid>
        {/** End Imgs Containers */}

        <div className="floating-btn-container">
          <Fab color="primary" aria-label="add" onClick={this.openImageForm}>
            <AddIcon />
          </Fab>
        </div>

        {/** Dynamic Image Add Container */}
        <Dialog
          open={this.state.openImageForm}
          onClose={this.closeImageForm}
          aria-labelledby="Add Image"
          style={{minWidth: '50%'}}
        >
          <DialogTitle id="dialog-title">{"Add Image"}</DialogTitle>
          <DialogContent>
            <Grid
              container
              direction="column"
              justify="flex-start"
              wrap="wrap"
            >
              {/** Description */}
              <Grid item style={{ padding: 4 }}>
                <FormControl style={{ width: "100%", margin: 4 }}>
                  <TextField
                    id="Description"
                    label="Description"
                    error={!this.state.formState}
                    helperText={"Image Description cannot be empty."}
                    defaultValue=""
                    className=""
                    onChange={event =>
                      this.imgFormOnChange(event.target.value, "Description")
                    }
                    margin="dense"
                  />
                </FormControl>
              </Grid>
              {/** End Shipping_Type */}

              {/** Add Image */}
              <Grid item style={{ padding: 10 }}>
                <Card>
                  <CardActionArea
                    onClick={event => {
                      this.openCamera(null);
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.currentImgData.ImageData === undefined
                          ? defaultImg
                          : this.state.currentImgData.ImageData
                      }
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**End Add Image */}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onImgCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onImgSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        {/** End Dynamic Image Add Container */}

        {/** Camera Dialog */}
        <Dialog
          fullScreen
          open={this.state.openCamera}
          onClose={this.closeCamera}
          TransitionComponent={this.Transition}
        >
          {this.state.openCamera ? (
            <ClientCamera
              closeCamera={this.closeCamera}
              handelChange={this.imgFormOnChange}
              actionFor={this.state.currentActionName}
            />
          ) : (
            ""
          )}
        </Dialog>
        {/** End Camera Dialog */}

        {/**Img Dialog */}
        <LargePopOver
          modalState={this.state.modalState}
          contents={this.state.imageContent}
          closeModal={this.closeModal}
        />
        {/**End Img Dialog */}
      </Grid>
    );
  }
}

const StuffingContainerDynamicPropTypes = {
  // always use prop types!
};

StuffingContainerDynamic.propTypes = StuffingContainerDynamicPropTypes;

export default StuffingContainerDynamic;
