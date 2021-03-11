import { Directive } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[currencyMask]',
  host: {
    '(keyup)': 'onInputChange($event)'
  },
  providers: [NgModel]
})
export class CurrencyMaskDirective {

  /**
   * Construtor
   * @param {NgModel} model
   */
  constructor(public model: NgModel) {
  }

  /**
   * Listener para mudança de value do input
   * @param event
   */
  onInputChange(event: any) {
    let value = event.target.value;
    if (value == '') {
      return;
    }

    value = value + '';
    value = parseInt(value.replace(/[\D]+/g, ''));
    value = value + '';
    value = value.replace(/([0-9]{2})$/g, ',$1');

    if (value.length > 6) {
      value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
    }

    if (value.length > 10) {
      value = value.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, '.$1.$2,$3');
    }

    event.target.value = value;
    this.model.update.emit(value);
    return true;
  }

}
