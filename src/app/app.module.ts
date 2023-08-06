import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from './modules/shop/shop.module';
import { ShopsharedModule } from './modules/shop/shared/shopshared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ShopModule, ShopsharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
