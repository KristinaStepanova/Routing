import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  brand = "Routing";
  showNavbar = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.loginTaskEvent.subscribe((data: boolean) => {
      if(data) this.showNavbar = true;
    })
  }
}
