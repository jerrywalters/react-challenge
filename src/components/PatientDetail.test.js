import React from 'react';
import ReactDOM from 'react-dom';
import { getMedianWeight }   from './PatientDetail';

console.log('medianweight:', getMedianWeight)

const oddObjects = [
    {
        "weight": 5
    },
    {
        "weight": 1
    },
    {
        "weight": 9
    },
    {
        "weight": 16
    },
    {
        "weight": 2
    },
];

const evenObjects = [
    {
        "weight": 5
    },
    {
        "weight": 1
    },
    {
        "weight": 9
    },
    {
        "weight": 16
    },
    {
        "weight": 2
    },
    {
        "weight": 11
    },
];

// These tests are designed to properly find the median from a set of objects containing a weight property
// Tests on even or odd sets of objects because even medians are found by averaging the middle 2 nums
describe('median', () => {
    it('should find the middle weight in an odd set of objects with weight properties', () => {
        expect(getMedianWeight(oddObjects)).toBe(5);
    });
    it('should find the mean of the middle 2 weights in an even set of objects with weight properties', () => {
        expect(getMedianWeight(evenObjects)).toBe(7);
    });
})
