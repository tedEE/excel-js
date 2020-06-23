import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener`)
    }
    // корневой элемент к которому будут применяться события
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      window.console.log(method)
      if (!this[method]) {
        const name = this.name || ''
        throw new Error(`Method ${method} is not implemented is ${name} Component`
        )
      }
      this[method] = this[method].bind(this)
      // тоже самое что и addEventListener инкапсулированный в классе Dom
      this.$root.on(listener, this[method])
    })
  }
  removeDomListeners() {
    this.listeners.forEach(listner => {
      const method = getMethodName(listner)
      this.$root.off(listner, this[method])
    })
  }
}
// приватная функция
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}

