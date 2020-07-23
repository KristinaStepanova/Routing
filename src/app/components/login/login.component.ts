import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    //Init form
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [
        Validators.minLength(8),
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
    this.spinner.show();
    //this.auth.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(res => console.log(res));
    this.auth.login(1).subscribe(
      (res) => {
        if (res) {
          this.router.navigate(["/"]);
          this.spinner.hide();
        }
      },
      ({ error, status }) => {
        console.log(error, status);
        this.spinner.hide();
      }
    );
  }
}
