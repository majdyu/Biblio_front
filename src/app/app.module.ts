import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { LivresComponent } from './livres/livres.component';
import { ProfesseursComponent } from './professeurs/professeurs.component';
import { EmpruntesComponent } from './empruntes/empruntes.component';
import { HomeComponent } from './home/home.component';
import { CreateLivreComponent } from './create-livre/create-livre.component';
import { FormsModule } from '@angular/forms';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ReturnLivreComponent } from './return-livre/return-livre.component';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
