
import _ from 'lodash';


export function getLatestData(currencyStr, data) {
  let parsedData = parseTickData(data);
  let idx = getCurrencyIndex(currencyStr, parsedData)
  return parsedData[idx][8]
}

function getCurrencyIndex(currencyStr, data) {
    return _.findIndex(data, (line) => {
      return (line[0] === currencyStr)
    })
}

function parseTickData(data) {
  let lines = data.trim().split("\n");
  return _.map(lines, (line) => line.split(','))
}
