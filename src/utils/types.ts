export interface Spell{
  index:string,
  name:string,
  level:number,
  url:string
}

// export interface Spells {
//   index: string;
//   name: string;
// }

export interface FavoriteSpellsState {
  favoriteSpells: Spell[];
}
