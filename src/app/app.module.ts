import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DriverManagerComponent } from './driver-manager/driver-manager.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatNativeDateModule } from '@angular/material/core'
import { HttpClientModule } from '@angular/common/http'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button"
import { MatGridListModule } from '@angular/material/grid-list'
import { MatChipsModule } from '@angular/material/chips'
import { MatBadgeModule } from '@angular/material/badge'
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatSelectModule } from "@angular/material/select"
import { EAddDriverModalComponent } from './e-add-driver-modal/e-add-driver-modal.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTabsModule } from "@angular/material/tabs"

@NgModule({
  declarations: [
    AppComponent,
    DriverManagerComponent,
    EAddDriverModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatChipsModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
