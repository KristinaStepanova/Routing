import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import { User } from "src/app/models/User";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  testIf = true;
  testPipe = ["One", "Two"];

  constructor(public userService: UsersService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });

    setTimeout(() => {
      this.testPipe.push('Three');
    })
  }
}
