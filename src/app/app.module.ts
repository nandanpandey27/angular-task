import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { UsersModule } from "./users/users.module";
import { ApiService } from "./api.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, UsersModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
