import { Recipe } from './recipe';

enum Nutrition {Vegan, Vegetarisch, Glutenfrei}

export const RECIPES: Recipe[] = [
  { id: 11, name: 'Pizza' , img: 'pizza.jpg', duration: 25, level: 2, nutrition: ["vegan"]},
  { id: 12, name: 'Hackfleischröllchen', img: 'hackfleisch.jpg', duration: 60, level: 4, nutrition: ['fleisch', 'glutenfrei']},
  { id: 13, name: 'Zucchini-Nudeln', img: 'zucchini-nudeln.jpg', duration: 50, level: 5, nutrition: ["vegetarisch"]},
  { id: 14, name: 'Spiegelei', img: 'spiegelei.jpg', duration: 45, level: 3, nutrition: ["vegetarisch"]},
  { id: 15, name: 'Lachs mit Spargel', img: 'lachs.jpg', duration: 30, level: 1, nutrition: ["vegetarisch"]},
  { id: 16, name: 'Gefülltes Hähnchenfilet', img: 'haehnchen.jpg', duration: 20, level: 3, nutrition: ["fleisch"]},
  { id: 17, name: 'Flammkuchen', img: 'flammkuchen.jpg', duration: 10, level: 4, nutrition: ["vegan"]},
  { id: 18, name: 'Zucchinibote', img: 'zucchinibote.jpg', duration: 15, level: 5, nutrition: ["vegan"]},
  { id: 19, name: 'Rührei', img: 'ruehrei.jpg', duration: 5, level: 2, nutrition: ["vegan"]},
  { id: 20, name: 'Avocadosalat', img: 'salat.jpg', duration: 40, level: 3, nutrition: ["vegetarisch"]}
];
