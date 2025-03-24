import React from 'react';
import { Grid } from '@material-ui/core';
import { ButtonElem } from '@tridyme/react-components';
import { InputElem } from '@tridyme/react-components';
import { CardElem } from '@tridyme/react-components';
import { InputTableElem } from '@tridyme/react-components';

const Saisie = ({ state, setState, handleChange }) => {
  return (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <CardElem title={'Dimensions'} subtitle={''} elevation={0}>
          <InputTableElem
            headers={['Nom', 'Valeur', 'Unité', 'Description']}
            keys={['label', 'value', 'unit', 'description']}
            data={state.data}
            ui={state.ui.dimensions}
            onChange={handleChange}
            style={{ columnsWidth: ['10%', '30%', '10%', '50%'] }}
          />
        </CardElem>
      </Grid>
      <Grid item md={12}>
        <CardElem title={'Conditions de base'} subtitle={''} elevation={0}>
          <InputTableElem
            headers={['Nom', 'Valeur', 'Unité', 'Description']}
            keys={['label', 'value', 'unit', 'description']}
            data={state.data}
            ui={state.ui.conditions}
            onChange={handleChange}
            style={{ columnsWidth: ['10%', '30%', '10%', '50%'] }}
          />
        </CardElem>
      </Grid>
      <Grid item xs={12}>
        <CardElem title={'Temps de fonctionnement'} subtitle={''} elevation={0}>
          <InputTableElem
            headers={['Nom', 'Valeur', 'Unité', 'Description']}
            keys={['label', 'value', 'unit', 'description']}
            data={state.data}
            ui={state.ui.fonctionnement}
            onChange={handleChange}
            style={{ columnsWidth: ['10%', '30%', '10%', '50%'] }}
          />
        </CardElem>
      </Grid>
      <Grid item xs={12}>
        <CardElem title={'Apports par les parois'} subtitle={''} elevation={0}>
          <InputTableElem
            headers={['Nom', 'Valeur', 'Unité', 'Description']}
            keys={['label', 'value', 'unit', 'description']}
            data={state.data}
            ui={state.ui.parois}
            onChange={handleChange}
            style={{ columnsWidth: ['10%', '30%', '10%', '50%'] }}
          />
        </CardElem>
      </Grid>
      <Grid item xs={12}>
        <CardElem title={'Apports par les denrées'} subtitle={''} elevation={0}>
          <InputTableElem
            headers={['Nom', 'Valeur', 'Unité', 'Description']}
            keys={['label', 'value', 'unit', 'description']}
            data={state.data}
            ui={state.ui.denrees}
            onChange={handleChange}
            style={{ columnsWidth: ['10%', '30%', '10%', '50%'] }}
          />
        </CardElem>
      </Grid>
      <Grid item xs={12}>
        <CardElem title={"Apports par l'éclairage"} subtitle={''} elevation={0}>
          <InputTableElem
            headers={['Nom', 'Valeur', 'Unité', 'Description']}
            keys={['label', 'value', 'unit', 'description']}
            data={state.data}
            ui={state.ui.eclairage}
            onChange={handleChange}
            style={{ columnsWidth: ['10%', '30%', '10%', '50%'] }}
          />
        </CardElem>
      </Grid>
      <Grid item xs={12}>
        <CardElem
          title={"Apports par le renouvellement d'air"}
          subtitle={''}
          elevation={0}
        >
          <InputTableElem
            headers={['Nom', 'Valeur', 'Unité', 'Description']}
            keys={['label', 'value', 'unit', 'description']}
            data={state.data}
            ui={state.ui.air}
            onChange={handleChange}
            style={{ columnsWidth: ['10%', '30%', '10%', '50%'] }}
          />
        </CardElem>
      </Grid>
      <Grid item xs={12}>
        <CardElem
          title={'Apports par le personnel'}
          subtitle={''}
          elevation={0}
        >
          <InputTableElem
            headers={['Nom', 'Valeur', 'Unité', 'Description']}
            keys={['label', 'value', 'unit', 'description']}
            data={state.data}
            ui={state.ui.personnel}
            onChange={handleChange}
            style={{ columnsWidth: ['10%', '30%', '10%', '50%'] }}
          />
        </CardElem>
      </Grid>
    </Grid>
  );
};
export default Saisie;
