import { Component, OnInit } from "@angular/core";
import { deliveryPlacesArray } from "../delivery-places-data";

@Component({
  selector: "app-delivery-places",
  templateUrl: "./delivery-places.component.html",
  styleUrls: ["./delivery-places.component.scss"]
})
export class DeliveryPlacesComponent implements OnInit {
  deliveryPlaces = deliveryPlacesArray;
  constructor() {}

  ngOnInit() {}
}
