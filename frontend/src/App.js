import React, { Component, useState, useEffect, useMemo } from 'react';
import Helmet from 'react-helmet';
import {
  Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from 'react-router-dom';
import './App.css';
import history from './history';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import AppContainerElem from './Components/AppContainerElem';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';
import Icon from './logo.svg';
import Logo from './logo.svg';
import SectionAnalysis from './Views/SectionAnalysis/SectionAnalysis';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LogoApp from './EC2-Ferraillage.svg';
import GetTheme from './theme';

const Menu = {
  MenuNavBar: [{ text: '', link: '', href: '', icon: '' }],
  MenuSideBarSup: [
    {
      text: 'Plateforme',
      link: '',
      href: 'http://socotec.tridyme.com/dashboard',
      icon: <DashboardIcon />,
    },
  ],
  MenuSideBarInf: [],
};

const {
  REACT_APP_LOGO,
  REACT_APP_COMPANY,
  REACT_APP_APPLICATION_ID,
  REACT_APP_PLATFORM_URL,
} = process.env;

const App = () => {
  console.log('REACT_APP_APPLICATION_ID', REACT_APP_APPLICATION_ID);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(
    () => createTheme(GetTheme({ prefersDarkMode })),
    [prefersDarkMode],
  );

  useEffect(() => {
    const init = async () => {
      const userInfo = localStorage.getItem('user');
      console.log('user', userInfo);
      const newUser = JSON.parse(userInfo);
      console.log('newUser', newUser);
    };
    init();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{`TriDyme | Applications`}</title>
        <link rel="icon" type="image/png" href={Logo} sizes="16x16" />
      </Helmet>
      <BrowserRouter history={history}>
        <AppContainerElem
          title={
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt={`EC2-Ferraillage`}
                  src={LogoApp}
                  style={{ borderRadius: '0%' }}
                />
              </ListItemAvatar>
              <ListItemText primary={`EC2- Ferraillage`} />
            </ListItem>
          }
          menu={Menu}
        >
          <Switch>
            <Route
              exact
              path={`/applications/ID${REACT_APP_APPLICATION_ID}`}
              component={SectionAnalysis}
            />
            <Route
              exact
              path={`/applications/ID${REACT_APP_APPLICATION_ID}/models/:modelId`}
              component={SectionAnalysis}
            />
            <Redirect
              from="/"
              to={`/applications/ID${REACT_APP_APPLICATION_ID}`}
              component={SectionAnalysis}
            />
          </Switch>
        </AppContainerElem>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
