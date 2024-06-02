// src/data/loadData.js
import data from './eve.json';

const parseData = () => {
    return data.map(entry => ({
        timestamp: new Date(entry.timestamp),
        severity: entry.alert.severity,
        category: entry.alert.category,
    }));
};

export default parseData;
