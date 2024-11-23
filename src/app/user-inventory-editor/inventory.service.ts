import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

type InventoryRequest = {
  items: string[];
};

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http : HttpClient) { }

  updateInventory(userId: string, items: string[]): Observable<string> {

    let toProvision: InventoryRequest = {
      items: items,
    }

    return this.http.put(`http://localhost:4200/server/inventory?userId=${userId}`, toProvision, { observe: 'response'}).pipe(
      map(response => {
        console.log(response.headers);
        return response.headers.get('Location') || 'not set';
      })
    );
  }
}
