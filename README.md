Ionic Currency Mask Directive
===

This library currently supports only the following formatting for input: 0.000,00 (decimal ","; thousand ".").

Install
--
npm i @thiagoprz/ionic-currency-mask

Usage
---
Import into your component's module and add the "currencyMask" property to ion-input:

my-component.module.ts
```
import {CurrencyMaskDirectiveModule} from "@thiagoprz/ionic-currency-mask";

@NgModule({
    ...
    imports: [
        ...,
        CurrencyMaskDirectiveModule
    ],
    ...
})
export class MyComponent {}
```

my-component.html
```
<ion-content>
    ...
    <ion-item>
      <ion-label>Price Attribute</ion-label>
      <ion-input class="ion-text-right" [(ngModel)]="advert.price_kg" maxlength="255" type="tel" placeholder="R$ 0,00" currencyMask></ion-input>
    </ion-item>
    ...
</ion-content>
```
