import {Attribute, Directive} from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[currencyMask]',
  host: {
    '(keyup)': 'changeValue($event)',
    '(ionChange)': 'changeValue($event)',
  },
  providers: [NgModel]
})
export class CurrencyMaskDirective {

  /**
   * Decimal separator (defaults to ",")
   */
  decimal: string = ',';

  /**
   * Thousand separator (defaults to ".")
   */
  thousand: string = '.';

  /**
   * Construtor
   * @param {NgModel} model
   */
  constructor(public model: NgModel,
              @Attribute('decimal') decimal: string,
              @Attribute('thousand') thousand: string) {
    if (decimal) {
      this.decimal = decimal;
    }
    if (thousand) {
      this.thousand = thousand;
    }
  }

  /**
   * Listener changeValue
   * @param event
   */
  changeValue(event: any) {
    let value = event.target.value;
    if (value == '') {
      return;
    }

    value = value + '';
    value = parseInt(value.replace(/[\D]+/g, ''));
    value = value + '';

    value = value.replace(/([0-9]{2})$/g, this.decimal + '$1');

    if (value.length > 6) {
	  var regex = new RegExp("([0-9]{3})" + this.decimal + "([0-9]{2}$)", "g");
      value = value.replace(regex, this.thousand + '$1' + this.decimal + '$2');
    }

    if (value.length > 10) {
	  var regex = new RegExp("([0-9]{3})" + this.thousand + "([0-9]{3})" + this.decimal + "([0-9]{2}$)", "g");
      value = value.replace(regex, this.thousand + '$1' + this.thousand + '$2' + this.decimal + '$3');
    }
    console.log(value)

    event.target.value = value;
    this.model.update.emit(value);
    return true;
  }
}
