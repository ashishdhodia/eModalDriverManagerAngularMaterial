import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(driverData: any, searchInput: string): any[] {
        if (!searchInput) {
            return driverData
        }

        searchInput = searchInput.toLowerCase()
        return driverData.filter((x: any) => x.driverName.toLowerCase().includes(searchInput))
    }
}