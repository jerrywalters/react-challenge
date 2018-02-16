import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Slider, { Range } from 'rc-slider';
import patients from '../patients.json';
import 'rc-slider/assets/index.css';

const ChartComponent = (props) => {

    return (
        <Slider min={props.min} max={props.max} marks={props.marks} step={null} allowCross={false} defaultValue={20} disabled/>
    )
}

export default ChartComponent;