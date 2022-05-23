import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LivresComponent } from './Components/livres/livres.component';
import { ProfesseursComponent } from './Components/professeurs/professeurs.component';
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
import { ToastrModule } from 'ngx-toastr';
import { CreateTeacherComponent } from './Components/create-teacher/create-teacher.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EtudiantsComponent,
    LivresComponent,
    ProfesseursComponent,
    EmpruntesComponent,
    CreateLivreComponent,
    CreateStudentComponent,
    CategoriesComponent,
    CreateCategoryComponent,
    ReturnLivreComponent,
    CreateTeacherComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
