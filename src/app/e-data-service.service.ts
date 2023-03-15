import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import driverData from '../assets/driverData.json'

@Injectable({
  providedIn: 'root'
})
export class EDataServiceService {

  constructor() { }
  public originDriverObj = new BehaviorSubject<any>(driverData)
  public shareOriginDriverObj = this.originDriverObj.asObservable()

  public selectedId = new BehaviorSubject<any>(2)
  public shareSelectedId = this.selectedId.asObservable()

  public currentDriverDetails = new BehaviorSubject<any>(driverData)
  public shareCurrentDriverDetails = this.currentDriverDetails.asObservable()

  public searchInput = new BehaviorSubject<any>("")
  public shareSearchInput = this.searchInput.asObservable()

  public driverObj = driverData

  updateSelectedId(id: any) {
    this.selectedId.next(id)
  }

  updateCurrentDriverDetails(data: any) {
    this.currentDriverDetails.next(data)
  }

  updateSearchInput(searchInput: any) {
    this.searchInput.next(searchInput)
  }
}
