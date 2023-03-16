import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DriverManagerComponent } from './driver-manager/driver-manager.component'
import { EDriverDetailsTopComponent } from './e-driver-details-top/e-driver-details-top.component'
import { EDriverListComponent } from './e-driver-list/e-driver-list.component'
import { EDriverDetailsTabComponent } from './e-driver-details-tab/e-driver-details-tab.component'

const routes: Routes = [
  { path: "driverManager", component: DriverManagerComponent },
  { path: "driverDetailsTop", component: EDriverDetailsTopComponent },
  { path: "driverList", component:  EDriverListComponent},
  { path: "driverDetailsTab", component: EDriverDetailsTabComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
