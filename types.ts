type stat = { [key: string]: number };
type characteristics = {
  abilities: { description: string; name: string };
  gender: string[];
  height: number;
  weight: number;
};
type types = string[];
type pokemon = {
  imageUrl: string;
  types: types;
  weaknesses: string[];
  characteristics: characteristics;
  description: string;
  name: string;
  id: number;
  stats: Array<stat>;
};
