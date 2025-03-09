import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
  Typography,
} from '@material-ui/core';
import ToolTips from '../ToolTips';
import { NumericFormat } from 'react-number-format';
// import './InputElem.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  // withoutLabel: {
  //   marginTop: theme.spacing(3),
  // },
  // textField: {
  //   width: '25ch',
  // },
  input: {
    color: 'blue',
    // backgroundColor: 'lightblue'
  },
  inputAdornment: {
    // paddingRight: '1em',
    color: 'black',
  },
}));

const InputElem = ({ data, onChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <InputLabel htmlFor="outlined-adornment-amount">{data?.label}</InputLabel>
      <div style={{ display: 'flex' }}>
        <NumericFormat
          customInput={TextField}
          variant="outlined"
          inputProps={{
            style: {
              textAlign: 'center',
              backgroundColor: 'white',
              height: '1px',
            },
          }}
          className={onChange && classes.input}
          value={data?.value}
          classes={{ input: classes.input }}
          onChange={onChange}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '5px',
        }}
      >
        <Typography>{data?.unit?.label}</Typography>
      </div>
    </div>
  );
};

export default InputElem;
