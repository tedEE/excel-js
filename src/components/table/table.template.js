const CODS = {
  A: 65,
  Z: 90,
}
function toColumn(col) {
  return `
    <div class="column">
      ${col}
    </div>
  `
}
function toCell() {
  return `
    <div class="cell" contenteditable>

    </div>
  `
}
function createRow(index, content) {
  return `
     <div class="row">
        <div class="row-info">${index ? index : ''}</div>
        <div class="row-data">${content}</div>
     </div>
  `
}
function toChar(_, index) {
  return String.fromCharCode(CODS.A + index)
}
export function createTable(rowsCount = 15) {
  const colsCount = CODS.Z - CODS.A + 1
  const rows = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')
  rows.push(createRow(null, cols))
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')
    rows.push(createRow(i + 1, cells))
  }
  return rows.join('')
}
