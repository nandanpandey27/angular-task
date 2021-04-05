import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersPageComponent } from "./users/containers/users-page/users-page.component";

const appRoutes: Routes = [
  {
    path: "",
    component: UsersPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // true for debugging purposes only
      useHash: false,
      anchorScrolling: "enabled",
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
