import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmprunt } from '../../models/emprunt.model';
import { ILivre } from '../../models/livre.model';
import { EmpruntService } from '../../services/emprunt.service';
import { LivreService } from '../../services/livre.service';

@Component({
  selector: 'app-return-livre',
  templateUrl: './return-livre.component.html',
  styleUrls: ['./return-livre.component.css']
})
export class ReturnLivreComponent implements OnInit {
  nomLivre: string
  emprunts : IEmprunt[]=[];
  searching= false;
  constructor(
    private livreService: LivreService,
    private empruntService: EmpruntService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAllEmprunts()
  }
  goToCreatePage(){
    this.router.navigate(['/createLivre'])
  }


  loadAllEmprunts(){
    this.empruntService.getAllEmprunt().subscribe(res =>{
      console.log(res);
      
      this.emprunts =res;
    })
  }
  returnBook(id: string){
    this.empruntService.deleteEmprunt(id).subscribe(()=> {
      this.loadAllEmprunts();
    })
  }
  search(){
    this.searching = true;
    if(!this.nomLivre || this.nomLivre == ""){
      this.loadAllEmprunts();
    }
    else{
      this.empruntService.findEmpruntByCriteria(this.nomLivre).subscribe(res => {
        console.log(res);
        this.emprunts =res
        
      })
    }
    
  }
}
