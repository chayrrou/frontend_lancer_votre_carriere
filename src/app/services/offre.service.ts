import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from '../classes/offre';

const URL="http://localhost:3000/offre";
@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor( private http:HttpClient) { }
  getOffre():Observable<any>{
    return this.http.get<any>(URL);
  }
  addOffre(d:Offre):Observable<Offre>{
    return this.http.post<Offre>(URL, d)
  }
  getOffreById(id:number):Observable<Offre>{
    return this.http.get<Offre>(URL+"/"+ id);
  }
 

  updateOffre(id:number,d:Offre){
    return this.http.put<Offre>(URL+"/"+id ,d)
  }
  deleteOffre(id : number){
    return this.http.delete(`${URL}/${id}`);
  }
}
