import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: 'Formulf',
      listeners: ['input'],
    })
  }
  // корневой класс для блока
  static className = 'excel__formula'
  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }
  onInput(event) {
    window.console.log('Formula: onInput ', event)
  }
}
