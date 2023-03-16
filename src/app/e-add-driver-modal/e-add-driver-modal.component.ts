import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { EDataServiceService } from '../e-data-service.service'

@Component({
  selector: 'app-e-add-driver-modal',
  templateUrl: './e-add-driver-modal.component.html',
  styleUrls: ['./e-add-driver-modal.component.css']
})
export class EAddDriverModalComponent {

  constructor(private fB: FormBuilder, public dataService: EDataServiceService) { }

  driverForm: any

  addDriver(redDriverData: any) {
    let data = redDriverData.value
    data = { ...data, driverDpPath: "assets/dp-01.png", driverId: this.guidGenerator().slice(0, 5) }
    this.dataService.addDriverData(data)

  }

  guidGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4())
  }

  ngOnInit(): void {
    this.driverForm = this.fB.group({
      "driverName": ["", [Validators.required]],
      "driverEmail": ["", [Validators.required]],
      "driverPhone": ["", [Validators.required]],
      "driverStatus": ["", [Validators.required]]
    })

  }
}
