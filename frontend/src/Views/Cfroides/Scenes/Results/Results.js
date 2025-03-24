import React from 'react';
import { Grid } from '@material-ui/core';
import TableElem from '../../../../Components/TableElem/TableElem';
import { InputTableElem } from '@tridyme/react-components';
import CardElem from '../../../../Components/CardElem/CardElem';
import { makeStyles } from '@material-ui/core/styles';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTableCell-root': {
      border: 'none', // Remove border for all table cells
    },
  },

  label: {
    fontFamily: 'sans-serif',
    fontSize: '14px',
    width: '100%',
    lineHeight: '1',
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
}));

const Results = ({ state, setState, handleChange }) => {
  const classes = useStyles();
  const COLORS = ['#8884d8', '#82ca9d', '#ffbb28', '#ff8042', '#d62728'];
  const partitionData = [
    { name: 'Parois', value: state.data.Partition.value[0] || 0 },
    { name: 'Denrées', value: state.data.Partition.value[1] || 0 },
    { name: 'Éclairage', value: state.data.Partition.value[2] || 0 },
    { name: 'Individus', value: state.data.Partition.value[3] || 0 },
    { name: 'Renouvellement d’air', value: state.data.Partition.value[4] || 0 },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item md={6}>
        <CardElem title={'Résultats'} subtitle={''} elevation={0}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TableElem
                columns={[]}
                data={state.data}
                ui={state.ui.resultats}
                onChange={handleChange}
                isDisable={true}
              />
            </Grid>
          </Grid>
        </CardElem>
      </Grid>
      <Grid item md={6}>
        <CardElem title={'Répartition des pertes'} subtitle={''} elevation={0}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <PieChart width={400} height={300}>
                <Pie
                  data={partitionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {partitionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </Grid>
          </Grid>
        </CardElem>
      </Grid>
    </Grid>
  );
};
export default Results;
