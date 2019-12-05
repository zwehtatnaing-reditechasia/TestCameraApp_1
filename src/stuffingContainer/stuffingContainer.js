import React, { Component, forwardRef, createRef } from "react";
import PropTypes from "prop-types";
import "./stuffingContainer.css";
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
  CardMedia,
  CardHeader
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
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
class StuffingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        ShippingType: "",
        Factory: "",
        StuffingDate: Date.now(),
        SI: "",
        SequenceNumber: "",
        Container: "",
        SealNo: "",
        TruckID: "",
        Driver: "",
        Supervisor: "",
        Truck: "",
        OuterRightWall: "",
        OuterLeftWall: "",
        InsideFrontWall: "",
        InsideContainerLeftWall: "",
        InsideInnerHalfLeftWall: "",
        InsideOuterHalfLeftWall: "",
        InsideContainerRightWall: "",
        InsideInnerHalfRightWall: "",
        InsideOuterHalfRightWall: "",
        InsideContainerCeiling: "",
        InsideInnerHalfCeiling: "",
        InsideOuterHalfCeiling: "",
        InsideContainerFloor: "",
        NetContainerWeight: "",
        InsideFloorInnerSection: "",
        InsideFloorMiddleSection: "",
        InsideFloorOuterSection: "",
        OutsideCeilingInnerHalf: "",
        OutsideCeilingOuterHalf: "",
        InsideCleaningProcess: "",
        StuffingFirstpallet: "",
        AfterStuffing8thPallet: "",
        AfterStuffingLastPallet: "",
        AfterClosedContainerDoor: "",
        SealingContainer: "",
        DiverAndContainer: ""
      },
      formControls: { ...formControls },
      openCamera: false,
      currentActionName: "",
      imageContent: "",
      modalState: false,
      factorySelectedValue: ""
    };
    this.closeCamera = this.closeCamera.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.openCamera = this.openCamera.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openCamera(propertyName) {
    console.log(this.state[propertyName])
    if (this.state.data[propertyName] === "" ||
      this.state.data[propertyName] === undefined
    ) {
      this.setState({ openCamera: true, currentActionName: propertyName });
    } else {
       console.log(propertyName)
      let imgContents = {
        img: this.state.data[propertyName],
        propertyName: propertyName
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
    this.setState({ data: newData, formControls: formControlObject },() => console.log(this.state));
  }

  handleDateChange = (dateData, eventName) => {
    if (dateData !== undefined && dateData !== null) {
      let newDate = new Date(dateData);
      this.handelChange(newDate, eventName);
    }
  };

  removeImage(propertyName) {
    let newData = { ...this.state.data };
    newData[propertyName] = "";
    this.setState({ data: newData });
  }

  save = () => {
   
  };

  cancel() {}

  render() {
    return (
      <Grid container>
        <Typography variant="h4">Stuffing Container</Typography>

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

        <Grid item container xs={12}>
          <LabelledOutline
            label="Group: 1. Before Stuffing"
            style={{ width: "100%", padding: "10px" }}
          >
            {/** Documentation  */}
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              wrap="wrap"
            >
              {/** Truck (From Front) */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("Truck");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Truck"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("Truck");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.Truck === "" ||
                        this.state.data.Truck === undefined
                          ? defaultImg
                          : this.state.data.Truck
                      }
                      title="Truck (From Front)"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/** END Truck (From Front) */}
              {/**	Outer Right wall */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("OuterRightWall");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Outer Right wall"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("OuterRightWall");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.OuterRightWall === "" ||
                        this.state.data.OuterRightWall === undefined
                          ? defaultImg
                          : this.state.data.OuterRightWall
                      }
                      title="Outer Right wall"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Outer Right wall */}
              {/**	Outer Left wall */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("OuterLeftWall");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Outer Left wall"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("OuterLeftWall");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.OuterLeftWall === "" ||
                        this.state.data.OuterLeftWall === undefined
                          ? defaultImg
                          : this.state.data.OuterLeftWall
                      }
                      title="Outer Left wall"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Left Right wall */}
              {/**	Inside Front wall */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("InsideFrontWall");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Inside Front wall"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("InsideFrontWall");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.InsideFrontWall === "" ||
                        this.state.data.InsideFrontWall === undefined
                          ? defaultImg
                          : this.state.data.InsideFrontWall
                      }
                      title="Inside Front wall"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Inside Front wall */}
              {/**	Inside Container Left wall */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("InsideContainerLeftWall");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Inside Container Left wall"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("InsideContainerLeftWall");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.InsideContainerLeftWall === "" ||
                        this.state.data.InsideContainerLeftWall === undefined
                          ? defaultImg
                          : this.state.data.InsideContainerLeftWall
                      }
                      title="Inside Container Left wall"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Inside Container Left wall */}
              {/**	Inside inner half left wall */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("InsideContainerLeftWall");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Inside inner half left wall"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("InsideContainerLeftWall");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.InsideInnerHalfLeftWall === "" ||
                        this.state.data.InsideInnerHalfLeftWall === undefined
                          ? defaultImg
                          : this.state.data.InsideInnerHalfLeftWall
                      }
                      title="Inside inner half left wall"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Inside inner half left wall */}
              {/**	Inside outer half left wall */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("InsideContainerLeftWall");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Inside outer half left wall"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("InsideContainerLeftWall");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.InsideOuterHalfLeftWall === "" ||
                        this.state.data.InsideOuterHalfLeftWall === undefined
                          ? defaultImg
                          : this.state.data.InsideOuterHalfLeftWall
                      }
                      title="Inside outer half left wall"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Inside outer half left wall */}
              {/** Inside container Right wall */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("InsideContainerLeftWall");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Inside outer half left wall"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("InsideContainerLeftWall");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.InsideContainerRightWall === "" ||
                        this.state.data.InsideContainerRightWall === undefined
                          ? defaultImg
                          : this.state.data.InsideContainerRightWall
                      }
                      title="Inside container Right wall"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Inside container Right wall */}
              {/** Inside inner half right wall */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("InsideContainerLeftWall");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Inside inner half right wall"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("InsideContainerLeftWall");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.InsideInnerHalfRightWall === "" ||
                        this.state.data.InsideInnerHalfRightWall === undefined
                          ? defaultImg
                          : this.state.data.InsideInnerHalfRightWall
                      }
                      title="Inside inner half right wall"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Inside inner half right wall */}
              {/** Inside outer half right wall */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("InsideContainerLeftWall");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Inside outer half right wall"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("InsideContainerLeftWall");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.InsideOuterHalfRightWall === "" ||
                        this.state.data.InsideOuterHalfRightWall === undefined
                          ? defaultImg
                          : this.state.data.InsideOuterHalfRightWall
                      }
                      title="Inside outer half right wall"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Inside outer half right wall */}
              {/** 	Inside container Ceiling */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("InsideContainerLeftWall");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Inside container Ceiling"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("InsideContainerLeftWall");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.InsideContainerCeiling === "" ||
                        this.state.data.InsideContainerCeiling === undefined
                          ? defaultImg
                          : this.state.data.InsideContainerCeiling
                      }
                      title="Inside container Ceiling"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Inside container Ceiling */}
              {/** 	Inside inner half ceiling */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("InsideInnerHalfCeiling");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Inside inner half ceiling"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("InsideInnerHalfCeiling");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.InsideInnerHalfCeiling === "" ||
                        this.state.data.InsideInnerHalfCeiling === undefined
                          ? defaultImg
                          : this.state.data.InsideInnerHalfCeiling
                      }
                      title="Inside inner half ceiling"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Inside inner half ceiling */}
              {/** 	Inside outer half ceiling */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("InsideOuterHalfCeiling");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Inside outer half ceiling"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("InsideOuterHalfCeiling");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.InsideOuterHalfCeiling === "" ||
                        this.state.data.InsideOuterHalfCeiling === undefined
                          ? defaultImg
                          : this.state.data.InsideOuterHalfCeiling
                      }
                      title="Inside outer half ceiling"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Inside outer half ceiling */}
              {/** 	Inside container floor */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("InsideContainerFloor");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Inside container floor"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("InsideContainerFloor");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.InsideContainerFloor === "" ||
                        this.state.data.InsideContainerFloor === undefined
                          ? defaultImg
                          : this.state.data.InsideContainerFloor
                      }
                      title="Inside container floor"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Inside container floor */}
              {/** Net Container Weight */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("NetContainerWeight");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Net Container Weight"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("NetContainerWeight");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.NetContainerWeight === "" ||
                        this.state.data.NetContainerWeight === undefined
                          ? defaultImg
                          : this.state.data.NetContainerWeight
                      }
                      title="Net Container Weight"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Net Container Weight */}
              {/** Inside floor inner section */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("InsideFloorInnerSection");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Inside floor inner section"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("InsideFloorInnerSection");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.InsideFloorInnerSection === "" ||
                        this.state.data.InsideFloorInnerSection === undefined
                          ? defaultImg
                          : this.state.data.InsideFloorInnerSection
                      }
                      title="Inside floor inner section"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Inside floor inner section */}
              {/** Inside floor middle section */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("InsideFloorMiddleSection");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Inside floor middle section"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("InsideFloorMiddleSection");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.InsideFloorMiddleSection === "" ||
                        this.state.data.InsideFloorMiddleSection === undefined
                          ? defaultImg
                          : this.state.data.InsideFloorMiddleSection
                      }
                      title="Inside floor middle section"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Inside floor middle section */}
              {/** Inside floor outer section */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("InsideFloorOuterSection");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Inside floor outer section"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("InsideFloorOuterSection");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.InsideFloorOuterSection === "" ||
                        this.state.data.InsideFloorOuterSection === undefined
                          ? defaultImg
                          : this.state.data.InsideFloorOuterSection
                      }
                      title="Inside floor outer section"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Inside floor outer section */}
              {/** Outside ceiling inner half */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("OutsideCeilingInnerHalf");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Outside ceiling inner half"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("OutsideCeilingInnerHalf");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.OutsideCeilingInnerHalf === "" ||
                        this.state.data.OutsideCeilingInnerHalf === undefined
                          ? defaultImg
                          : this.state.data.OutsideCeilingInnerHalf
                      }
                      title="Outside ceiling inner half"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Outside ceiling inner half */}
              {/** Outside ceiling Outer half */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("OutsideCeilingOuterHalf");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Outside ceiling Outer half"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("OutsideCeilingOuterHalf");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.OutsideCeilingOuterHalf === "" ||
                        this.state.data.OutsideCeilingOuterHalf === undefined
                          ? defaultImg
                          : this.state.data.OutsideCeilingOuterHalf
                      }
                      title="Outside ceiling Outer half"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Outside ceiling Outer half */}
              {/** Inside cleaning process */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("InsideCleaningProcess");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Outside ceiling Outer half"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("InsideCleaningProcess");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.InsideCleaningProcess === "" ||
                        this.state.data.InsideCleaningProcess === undefined
                          ? defaultImg
                          : this.state.data.InsideCleaningProcess
                      }
                      title="Inside cleaning process"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Inside cleaning process */}
            </Grid>
          </LabelledOutline>
        </Grid>

        <Grid item container xs={12}>
          <LabelledOutline
            label="Group: 2. Stuffing"
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
              {/** Stuffing first pallet */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("StuffingFirstpallet");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Stuffing first pallet"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("StuffingFirstpallet");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.StuffingFirstpallet === "" ||
                        this.state.data.StuffingFirstpallet === undefined
                          ? defaultImg
                          : this.state.data.StuffingFirstpallet
                      }
                      title="Stuffing first pallet"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/** END Stuffing first pallet */}
              {/** After stuffing 8th pallet */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("AfterStuffing8thPallet");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="After stuffing 8th pallet"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("AfterStuffing8thPallet");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.AfterStuffing8thPallet === "" ||
                        this.state.data.AfterStuffing8thPallet === undefined
                          ? defaultImg
                          : this.state.data.AfterStuffing8thPallet
                      }
                      title="After stuffing 8th pallet"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END After stuffing 8th pallet */}
              {/** After stuffing last pallet */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("AfterStuffingLastPallet");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="After stuffing last pallet"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("AfterStuffingLastPallet");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.AfterStuffingLastPallet === "" ||
                        this.state.data.AfterStuffingLastPallet === undefined
                          ? defaultImg
                          : this.state.data.AfterStuffingLastPallet
                      }
                      title="After stuffing last pallet"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END After stuffing last pallet */}
              {/**	After closed container door */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("AfterClosedContainerDoor");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="After closed container door"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("AfterClosedContainerDoor");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.AfterClosedContainerDoor === "" ||
                        this.state.data.AfterClosedContainerDoor === undefined
                          ? defaultImg
                          : this.state.data.AfterClosedContainerDoor
                      }
                      title="After closed container door"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END After closed container door */}
              {/**	Sealing container (Seal close up) */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("SealingContainer");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="Sealing container (Seal close up)"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("SealingContainer");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.SealingContainer === "" ||
                        this.state.data.SealingContainer === undefined
                          ? defaultImg
                          : this.state.data.SealingContainer
                      }
                      title="Sealing container (Seal close up)"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END Sealing container (Seal close up) */}
              {/** Diver and container */}
              <Grid item style={{ padding: 10 }} xs={12} sm={6} md={3} lg={3}>
                <Card>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="close"
                        onClick={event => {
                          this.removeImage("InsideContainerLeftWall");
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    }
                    title="	Diver and container"
                  />
                  <CardActionArea
                    onClick={event => {
                      this.openCamera("InsideContainerLeftWall");
                    }}
                  >
                    <CardMedia
                      style={{ height: 250, backgroundSize: "cover" }}
                      image={
                        this.state.data.DiverAndContainer === "" ||
                        this.state.data.DiverAndContainer === undefined
                          ? defaultImg
                          : this.state.data.DiverAndContainer
                      }
                      title="Diver and container"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              {/**	END 	Diver and container */}
            </Grid>
          </LabelledOutline>
        </Grid>

        <div class="form-btn-container">
          <Grid item style={{ padding: 10 }} xs={3} sm={2} md={1}>
            <Button variant="contained" color="primary" onClick={this.save}>
              Save
            </Button>
          </Grid>
          <Grid item style={{ padding: 10 }} xs={3} sm={2} md={1}>
            <Button variant="contained">Cancel</Button>
          </Grid>
        </div>

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
              handelChange={this.handelChange}
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

const StuffingContainerPropTypes = {
  // always use prop types!
};

StuffingContainer.propTypes = StuffingContainerPropTypes;

export default StuffingContainer;
