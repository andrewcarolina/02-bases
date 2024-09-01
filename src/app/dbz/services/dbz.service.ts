import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {



  public characters:  Character[] = [
    {
       id: uuid(),
       name:'Krillin',
       power: 1000
    },
   {
        id: uuid(),
       name:'Goku',
       power: 9500
    },
   {
      id: uuid(),
       name:'Vegeta',
       power: 7500
    }];

  addCharacter(character:Character):void{
    //  const newCharacter : Character = {
    //   id:uuid(),
    //   name: character.name,
    //   power:character.power
    //  }
     const newCharacter : Character = { ...character   };
     this.characters.push(newCharacter);
  }

   deleteCharacter(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  // Encuentra el índice del carácter con el id proporcionado
  // const index = this.characters.findIndex(character => character.id === id);

  // Si se encuentra el carácter (el índice no es -1), lo elimina del array
  // if (index !== -1) {
  //   this.characters.splice(index, 1);
  // }
}


  constructor() { }

}
