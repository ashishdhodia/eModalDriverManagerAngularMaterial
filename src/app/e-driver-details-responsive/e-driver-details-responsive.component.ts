import { Component } from '@angular/core'
import { EDataServiceService } from '../e-data-service.service'

@Component({
  selector: 'app-e-driver-details-responsive',
  templateUrl: './e-driver-details-responsive.component.html',
  styleUrls: ['./e-driver-details-responsive.component.css']
})
export class EDriverDetailsResponsiveComponent {
  constructor(public dataService: EDataServiceService) { }
  currentDriverDetails: any
  showDetails: boolean = false

  closeDetails() {
    this.dataService.updateShowDetails(false)
  }

  ngOnInit(): void {
    this.dataService.shareCurrentDriverDetails.subscribe(x => this.currentDriverDetails = x)
    this.dataService.shareShowDetails.subscribe(x => this.showDetails = x)
  }
}
