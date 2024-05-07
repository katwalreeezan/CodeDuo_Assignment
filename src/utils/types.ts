export interface Spell {
  index: string;
  name: string;
  level: number;
  url: string;
}

export interface SpellsResponse {
  count: number;
  results: Spell[];
}

export interface IndividualSpell{
    index: string;
    name: string;
    desc: string[];
    higher_level?: string[];
    range: string;
    components: string[];
    material: string;
    ritual: boolean;
    duration: string;
    concentration: boolean;
    casting_time: string;
    level: number;
    attack_type: string;
    damage: {
      damage_type: {
        index: string;
        name: string;
        url: string;
      };
      damage_at_slot_level: {
        [level: string]: string;
      };
    };
    school: {
      index: string;
      name: string;
      url: string;
    };
    classes: {
      index: string;
      name: string;
      url: string;
    }[];
    subclasses?: {
      index: string;
      name: string;
      url: string;
    }[];
    url: string;
  
}