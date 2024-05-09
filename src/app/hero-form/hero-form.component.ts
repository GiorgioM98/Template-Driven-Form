import { Component } from '@angular/core';
import { Hero } from '../hero';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {
  heroForm!: NgModel;

  powers= ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model= new Hero (18, '', "", "");

  submitted = false;

  onSubmit() {
     this.submitted = true;
    }

    newHero(){
      this.model= new Hero (42, '', '','')
    }


}
