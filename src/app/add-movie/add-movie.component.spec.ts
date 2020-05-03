import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMovieComponent } from './add-movie.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';

describe('AddMovieComponent', () => {
  let component: AddMovieComponent;
  let fixture: ComponentFixture<AddMovieComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate');
  }
  let saveBtnEl: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMovieComponent ],
      providers: [
        {
            provide: Router,
            useClass: class { 
                navigate = jasmine.createSpy("navigate"); 
            }
        }]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieComponent);
    component = fixture.componentInstance;
    saveBtnEl = fixture.debugElement.nativeElement.querySelector('#saveMovie');
    fixture.detectChanges();

  });
  
  it('should navigate to /login when clickLogout is fired', () => {
    let router = fixture.debugElement.injector.get(Router);
    saveBtnEl.click()
    expect(router.navigate).toHaveBeenCalledWith(["/addMovie"]);
 })
  

  
});
