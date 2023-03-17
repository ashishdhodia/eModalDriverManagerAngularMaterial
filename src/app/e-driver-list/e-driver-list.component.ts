import { Component } from '@angular/core'
import { EDataServiceService } from '../e-data-service.service'

@Component({
  selector: 'app-e-driver-list',
  templateUrl: './e-driver-list.component.html',
  styleUrls: ['./e-driver-list.component.css']
})
export class EDriverListComponent {
  constructor(public dataService: EDataServiceService) { }
  searchInput!: string
  originDriverObj: any
  selectedId: any

  changeDetails(id: any) {
    this.selectedId = id
    this.dataService.updateSelectedId(id)
    this.dataService.updateCurrentDriverDetails(this.originDriverObj.filter((driver: any) => driver.driverId === id))
    this.dataService.updateShowDetails(true)
  }
  
  ngOnInit(): void {
    this.dataService.shareSearchInput.subscribe(x => this.searchInput = x)
    this.dataService.shareOriginDriverObj.subscribe(x => this.originDriverObj = x)
  }
}


