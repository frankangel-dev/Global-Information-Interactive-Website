import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Interactive-Map';

  id: string = "";
  capital: string = "";
  region: string = "";
  incomeLevel: string = "";
  latitude: string = "";
  longitude: string = "";

onIdSelect(id: string) {
  this.id = id;
}

onCapitalSelect(capital: string) {
  this.capital = capital;
}

onRegionSelect(region: string) {
  this.region = region;
}

onIncomeSelect(income: string) {
  this.incomeLevel = income;
}

onLatitudeSelect(latitude: string) {
  this.latitude = latitude;
}

onLongitudeSelect(longitude: string) {
  this.longitude = longitude;
}
}
