import { Component, HostListener } from '@angular/core'
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
  name = 'Angular'
  showDetails: boolean = false
  public getScreenWidth: any
  public getScreenHeight: any

  openDialog() {
    this.dialog.open(EAddDriverModalComponent)
  }

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.dataService.shareShowDetails.subscribe(x => this.showDetails = x)
}

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth
    this.getScreenHeight = window.innerHeight
  }

}
