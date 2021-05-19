Ionic Currency Mask Directive
===

Install
--
npm i @thiagoprz/ionic-currency-mask

Usage
---
Import into your component's module and add the "currencyMask" property to ion-input:

my-component.module.ts
```
import {IonicCurrencyMaskModule} from "@thiagoprz/ionic-currency-mask";

@NgModule({
    ...
    imports: [
        ...,
        IonicCurrencyMaskModule
    ],
    ...
})
export class MyComponent {}
```

my-component.html
```
<ion-content>
    ...
    <!-- Sample for BRL currency R$ 1.000,00  -->
    <ion-item>
      <ion-label>Price Attribute</ion-label>
      <ion-input class="ion-text-right" [(ngModel)]="price" maxlength="15" type="tel" placeholder="R$ 0,00" currencyMask decimal="," thousand="."></ion-input>
    </ion-item>
    ...
    <!-- Sample for USD currency US$ 1,000.00  -->
    <ion-item>
      <ion-label>Price Attribute</ion-label>
      <ion-input class="ion-text-right" [(ngModel)]="price" maxlength="15" type="tel" placeholder="$0.00" currencyMask decimal="." thousand=","></ion-input>
    </ion-item>
    ...
</ion-content>
```
