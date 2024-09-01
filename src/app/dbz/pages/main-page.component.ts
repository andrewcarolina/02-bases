import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dgz-main-page',
  templateUrl: './main-page.component.html'

})

export class MainPageComponent implements OnInit {


  constructor( private dbzService: DbzService) {}

  get characters(): Character[]{
          return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string):void {
      this.dbzService.deleteCharacter(id);
  }

  onNewCharacter(character: Character):void {
      this.dbzService.addCharacter(character);
  }

  ngOnInit() { }
}
