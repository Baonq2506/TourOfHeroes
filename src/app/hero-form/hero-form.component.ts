import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

    constructor() { }
    powers = ['Really Smart','Super flexible','Super Hot','Weather Changer'];
    model = new Hero(18,'BaoBao',this.powers[0],'Chuck OverStreet');
    submitted = false;

    onSubmit(){
        this.submitted=true;
    }
    ngOnInit(): void {
    }
    newHero() {
        this.model = new Hero(42, '', '');
    }


}
