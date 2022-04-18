import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Emprunt } from '../models/emprunt.model';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {

  constructor(private http: HttpClient) { }

  getAllEmprunt(): Observable<Emprunt[]>{
    return this.http.get<Emprunt[]>(environment.api+"/api/emprunts");
  }
  createEmprunt(emprunt: Emprunt){
    return this.http.post(environment.api+"/api/emprunts",emprunt);
  }
  deleteEmprunt(id: string){
    return this.http.delete(environment.api+"/api/emprunts/"+id)
  }
  findEmpruntByCriteria(livre:string){
    return this.http.get<Emprunt[]>(environment.api+"/api/emprunts-by-criteria/"+livre);
  }
}
