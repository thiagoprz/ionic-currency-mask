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
	var parts = value.toString().split(this.decimal);
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousand);
	value = parts.join(this.decimal);
	console.log(value);
	event.target.value = value;
	this.model.update.emit(value);
	return true;
  }
}
