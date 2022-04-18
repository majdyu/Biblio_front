import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateLivreComponent } from './create-livre/create-livre.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EmpruntesComponent } from './empruntes/empruntes.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { HomeComponent } from './home/home.component';
import { LivresComponent } from './livres/livres.component';
import { ProfesseursComponent } from './professeurs/professeurs.component';
import { ReturnLivreComponent } from './return-livre/return-livre.component';

const routes: Routes = [{
  path: 'livres',
  component: LivresComponent
},
{
  path: "home",
  component: HomeComponent
},
{
  path: "etudiants",
  component: EtudiantsComponent
},
{
  path: "enseignants",
  component: ProfesseursComponent
},
{
  path: "empruntes",
  component: EmpruntesComponent
},
{
  path: "createLivre",
  component: CreateLivreComponent
},
{
  path: "editLivre/:id",
  component: CreateLivreComponent
},
{
  path: "createStudent",
  component: CreateStudentComponent
},
{
  path: "editStudent/:id",
  component: CreateStudentComponent
},
{
  path: "createCategory",
  component: CreateCategoryComponent
},
{
  path: "editCategory/:id",
  component: CreateCategoryComponent
},
{
  path: "categories",
  component: CategoriesComponent
},
{
  path: "list-emprunts",
  component: ReturnLivreComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
