import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {ContentHomePageComponent} from './content-home-page/content-home-page.component';
import {UserListComponent} from './user-list/user-list.component';

const routes: Routes = [
  {path: "register", component: UserComponent},
  {path: "home", component: ContentHomePageComponent},
  {path: "users", component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
