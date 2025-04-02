import { Component, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { WorldbankApiService } from '../../worldbank-api.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {

  @Input() countryId!: string;
  @Input() countryCapital!: string;
  @Input() countryRegion!: string;
  @Input() countryIncomeLevel!: string;
  @Input() countryLatitude!: string;
  @Input() countryLongitude!: string;

  constructor(
    private elementRef: ElementRef,
    private worldApiService: WorldbankApiService
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    const svgElement = this.elementRef.nativeElement.querySelector("svg");
    const pathElements = svgElement.querySelectorAll("path");
    pathElements.forEach((path: SVGPathElement) => {

      path.addEventListener("click", this.handleClick.bind(this));
      });
    }

@Output() selectedId = new EventEmitter<string>();
@Output() selectedCapital = new EventEmitter<string>();
@Output() selectedRegion = new EventEmitter<string>();
@Output() selectedIncomeLevel = new EventEmitter<string>();
@Output() selectedLatitude = new EventEmitter<string>();
@Output() selectedLongitude = new EventEmitter<string>();

handleClick(event: MouseEvent) {
  const path = event.target as SVGPathElement;
  const countryId = path.id;


  this.worldApiService.getCountryData(countryId).subscribe((data: any) => {
    const name = data[1][0].name;
    const capitalCity = data[1][0].capitalCity;
    const region = data[1][0].region.value;
    const income = data[1][0].incomeLevel.value;
    const latitude = data[1][0].latitude;
    const longitude = data[1][0].longitude;

    this.selectedId.emit(name);
    this.selectedCapital.emit(capitalCity);
    this.selectedRegion.emit(region);
    this.selectedIncomeLevel.emit(income);
    this.selectedLatitude.emit(latitude);
    this.selectedLongitude.emit(longitude);
  });
}
}
