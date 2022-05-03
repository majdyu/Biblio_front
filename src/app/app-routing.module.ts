import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CreateCategoryComponent } from './Components/create-category/create-category.component';
import { HomeComponent } from './home/home.component';
import { LivresComponent } from './Components/livres/livres.component';
import { ProfesseursComponent } from './Components/professeurs/professeurs.component';
import { ReturnLivreComponent } from './Components/return-livre/return-livre.component';
import { EtudiantsComponent } from './Components/etudiants/etudiants.component';
import { EmpruntesComponent } from './Components/empruntes/empruntes.component';
import { CreateLivreComponent } from './Components/create-livre/create-livre.component';
import { CreateStudentComponent } from './Components/create-student/create-student.component';
import { CreateTeacherComponent } from './Components/create-teacher/create-teacher.component';

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
},
{
  path: "createTeacher",
  component : CreateTeacherComponent
},
{
  path: "editTeacher/:id",
  component : CreateTeacherComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
