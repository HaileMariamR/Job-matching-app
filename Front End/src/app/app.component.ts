import { Component } from '@angular/core';
import { AuthService } from './AuthService/auth.service';
import { MediaChange, MediaObserver } from '@angular/flex-layout'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  
  constructor(private _auth: AuthService){}

  ngOnInit()
  {  }

}
