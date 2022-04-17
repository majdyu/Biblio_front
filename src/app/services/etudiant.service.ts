import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../models/etudiant.model';
import { Livre } from '../models/livre.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient) { }

  getAllEtudiants(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(environment.api+"/api/students");
  }
  createEtudiant(etudiant: Etudiant){
    return this.http.post(environment.api+"/api/students", etudiant);
  }
  
  getEtudiantById(id: string){
    return this.http.get(environment.api+"/api/students/"+id);
  }
  updateEtudiant(etudiant: Livre){
    return this.http.put(environment.api +"/api/students/"+etudiant.id, etudiant);
  }
  
  deleteEtudiant(id: string){
    return this.http.delete(environment.api+"/api/students/"+id);
  }
}
