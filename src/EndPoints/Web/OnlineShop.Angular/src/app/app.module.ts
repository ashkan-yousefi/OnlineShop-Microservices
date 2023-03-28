import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceService } from './service.service';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DocsComponent } from './docs/docs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeUserPanelComponent } from './UserPanel/home-user-panel/home-user-panel.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AboutUsComponent,
    DocsComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    HomeUserPanelComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule,FormsModule
  ],
  providers: [ServiceService,AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
