import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-dis-card',
  templateUrl: './dis-card.component.html',
  styleUrls: ['./dis-card.component.css'],
})
export class DisCardComponent implements OnInit {
  countByCity: any[] = [];

  cityImageMapping: any = {
    Hyderabad: 'https://images.unsplash.com/photo-1470075446540-4391a96ec621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    Chennai: 'https://images.unsplash.com/photo-1588733103629-b77afe0425ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdGllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    Mumbai: 'https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png',
    Delhi: 'https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png',
    Vizag :'https://images.unsplash.com/photo-1547052218-4c14aad4bc57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    Banglore:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=944&q=80',
  };

  constructor(private propertyService: PropertyService) {}

  getImageUrl(city: string): string {
    return (
      this.cityImageMapping[city] || '../../../../assets/icons/city.png'
    );
  }

  ngOnInit(): void {
    this.propertyService.countPropertiesByCity().subscribe(
      (data: any) => {
        this.countByCity = data;
        console.log(this.countByCity);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
