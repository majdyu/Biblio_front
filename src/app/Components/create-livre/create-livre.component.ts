import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Livre } from 'src/app/models/livre.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { LivreService } from 'src/app/services/livre.service';


@Component({
  selector: 'app-create-livre',
  templateUrl: './create-livre.component.html',
  styleUrls: ['./create-livre.component.css']
})
export class CreateLivreComponent implements OnInit {
  categories:any[] = [];
  livreId : string;
  livre = new Livre();
  editMode = false;
  constructor(
    private categoryService: CategoriesService,
    private activatedRoute: ActivatedRoute,
    private livreService: LivreService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.livreId = param['id'];
     if(this.livreId){
      this.editMode = true;
      this.livreService.getLivreById(this.livreId).subscribe(res => {
        this.livre = res;
        console.log(this.livre.category);
        
      })
     }
    })

    this.categoryService.getAllCategories().subscribe(res => {
      //@ts-ignore
      this.categories = res;
     
    })
  }

  createLivre(){
    if(!this.editMode){
      this.livreService.createLivre(this.livre).subscribe(res => {
        console.log(res);
        
        this.router.navigate(["/livres"])
      })
    }
    else {
      this.livreService.updateLivre(this.livre).subscribe(res => {
        console.log(res);
        
        this.router.navigate(["/livres"])
      })
    }
  }
  returnToList(){
    this.router.navigate(["/livres"])
  }

}
