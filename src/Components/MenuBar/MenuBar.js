import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Icon from "@material-ui/core/Icon";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ArrowDropDown } from "@material-ui/icons";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import SearchIcon from "@material-ui/icons/Search";
import Chip from "@material-ui/core/Chip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Fab from "@material-ui/core/Fab";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import {
  black,
  purple,
  indigo,
  deepPurple,
  blue,
} from "@material-ui/core/colors";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const drawerWidth = 240;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 20,
    marginTop: 30,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "indigo[50]",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  button: {
    margin: theme.spacing(1),
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectBtn: {
    "&:before": {
      borderColor: "pink",
    },
    "&:after": {
      borderColor: "pink",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  New: {
    "&:focus": {
      backgroundColor: "#5842be",
      color: "#f6f7f9",
    },
  },
}));

export default function MenuBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const bull = <span className={classes.bullet}>•</span>;

  let checkboxes = [];

  for (var i = 0; i <= 3; i++) {
    checkboxes.push(
      <Grid container spacing={0}>
        <Grid item xs>
          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                style={{ marginLeft: 0, color: "#5842be" }}
              />
            }
            label="Chapter"
          />
        </Grid>
        <Grid item xs>
          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                style={{ marginLeft: 0, color: "#5842be" }}
              />
            }
            label="Chapter"
          />
        </Grid>
        <Grid item xs>
          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                style={{ marginLeft: 0, color: "#5842be" }}
              />
            }
            label="Chapter"
          />
        </Grid>
      </Grid>
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setAge(event.target.value);
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [state, setState] = React.useState({
    checkedB: true,
  });
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const [age, setAge] = React.useState("");

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            <Grid container spacing={3}>
              <Grid item xs>
                <div>
                  <FormControl
                    variant="outlined"
                    style={{ borderRadius: 50 }}
                    className={classes.formControl}
                  >
                    <InputLabel
                      id="demo-simple-select-outlined-label"
                      style={{
                        color: "#5842be",
                        fontSize: 20,
                      }}
                    >
                      Activity
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                      className={classes.selectBtn}
                      style={{
                        backgroundColor: "#f6f7f9",
                        color: "#5842be",
                        borderRadius: 10,
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem
                        value={10}
                        style={{
                          backgroundColor: "#f6f7f9",
                          color: "#5842be",
                        }}
                      >
                        Ten
                      </MenuItem>
                      <MenuItem
                        value={20}
                        style={{
                          backgroundColor: "#f6f7f9",
                          color: "#5842be",
                        }}
                      >
                        Twenty
                      </MenuItem>
                      <MenuItem
                        value={30}
                        style={{
                          backgroundColor: "#f6f7f9",
                          color: "#5842be",
                        }}
                      >
                        Thirty
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel
                      style={{
                        color: "#5842be",
                        fontSize: 20,
                      }}
                      id="demo-simple-select-outlined-label"
                    >
                      Tool Guide
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                      style={{
                        backgroundColor: "#f6f7f9",
                        color: "#5842be",
                        borderRadius: 10,
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem
                        value={10}
                        style={{
                          backgroundColor: "#f6f7f9",
                          color: "#5842be",
                        }}
                      >
                        Ten
                      </MenuItem>
                      <MenuItem
                        value={20}
                        style={{
                          backgroundColor: "#f6f7f9",
                          color: "#5842be",
                        }}
                      >
                        Twenty
                      </MenuItem>
                      <MenuItem
                        value={30}
                        style={{
                          backgroundColor: "#f6f7f9",
                          color: "#5842be",
                        }}
                      >
                        Thirty
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs>
                <div
                  style={{ marginTop: 9, marginLeft: 200 }}
                  className={classes.search}
                >
                  <div className={classes.searchIcon}>
                    <SearchIcon style={{ color: "#5842be" }} />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    style={{
                      height: 54,
                      color: "#5842be",
                      backgroundColor: "#f6f7f9",
                      borderRadius: 10,
                      fontSize: 20,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </Grid>
              <Grid item xs>
                <Button
                  variant="contained"
                  style={{
                    marginTop: 10,
                    marginLeft: 180,
                    backgroundColor: "#f6f7f9",
                    color: purple[500],
                    borderRadius: 10,
                  }}
                >
                  <NotificationsIcon
                    style={{
                      backgroundColor: "#f6f7f9",
                      color: "#5842be",
                    }}
                  />
                  <Avatar
                    alt="Remy Sharp"
                    src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png"
                  />
                  <ArrowDropDownIcon
                    style={{
                      backgroundColor: "#f6f7f9",
                      color: "#5842be",
                    }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <h1 style={{ textAlign: "center" }}>LOGO</h1>
        <Button
          variant="contained"
          color="default"
          style={{ backgroundColor: "#f6f7f9", borderRadius: 10, fontSize: 20 }}
          className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
          TOOLS
        </Button>
        <List style={{ marginTop: 5 }}>
          {[
            "Dashboard",
            "Mentorship",
            "Doubt Resolver",
            "Remedy",
            "Assignment Creator",
            "Tracking Tool",
            "Backlog Remover",
            "Material Sorter",
            "Test Creator",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon style={{ color: "#5842be" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <ButtonGroup disableElevation variant="contained" color="primary">
                  <Button>One<Icon style={{ color: "purple" , fontSize: "small"}}></Icon></Button>
      <Button>Two<Icon>ArrowDropDown</Icon></Button>
    </ButtonGroup> */}

        <div>
          <Button
            style={{
              marginTop: 35,
              marginLeft: 33,
              marginBottom: 25,
              backgroundColor: "#f6f7f9",
              color: "black",
              height: 60,
              borderRadius: 10,
              fontSize: 20,
            }}
            variant="contained"
          >
            Add Syllabus
          </Button>
        </div>
        <div>
          <AppBar
            style={{
              marginTop: 40,
              marginLeft: 33,
              width: 1200,
              backgroundColor: "#f6f7f9",
              color: "#5842be",
              boxShadow: 0,
            }}
            position="static"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
              className="New"
            >
              <Tab
                className="New"
                style={{ fontSize: 20 }}
                label="Physics"
                {...a11yProps(0)}
              />
              <Tab
                className="New"
                style={{ fontSize: 20 }}
                label="Chemistry"
                {...a11yProps(1)}
              />
              <Tab
                className="New"
                style={{ fontSize: 20 }}
                label="Maths"
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <h3>Chapters</h3>
                  <Card
                    style={{
                      backgroundColor: "#f6f7f9",
                      border: 0,
                    }}
                    className={classes.root}
                    variant="outlined"
                  >
                    <CardContent>
                      <Chip
                        style={{
                          marginLeft: 5,
                          backgroundColor: "#5842be",
                          color: "#f6f7f9",
                        }}
                        size="small"
                        label="Basic"
                      />
                      <Chip
                        style={{
                          marginLeft: 5,
                          backgroundColor: "#5842be",
                          color: "#f6f7f9",
                        }}
                        size="small"
                        label="Basic"
                        color="primary"
                      />
                      <Chip
                        style={{
                          marginLeft: 5,
                          backgroundColor: "#5842be",
                          color: "#f6f7f9",
                        }}
                        size="small"
                        label="Basic"
                        color="primary"
                      />
                      {checkboxes}
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </Grid>
                <Grid item xs>
                  <h3>Concepts</h3>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{
                      backgroundColor: "#f6f7f9",
                      color: "#5842be",
                      width: 280,
                    }}
                  >
                    <InputLabel
                      style={{
                        backgroundColor: "#f6f7f9",
                        color: "#5842be",
                      }}
                      id="demo-simple-select-outlined-label"
                    >
                      Choose A Tag
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs>
                  <h3>Sub-concepts</h3>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{
                      backgroundColor: "#f6f7f9",
                      color: "#5842be",
                      width: 280,
                    }}
                  >
                    <InputLabel
                      style={{
                        backgroundColor: "#f6f7f9",
                        color: "#5842be",
                      }}
                      id="demo-simple-select-outlined-label"
                    >
                      Choose A Tag
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>{" "}
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <h3>Chapters</h3>
                  <Card
                    style={{
                      backgroundColor: "#f6f7f9",
                      border: 0,
                    }}
                    className={classes.root}
                    variant="outlined"
                  >
                    <CardContent>
                      <Chip
                        style={{
                          marginLeft: 5,
                          backgroundColor: "#5842be",
                          color: "#f6f7f9",
                        }}
                        size="small"
                        label="Basic"
                        color="primary"
                      />
                      <Chip
                        style={{
                          marginLeft: 5,
                          backgroundColor: "#5842be",
                          color: "#f6f7f9",
                        }}
                        size="small"
                        label="Basic"
                        color="primary"
                      />
                      <Chip
                        style={{
                          marginLeft: 5,
                          backgroundColor: "#5842be",
                          color: "#f6f7f9",
                        }}
                        size="small"
                        label="Basic"
                        color="primary"
                      />
                      {checkboxes}
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </Grid>
                <Grid item xs>
                  <h3>Concepts</h3>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{
                      backgroundColor: "#f6f7f9",
                      color: "#5842be",
                      width: 280,
                    }}
                  >
                    <InputLabel
                      style={{
                        backgroundColor: "#f6f7f9",
                        color: "#5842be",
                      }}
                      id="demo-simple-select-outlined-label"
                    >
                      Choose A Tag
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs>
                  <h3>Sub-concepts</h3>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{
                      backgroundColor: "#f6f7f9",
                      color: "#5842be",
                      width: 280,
                    }}
                  >
                    <InputLabel
                      style={{
                        backgroundColor: "#f6f7f9",
                        color: "#5842be",
                      }}
                      id="demo-simple-select-outlined-label"
                    >
                      Choose A Tag
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>{" "}
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <h3>Chapters</h3>
                  <Card
                    style={{
                      backgroundColor: "#f6f7f9",
                      border: 0,
                    }}
                    className={classes.root}
                    variant="outlined"
                  >
                    <CardContent>
                      <Chip
                        style={{
                          marginLeft: 5,
                          backgroundColor: "#5842be",
                          color: "#f6f7f9",
                        }}
                        size="small"
                        label="Basic"
                        color="primary"
                      />
                      <Chip
                        style={{
                          marginLeft: 5,
                          backgroundColor: "#5842be",
                          color: "#f6f7f9",
                        }}
                        size="small"
                        label="Basic"
                        color="primary"
                      />
                      <Chip
                        style={{
                          marginLeft: 5,
                          backgroundColor: "#5842be",
                          color: "#f6f7f9",
                        }}
                        size="small"
                        label="Basic"
                        color="primary"
                      />
                      {checkboxes}
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </Grid>
                <Grid item xs>
                  <h3>Concepts</h3>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{
                      backgroundColor: "#f6f7f9",
                      color: "#5842be",
                      width: 280,
                    }}
                  >
                    <InputLabel
                      style={{
                        backgroundColor: "#f6f7f9",
                        color: "#5842be",
                      }}
                      id="demo-simple-select-outlined-label"
                    >
                      Choose A Tag
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs>
                  <h3>Sub-concepts</h3>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{
                      backgroundColor: "#f6f7f9",
                      color: "#5842be",
                      width: 280,
                    }}
                  >
                    <InputLabel
                      style={{
                        backgroundColor: "#f6f7f9",
                        color: "#5842be",
                      }}
                      id="demo-simple-select-outlined-label"
                    >
                      Choose A Tag
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>{" "}
            </TabPanel>
          </SwipeableViews>
        </div>
      </main>
    </div>
  );
}
