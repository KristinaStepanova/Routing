import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { UserEditComponent } from "./components/user-edit/user-edit.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { mainRoutes } from "../app/modules/main/main-routing";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", children: [...mainRoutes], canActivate: [AuthGuard] },
  { path: "about", children: [...mainRoutes], canActivate: [AuthGuard] },
  { path: "user/:id", component: UserEditComponent, canActivate: [AuthGuard] },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
