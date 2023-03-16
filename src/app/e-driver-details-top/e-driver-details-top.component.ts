import { Component } from '@angular/core'
import { EDataServiceService } from '../e-data-service.service'

@Component({
  selector: 'app-e-driver-details-top',
  templateUrl: './e-driver-details-top.component.html',
  styleUrls: ['./e-driver-details-top.component.css']
})
export class EDriverDetailsTopComponent {
  constructor(public dataService: EDataServiceService) { }
  currentDriverDetails: any

  ngOnInit(): void {
    this.dataService.shareCurrentDriverDetails.subscribe(x => this.currentDriverDetails = x)
  }
}
