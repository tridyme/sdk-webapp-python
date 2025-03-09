import React, { useState, useEffect } from 'react';
import { Grid, Tabs, Tab, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';
import history from '../../history';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ButtonElem } from '@tridyme/react-components';
import { InputTableElem } from '@tridyme/react-components';
import { CardElem } from '@tridyme/react-components';

import initialState from './initialState';
import calculations from './calculations';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTableCell-root': {
      border: 'none', // Remove border for all table cells
    },
  },

  label: {
    fontFamily: 'sans-serif',
    fontSize: '14px',
    // textTransform:'lowercase'
  },

  tableCell: {
    lineHeight: '1.5', // Adjust the value as needed for desired line spacing
  },

  tableContainer: {
    border: '1px solid #000',
    marginBottom: '10px',
    padding: '10px',
    marginRight: theme.spacing(1),
    flex: '1',
  },

  tableTitle: {
    marginLeft: '0.5rem',
    fontSize: '16px',
    fontWeight: 'bolder',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
}));

const {
  REACT_APP_APPLICATION_NAME,
  REACT_APP_APPLICATION_API_URL,
  REACT_APP_PLATFORM_API_URL,
  REACT_APP_APPLICATION_ID,
} = process.env;

function SectionAnalysis({ match }) {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('user'));
  let userId;
  if (user != null) {
    userId = user['_id'];
  }

  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [modelId, setModelId] = useState(match.params?.modelId);

  useEffect(() => {
    const init = async () => {
      let actualState = {};
      if (modelId) {
        const model = await handleGetModel(modelId);
        actualState = model.data;
      } else {
        actualState = initialState;
      }
      console.log('ACTUAL STATE', actualState);
      const calculatedData = calculations.outputs(actualState.data);
      console.log('calculatedData', calculatedData);
      const updatedState = {
        ...actualState,
        data: {
          ...actualState.data,
          ...calculatedData,
        },
      };

      setState(updatedState);
      setLoading(false);
    };
    init();
  }, []);

  /*   const handleChangeValues = (prop) => (event) => {
    const newValues = { ...values, [prop]: Number(event.target.value) };

    const calculatedValues = calculations.outputs(newValues);

    const updatedValues = {
      ...newValues,
      ...calculatedValues,
    };
    setValues(updatedValues);
  }; */

  const handleAnalysis = async () => {
    try {
      const response = await fetch(
        `${REACT_APP_APPLICATION_API_URL}/api/analysis`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(state), // Envoie l'état en JSON
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newState = await response.json();
      console.log('newState', newState); // Traitez le résultat comme nécessaire
      if (newState?.data) {
        const calculatedData = calculations.outputs(newState.data);
        console.log('calculatedData ', calculatedData);
        const updatedState = {
          ...newState,
          data: {
            ...newState.data,
            ...calculatedData,
          },
        };
        console.log('updatedState ', updatedState);
        setState(updatedState);
      }
    } catch (err) {
      console.log("Erreur lors de l'envoi de l'état:", err);
    }
  };

  const handleGetModel = async (modelId) => {
    try {
      const response = await fetch(
        `${REACT_APP_PLATFORM_API_URL}/models/${modelId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newState = await response.json();
      return newState;
    } catch (err) {
      console.log('error when get models: ', err);
      return [];
    }
  };

  const handleChangeProjectData = (prop) => (event) => {
    const newData = {
      ...state.data,
      [prop]: {
        ...state.data[prop],
        value: event.target.value,
      },
    };
    const updatedState = {
      ...state,
      data: {
        ...state.data,
        ...newData,
      },
    };

    setState(updatedState);
  };

  const handleSave = async () => {
    console.log('STATE', state);
    // const platform = new Platform();
    // const data = state;
    try {
      const model = {
        project: null,
        name: state.data.projet.value,
        application: `${REACT_APP_APPLICATION_ID}`,
        data: state,
        user: String(userId),
      };

      if (modelId) {
        const updatedModel = { _id: modelId, ...model };
        const { data } = await axios.post(
          `${REACT_APP_PLATFORM_API_URL}/models/updateModel`,
          updatedModel,
        );
        console.log('Model updated', data);
      } else {
        const newModel = model;
        const { data } = await axios.post(
          `${REACT_APP_PLATFORM_API_URL}/models/addModel`,
          newModel,
        );
        const newModelId = data._id;
        history.push(
          `/applications/ID${REACT_APP_APPLICATION_ID}/models/${newModelId}`,
        );
        setModelId(newModelId);
        console.log('Model added', data);
      }
      toast.success('Projet enregistré', { autoClose: 3000 });
    } catch (err) {
      console.log(err);
      console.log('Model not saved');
      toast.error('Erreur : Projet Non enregistré', { autoClose: 3000 });
    }
  };

  const handleChange = (prop) => (event) => {
    const actualState = {
      ...state.data,
      [prop]: {
        ...state.data[prop],
        value: Number(event.target.value),
      },
    };
    const calculatedData = calculations.outputs(actualState);
    const updatedState = {
      ...actualState,
      data: {
        ...actualState.data,
        ...calculatedData,
      },
    };
    setState(updatedState);
  };

  return (
    <Grid container spacing={3}>
      {loading ? (
        <div className={classes.overlay}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <Grid item sm={12} style={{ textAlign: 'right' }}>
            <ButtonElem
              label={'Calcul'}
              onClick={handleAnalysis}
              style={{
                borderRadius: '0px',
                backgroundColor: '#FFFFFF',
                color: '#0082DE',
                margin: '1em',
                textTransform: 'none',
              }}
            />
            <ButtonElem
              label={'Sauvegarder'}
              onClick={handleSave}
              style={{
                borderRadius: '0px',
                backgroundColor: '#FFFFFF',
                color: '#0082DE',
                margin: '1em',
                textTransform: 'none',
              }}
            />
          </Grid>
          <Grid item md={12}>
            <CardElem
              elevation={0}
              title="Données d'entrée"
              subtitle="Section: dimensions"
            >
              {/*      <InputElem data={state?.data?.h} onChange={handleChangeState} />
              <InputElem data={state?.data?.b} onChange={handleChangeState} /> */}
              <InputTableElem
                headers={['Nom', 'Valeur', 'Unité', 'Description']}
                keys={['label', 'value', 'unit', 'description']}
                data={state.data}
                ui={['h', 'b']}
                onChange={handleChange}
                style={{ columnsWidth: ['10%', '30%', '10%', '50%'] }}
              />
            </CardElem>
          </Grid>
          <Grid item md={4}>
            <CardElem
              elevation={0}
              title="Résultats"
              subtitle="Section: caractéristiques"
            >
              {/*      <InputElem data={state?.data?.h} onChange={handleChangeState} />
              <InputElem data={state?.data?.b} onChange={handleChangeState} /> */}
              <InputTableElem
                headers={['Nom', 'Valeur', 'Unité', 'Description']}
                keys={['label', 'value', 'unit', 'description']}
                data={state.data}
                ui={['A', 'Ixx']}
                onChange={handleChange}
                style={{ columnsWidth: ['10%', '30%', '10%', '50%'] }}
              />
            </CardElem>
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default SectionAnalysis;
