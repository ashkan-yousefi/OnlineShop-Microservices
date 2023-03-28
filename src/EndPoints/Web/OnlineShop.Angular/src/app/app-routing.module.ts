import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DocsComponent } from './docs/docs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { HomeUserPanelComponent } from './UserPanel/home-user-panel/home-user-panel.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'Docs', component: DocsComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'userpanel', component:  HomeUserPanelComponent, canActivate:[AuthGuardService]},

  
  /////////////////
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
