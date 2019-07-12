import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DeliveryPlacesComponent } from "./delivery-places/delivery-places.component";

@NgModule({
  declarations: [AppComponent, DeliveryPlacesComponent],
  imports: [BrowserModule, AppRoutingModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
