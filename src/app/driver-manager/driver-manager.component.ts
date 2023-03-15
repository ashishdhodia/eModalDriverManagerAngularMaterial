import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { EAddDriverModalComponent } from '../e-add-driver-modal/e-add-driver-modal.component'
import { EDataServiceService } from '../e-data-service.service'

@Component({
  selector: 'app-driver-manager',
  templateUrl: './driver-manager.component.html',
  styleUrls: ['./driver-manager.component.css']
})
export class DriverManagerComponent {

  constructor(public dialog: MatDialog, public dataService: EDataServiceService) { }
  searchInput!: string
  originDriverObj: any
  selectedId: any

  openDialog() {
    this.dialog.open(EAddDriverModalComponent)
  }

  ngOnInit(): void {
    this.dataService.shareSearchInput.subscribe(x => this.searchInput = x)
    this.dataService.shareOriginDriverObj.subscribe(x => this.originDriverObj = x)
  }

}
