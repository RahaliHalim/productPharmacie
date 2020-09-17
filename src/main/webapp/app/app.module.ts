import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ProdPharmacieSharedModule } from 'app/shared/shared.module';
import { ProdPharmacieCoreModule } from 'app/core/core.module';
import { ProdPharmacieAppRoutingModule } from './app-routing.module';
import { ProdPharmacieHomeModule } from './home/home.module';
import { ProdPharmacieEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ProdPharmacieSharedModule,
    ProdPharmacieCoreModule,
    ProdPharmacieHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ProdPharmacieEntityModule,
    ProdPharmacieAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class ProdPharmacieAppModule {}
