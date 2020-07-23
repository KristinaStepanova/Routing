import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "src/app/models/User";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.scss"],
})
export class UserEditComponent implements OnInit {
  userId: number;
  user: User;
  isReadOnly = true;

  constructor(
    public userService: UsersService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    //Get user id
    this.userId = this.activatedRoute.snapshot.params["id"];
    //Get user data
    this.userService.getUser(this.userId).subscribe((user: User) => {
      this.user = user;
    });
  }

  onEdit() {
    this.isReadOnly = false;
    const updtUser = Object.assign({}, this.user);
    this.userService.updateUser(updtUser).subscribe(
      (res: User) => {
        //show message
        //redirect home
        console.log(res)
        this.router.navigate(["/"])
      },
      (error) => {
        //show error message
      }
    );
  }
}
