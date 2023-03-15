import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DriverManagerComponent } from './driver-manager/driver-manager.component'

const routes: Routes = [
  { path: "driverManager", component: DriverManagerComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
