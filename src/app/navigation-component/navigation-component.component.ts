import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { MoviesService} from '../movies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation-component',
  templateUrl: './navigation-component.component.html',
  styleUrls: ['./navigation-component.component.scss']
})
export class NavigationComponentComponent implements OnInit {
  toggleNav : boolean = false;
  @Output() onSelect = new EventEmitter<boolean>();
  constructor(private moviesService:MoviesService, private router: Router) { }

  ngOnInit(): void {

  }
  toggleSideBar() {
    this.toggleNav = !this.toggleNav;
    this.moviesService.sendClickEvent();
   // this.onSelect.emit(this.toggleNav);
  }
  homeView(){
    this.router.navigate(['/home']);
  }
  

 
}
