import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from '../../../admin/layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  public layoutService = inject(LayoutService);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required)
  });

  funIngresar() {
    this.authService.loginConNest(this.loginForm.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/admin']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}