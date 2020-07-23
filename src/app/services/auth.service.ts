import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { User } from "../models/User";
import { map } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private authUrl: string = environment.api_url;
  private _token: string;
  private loginTask: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loginTaskEvent = this.loginTask.asObservable();

  constructor(private http: HttpClient) {}

  public get isAuth() {
    return this._token || localStorage.getItem("token");
  }

  private set token(token) {
    this._token = token;
    localStorage.setItem("token", token);
  }

  login(id: number): Observable<boolean> {
    return this.http
      .get<Post>(`${this.authUrl}/posts/${id}`, {
        headers: { "Content-Type": "application/json" },
      })
      .pipe(
        map((res) => {
          this.token = res.id;
          this.loginTask.next(true);
          return true;
        })
      );
  }
}

interface Post {
  userId: number;
  id?: number;
  title: string;
  body: string;
}
