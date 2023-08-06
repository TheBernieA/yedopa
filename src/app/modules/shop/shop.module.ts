import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { ShopsharedModule } from "./shared/shopshared.module";
import { HeroComponent } from './pages/homepage/components/hero/hero.component';
import { ServicesectionComponent } from './pages/homepage/components/servicesection/servicesection.component';
import { ProductTypesComponent } from './pages/homepage/components/product-types/product-types.component';
import { BestSellersComponent } from './pages/homepage/components/best-sellers/best-sellers.component';
import { OnSaleComponent } from './pages/homepage/components/on-sale/on-sale.component';
import { BrandsComponent } from './pages/homepage/components/brands/brands.component';
import { WelcomeComponent } from './pages/homepage/components/welcome/welcome.component';

@NgModule({
  declarations: [HomepageComponent, HeroComponent, ServicesectionComponent, ProductTypesComponent, BestSellersComponent, OnSaleComponent, BrandsComponent, WelcomeComponent],
  imports: [CommonModule, ShopsharedModule],
  exports: [HomepageComponent],
})
export class ShopModule {}
