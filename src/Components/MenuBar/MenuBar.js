import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import SearchIcon from "@material-ui/icons/Search";
import Chip from "@material-ui/core/Chip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { purple } from "@material-ui/core/colors";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import clsx from "clsx";

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

  // search: {
  //   position: "relative",
  //   borderRadius: 10,
  //   backgroundColor: "#f6f7f9",
  //   "&:hover": {
  //     backgroundColor: "#f6f7f9",
  //   },
  //   marginLeft: 20,
  //   color: "#5842be",
  //   marginTop: 15,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     width: "auto",
  //   },
  // },
  // searchIcon: {
  //   height: "100%",
  //   position: "absolute",

  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  inputRoot: {
    color: "#5842be",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // // vertical padding + font size from searchIcon
    paddingLeft: `calc(0em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color: "#5842be",
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
  selectAll: {
    "&:before": {
      border: "none",
    },
    "&:after": {
      border: "none",
    },
  },
  rootCheck: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    backgroundColor: "#c4c4c4",
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
  },
  iconList: {
    color: "#5842be",
    "&$selected": {
      color: "white",
    },
    "&:hover": {
      color: "white",
    },
  },
  checkedIcon: {
    backgroundColor: "#5842be",
    "input:hover ~ &": {
      backgroundColor: "#5842be",
    },
  },
  listItemC: {
    marginLeft: 10,
    height: 50,

    "&$selected": {
      backgroundColor: "#5842be",
      borderRadius: 5,
      height: 50,

      color: "white",
      "&:hover": {
        backgroundColor: "#5842be",
      },
    },
  },
  tabsButton: {
    color: "#302e4f",
    border: "none",
    fontSize: 20,
    fontWeight: "bold",
    "&$selected": {
      backgroundColor: "#5842be",
      color: "white",
      borderRadius: 10,
    },
    "&$hover": {
      backgroundColor: "#5842be",
      color: "white",
    },
    "&$active": {
      backgroundColor: "#5842be",
      color: "white",
    },
  },
  listItemIcon: {
    "&$selected": {
      color: "white",
    },
  },
  selected: {},
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuBar() {
  const classes = useStyles();
  const [subject, setSubject] = React.useState("chemistry");

  const handleSubject = (event, newSubject) => {
    setSubject(newSubject);
  };
  let checkboxes = [];

  for (var i = 0; i <= 3; i++) {
    checkboxes.push(
      <Grid container spacing={0}>
        <Grid item xs>
          <FormControlLabel
            control={
              <Checkbox
                className={classes.rootCheck}
                disableRipple
                color="default"
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
                icon={<span className={classes.icon} />}
                inputProps={{ "aria-label": "decorative checkbox" }}
              />
            }
            label="Chapter"
          />
        </Grid>
        <Grid item xs>
          <FormControlLabel
            control={
              <Checkbox
                className={classes.rootCheck}
                disableRipple
                color="default"
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
                icon={<span className={classes.icon} />}
                inputProps={{ "aria-label": "decorative checkbox" }}
              />
            }
            label="Chapter"
          />
        </Grid>
        <Grid item xs>
          <FormControlLabel
            control={
              <Checkbox
                className={classes.rootCheck}
                disableRipple
                color="default"
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
                icon={<span className={classes.icon} />}
                inputProps={{ "aria-label": "decorative checkbox" }}
              />
            }
            label="Chapter"
          />
        </Grid>
      </Grid>
    );
  }

  const handleChange = (event, newValue) => {
    setAge(event.target.value);
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [state, setState] = React.useState({
    checkedB: true,
  });

  const [age, setAge] = React.useState("");

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

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
                <div
                  style={{
                    backgroundColor: "#f6f7f9",
                    borderRadius: 10,
                    marginTop: 20,
                    marginLeft: 20,
                  }}
                >
                  <Button
                    style={{
                      padding: 15,
                      color: "#5842be",
                      fontWeight: "bold",
                    }}
                    size="large"
                    className={classes.margin}
                  >
                    Activity
                    <ArrowDropDownIcon
                      style={{
                        backgroundColor: "#f6f7f9",
                        color: "#5842be",
                        fontWeight: "bold",
                      }}
                    />
                  </Button>{" "}
                  <Button
                    style={{
                      padding: 15,
                      color: "#5842be",
                      fontWeight: "bold",
                    }}
                    size="large"
                    className={classes.margin}
                  >
                    Tool Guide
                    <ArrowDropDownIcon
                      style={{
                        backgroundColor: "#f6f7f9",
                        color: "#5842be",
                        fontWeight: "bold",
                      }}
                    />
                  </Button>
                </div>
              </Grid>
              <Grid item xs>
                <div
                  style={{
                    marginTop: 20,
                    marginLeft: 370,
                    float: "right",
                    borderRadius: 10,
                  }}
                  className={classes.search}
                >
                  <div
                    style={{
                      color: "#5842be",
                      backgroundColor: "#f6f7f9",
                      borderRadius: 10,
                    }}
                    size="large"
                    className={classes.searchIcon}
                  >
                    <SearchIcon
                      style={{
                        color: "#5842be",
                        backgroundColor: "#f6f7f9",
                        marginLeft: 10,
                        marginTop: 12,
                      }}
                    />

                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      style={{
                        height: 50,
                        color: "#5842be",
                        backgroundColor: "#f6f7f9",

                        fontSize: 20,
                      }}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs>
                <Button
                  style={{
                    marginTop: 20,
                    backgroundColor: "#f6f7f9",
                    color: purple[500],
                    borderRadius: 10,
                    boxShadow: 0,
                  }}
                >
                  <NotificationsIcon
                    style={{
                      backgroundColor: "#f6f7f9",
                      color: "#5842be",
                      margin: 5,
                      width: 30,
                      height: 35,
                    }}
                  />
                  <Avatar
                    style={{ marginLeft: 20 }}
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
        style={{ borderColor: "white" }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <h1 style={{ textAlign: "center" }}>LOGO</h1>
        <Button
          color="default"
          style={{
            backgroundColor: "#f3f3f3",
            color: "#a8a8a8",
            borderRadius: 10,
            fontSize: 15,
            width: 200,
            marginLeft: 15,
            height: 50,
          }}
          className={classes.button}
          startIcon={<BuildOutlinedIcon />}
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
            <ListItem
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
              button
              key={text}
              classes={{ root: classes.listItemC, selected: classes.selected }}
            >
              {selectedIndex === index ? (
                <ListItemIcon
                  className={classes.iconList}
                  style={{ color: "white" }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
              ) : (
                <ListItemIcon
                  className={classes.iconList}
                  style={{ color: "#5842be" }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        style={{ backgroundColor: "white", height: 800 }}
        className={classes.content}
      >
        <div className={classes.toolbar} />
        {/* <ButtonGroup disableElevation variant="contained" color="primary">
                  <Button>One<Icon style={{ color: "purple" , fontSize: "small"}}></Icon></Button>
      <Button>Two<Icon>ArrowDropDown</Icon></Button>
    </ButtonGroup> */}

        <div>
          <Button
            style={{
              marginTop: 55,
              marginLeft: 45,
              marginBottom: 25,
              backgroundColor: "#f6f7f9",
              color: "#302e4f",
              height: 60,
              borderRadius: 10,
              fontSize: 20,
              width: 200,
              fontWeight: "bold",
            }}
          >
            Add Syllabus
          </Button>
        </div>
        <div>
          <div>
            <ToggleButtonGroup
              style={{
                marginLeft: 48,
                backgroundColor: "#f6f7f9",
                border: "none",
                borderRadius: 10,
                marginTop: 30,
              }}
              value={subject}
              size="large"
              exclusive
              onChange={handleSubject}
              aria-label="text alignment"
            >
              <ToggleButton
                classes={{
                  root: classes.tabsButton,
                  selected: classes.selected,
                }}
                style={{
                  width: 400,
                  height: 60,
                }}
                value="physics"
                aria-label="left aligned"
              >
                {"Physics"}
              </ToggleButton>
              <ToggleButton
                classes={{
                  root: classes.tabsButton,
                  selected: classes.selected,
                }}
                style={{
                  width: 400,
                  height: 60,
                }}
                value="chemistry"
                aria-label="centered"
              >
                {"Chemistry"}
              </ToggleButton>
              <ToggleButton
                classes={{
                  root: classes.tabsButton,
                  selected: classes.selected,
                }}
                style={{
                  width: 400,
                  height: 60,
                }}
                value="maths"
                aria-label="right aligned"
              >
                {"Maths"}
              </ToggleButton>
            </ToggleButtonGroup>
            {subject === "physics" ? (
              <div>
                <Grid
                  style={{ marginLeft: 35, marginTop: 20 }}
                  container
                  spacing={3}
                >
                  <Grid item xs>
                    <h3>Chapters</h3>
                    <Card
                      style={{
                        backgroundColor: "#f6f7f9",
                        border: 0,
                        width: 350,
                        borderRadius: 20,
                      }}
                      variant="outlined"
                    >
                      <CardContent>
                        <Chip
                          style={{
                            marginLeft: 5,
                            backgroundColor: "#5842be",
                            color: "#f6f7f9",
                            marginBottom: 20,
                          }}
                          size="small"
                          label="Trignometry"
                        />
                        <Chip
                          style={{
                            marginLeft: 5,
                            backgroundColor: "#5842be",
                            color: "#f6f7f9",
                            marginBottom: 20,
                          }}
                          size="small"
                          label="Basic"
                          color="Progression"
                        />
                        <Chip
                          style={{
                            marginLeft: 5,
                            backgroundColor: "#5842be",
                            color: "#f6f7f9",
                            marginBottom: 20,
                          }}
                          size="small"
                          label="Basic"
                          color="Probability"
                        />
                        {checkboxes}
                      </CardContent>
                      <CardActions></CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <h3 style={{ marginLeft: 7 }}>Concepts</h3>
                    <FormControl
                      variant="filled"
                      className={classes.formControl}
                      style={{
                        backgroundColor: "#f6f7f9",
                        color: "#5842be",
                        width: 280,
                        borderRadius: 20,
                      }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Choose A Tag
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        style={{
                          backgroundColor: "#f6f7f9",
                          color: "#b6b6b6",
                          width: 280,
                          fontWeight: "bolder",
                          borderRadius: 10,
                        }}
                        id="demo-simple-select-filled"
                        value={age}
                        onChange={handleChange}
                        className={classes.selectAll}
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
                    <h3 style={{ marginLeft: 7 }}>Sub-concepts</h3>
                    <FormControl
                      variant="filled"
                      className={classes.formControl}
                      style={{
                        backgroundColor: "#f6f7f9",
                        color: "#5842be",
                        width: 280,
                        borderRadius: 10,
                      }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Choose A Tag
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={age}
                        style={{
                          backgroundColor: "#f6f7f9",
                          color: "#b6b6b6",
                          width: 280,
                          fontWeight: "bolder",
                          borderRadius: 10,
                        }}
                        onChange={handleChange}
                        className={classes.selectAll}
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
              </div>
            ) : null}
            {subject === "chemistry" ? (
              <div>
                <Grid
                  style={{ marginLeft: 35, marginTop: 20 }}
                  container
                  spacing={3}
                >
                  <Grid item xs>
                    <h3>Chapters</h3>
                    <Card
                      style={{
                        backgroundColor: "#f6f7f9",
                        border: 0,
                        width: 350,
                        borderRadius: 20,
                      }}
                      variant="outlined"
                    >
                      <CardContent>
                        <Chip
                          style={{
                            marginLeft: 5,
                            backgroundColor: "#5842be",
                            color: "#f6f7f9",
                            marginBottom: 20,
                          }}
                          size="small"
                          label="Trignometry"
                        />
                        <Chip
                          style={{
                            marginLeft: 5,
                            backgroundColor: "#5842be",
                            color: "#f6f7f9",
                            marginBottom: 20,
                          }}
                          size="small"
                          label="Basic"
                          color="Progression"
                        />
                        <Chip
                          style={{
                            marginLeft: 5,
                            backgroundColor: "#5842be",
                            color: "#f6f7f9",
                            marginBottom: 20,
                          }}
                          size="small"
                          label="Basic"
                          color="Probability"
                        />
                        {checkboxes}
                      </CardContent>
                      <CardActions></CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <h3 style={{ marginLeft: 7 }}>Concepts</h3>
                    <FormControl
                      variant="filled"
                      className={classes.formControl}
                      style={{
                        backgroundColor: "#f6f7f9",
                        color: "#5842be",
                        width: 280,
                        borderRadius: 20,
                      }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Choose A Tag
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        style={{
                          backgroundColor: "#f6f7f9",
                          color: "#b6b6b6",
                          width: 280,
                          fontWeight: "bolder",
                          borderRadius: 10,
                        }}
                        id="demo-simple-select-filled"
                        value={age}
                        onChange={handleChange}
                        className={classes.selectAll}
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
                    <h3 style={{ marginLeft: 7 }}>Sub-concepts</h3>
                    <FormControl
                      variant="filled"
                      className={classes.formControl}
                      style={{
                        backgroundColor: "#f6f7f9",
                        color: "#5842be",
                        width: 280,
                        borderRadius: 10,
                      }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Choose A Tag
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={age}
                        style={{
                          backgroundColor: "#f6f7f9",
                          color: "#b6b6b6",
                          width: 280,
                          fontWeight: "bolder",
                          borderRadius: 10,
                        }}
                        onChange={handleChange}
                        className={classes.selectAll}
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
              </div>
            ) : null}
            {subject === "maths" ? (
              <div>
                <Grid
                  style={{ marginLeft: 35, marginTop: 20 }}
                  container
                  spacing={3}
                >
                  <Grid item xs>
                    <h3>Chapters</h3>
                    <Card
                      style={{
                        backgroundColor: "#f6f7f9",
                        border: 0,
                        width: 350,
                        borderRadius: 20,
                      }}
                      variant="outlined"
                    >
                      <CardContent>
                        <Chip
                          style={{
                            marginLeft: 5,
                            backgroundColor: "#5842be",
                            color: "#f6f7f9",
                            marginBottom: 20,
                          }}
                          size="small"
                          label="Trignometry"
                        />
                        <Chip
                          style={{
                            marginLeft: 5,
                            backgroundColor: "#5842be",
                            color: "#f6f7f9",
                            marginBottom: 20,
                          }}
                          size="small"
                          label="Basic"
                          color="Progression"
                        />
                        <Chip
                          style={{
                            marginLeft: 5,
                            backgroundColor: "#5842be",
                            color: "#f6f7f9",
                            marginBottom: 20,
                          }}
                          size="small"
                          label="Basic"
                          color="Probability"
                        />
                        {checkboxes}
                      </CardContent>
                      <CardActions></CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <h3 style={{ marginLeft: 7 }}>Concepts</h3>
                    <FormControl
                      variant="filled"
                      className={classes.formControl}
                      style={{
                        backgroundColor: "#f6f7f9",
                        color: "#5842be",
                        width: 280,
                        borderRadius: 20,
                      }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Choose A Tag
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        style={{
                          backgroundColor: "#f6f7f9",
                          color: "#b6b6b6",
                          width: 280,
                          fontWeight: "bolder",
                          borderRadius: 10,
                        }}
                        id="demo-simple-select-filled"
                        value={age}
                        onChange={handleChange}
                        className={classes.selectAll}
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
                    <h3 style={{ marginLeft: 7 }}>Sub-concepts</h3>
                    <FormControl
                      variant="filled"
                      className={classes.formControl}
                      style={{
                        backgroundColor: "#f6f7f9",
                        color: "#5842be",
                        width: 280,
                        borderRadius: 10,
                      }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Choose A Tag
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={age}
                        style={{
                          backgroundColor: "#f6f7f9",
                          color: "#b6b6b6",
                          width: 280,
                          fontWeight: "bolder",
                          borderRadius: 10,
                        }}
                        onChange={handleChange}
                        className={classes.selectAll}
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
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}
