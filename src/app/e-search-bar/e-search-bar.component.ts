import { Component } from '@angular/core'
import { EDataServiceService } from '../e-data-service.service'

@Component({
  selector: 'app-e-search-bar',
  templateUrl: './e-search-bar.component.html',
  styleUrls: ['./e-search-bar.component.css']
})
export class ESearchBarComponent {
  constructor(public dataService: EDataServiceService) { }

  searchInput!: string
  changeSearchInput() {
    this.dataService.updateSearchInput(this.searchInput)
  }
  currentDriverDetails: any
}
