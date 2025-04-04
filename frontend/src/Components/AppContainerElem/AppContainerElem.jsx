import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Container,
  Drawer,
  List,
  CssBaseline,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
	ListItemText,
  Typography,
  Icon
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import NavBarElem from '../NavBarElem';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background:'white',
    color : 'black',
    height:'64px',
    border: '1px solid #D4D5DE',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'black',
    backgroundColor : 'white',
    // marginBottom:'12px',
    // marginTop:'12px',
    borderRadius:'10%',
    // blockSize :'40px',
    width:'40px',
    height:'40px',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft({
	title,
	menu,
	children
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
			{/* <NavBarElem 
				title={title}
				classes={classes}
				handleDrawerOpen={handleDrawerOpen}
				open={open}
			/> */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menu.MenuSideBarSup.map((item, index) => (
            <a href={item.href} target='_blank' style={{ textDecoration: 'none' }}>
            {/* <Link to={item.link} style={{ textDecoration: 'none' }}> */}
							<ListItem button key={index}>
								<ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItem>
						 {/* </Link> */}
            </a>
          ))}
        </List>
        <Divider />
        <List>
          {menu.MenuSideBarInf.map((item, index) => (
            <a href={item.href} target='_blank' style={{ textDecoration: 'none' }}>
							<ListItem button key={index}>
								<ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItem>
						</a>
          ))}
        </List>
      </Drawer>
      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      > */}
        {/* <div className={classes.drawerHeader} /> */}
				{/* <Container fluid> */}
					{children}
				{/* </Container> */}
      {/* </main> */}
    </div>
  );
}
