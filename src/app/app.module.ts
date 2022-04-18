import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LivresComponent } from './Components/livres/livres.component';
import { ProfesseursComponent } from './Components/professeurs/professeurs.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CreateCategoryComponent } from './Components/create-category/create-category.component';
import { ReturnLivreComponent } from './Components/return-livre/return-livre.component';
import { EtudiantsComponent } from './Components/etudiants/etudiants.component';
import { EmpruntesComponent } from './Components/empruntes/empruntes.component';
import { CreateLivreComponent } from './Components/create-livre/create-livre.component';
import { CreateStudentComponent } from './Components/create-student/create-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EtudiantsComponent,
    LivresComponent,
    ProfesseursComponent,
    EmpruntesComponent,
    HomeComponent,
    CreateLivreComponent,
    CreateStudentComponent,
    CategoriesComponent,
    CreateCategoryComponent,
    ReturnLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
