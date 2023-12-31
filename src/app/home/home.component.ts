import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private authService: AuthService) {}

  onLoadServers() {
    this.router.navigate(['/servers']);
  }

  onLoadServer(serverId: number) {
    this.router.navigate(['/servers', serverId, 'edit'], {
      queryParams: { allowEdit: 1 },
      fragment: 'loading',
    });
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
