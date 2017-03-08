
import _ from 'lodash';


export function getLatestData(currencyStr, data) {
  let parsedData = parseTickData(data);
  let idx = getCurrencyIndex(currencyStr, parsedData)
  return String(parsedData[idx][2]) + String(parsedData[idx][3])
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

export function addColumnData(column, value) {
  let tail = _.chain(column).tail().drop().value()

  tail.unshift(column[0])
  tail.push(value)
  return tail
}
