import React from "react";
import PropTypes from "prop-types";
import styles from "./largePopOver.css";
import {
  Grid,
  Box,
  Fab,
  Button,
  Modal,
  Zoom,
  Backdrop,
  useMediaQuery,
  Fade,
  Dialog,
  Typography,
  DialogActions,
  DialogContent,
  DialogContentText,
  InputLabel,
  DialogTitle,
  AppBar,
  Tabs,
  TextField,
  FormControl,
  Tab,
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
import { useTheme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade in={this.state.open} ref={ref} {...props} />;
});
// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section.
class LargePopOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.modalState,
      contents: this.props.contents
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return { open: props.modalState, contents: props.contents };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.closeModal();
  };

  render() {
    return (
      <Modal
        className="modal"
        open={this.state.open}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={this.state.open}>
          <div className="paper">
            <IconButton
              aria-label="close"
              className=""
              color="primary"
              onClick={this.handleClose}
              style={{ right: 0, position: "absolute" }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
            <img
              src={this.state.contents.img}
              width="100%"
              height="100%"
              alt={this.state.contents.propertyName}
            />
          </div>
        </Fade>
      </Modal>
    );
  }
}

const LargePopOverPropTypes = {
  // always use prop types!
};

LargePopOver.propTypes = LargePopOverPropTypes;

export default LargePopOver;
