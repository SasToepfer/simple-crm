import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {
  myDishes = [
    {
      name: "Flammengebratener Drachenflügel",
      price: 17.99,
      description: "Saftig gegrillter Flügel vom Feuerhuhn, gewürzt mit rauchiger Drachengewürzmischung"
    },
    {
      name: "Goldene Greifenklauen",
      price: 14.49,
      description: "Knusprige Hähnchenstreifen in Honig-Senf-Marinade, serviert mit goldenem Honigdip"
    },
    {
      name: "Magische Mondpilz-Suppe",
      price: 9.99,
      description: "Cremige Suppe aus seltenen Mondpilzen, verfeinert mit Elfenkräutern und Trüffelöl"
    },
    {
      name: "Echsenjäger-Eintopf",
      price: 12.50,
      description: "Deftiger Eintopf mit Wurzelgemüse, magischen Bohnen und zartem Echsenfleisch"
    },
    {
      name: "Drachengold-Burger",
      price: 16.25,
      description: "Riesiger Burger mit Spezialkäse und feuriger Drachen-Chili-Sauce, im goldenen Dinkelbrötchen"
    },
    {
      name: "Phönix-Flammenpasta",
      price: 13.75,
      description: "Scharfe Pasta mit Peperoni, geräuchertem Käse und einem Hauch von Phönixasche"
    },
    {
      name: "Würzige Wolfswurst",
      price: 10.00,
      description: "Deftig gewürzte Wurst aus wilden Kräutern und würzigem Fleisch, perfekt für Abenteurer"
    }
  ]
  myDesserts = [
    {
      name: "Sternenstaub-Tarte",
      price: 6.99,
      description: "Eine funkelnde Tarte mit einer Füllung aus Mondbeeren und Sternfrucht, bestäubt mit essbarem Sternenstaub"
    },
    {
      name: "Drachenherz-Parfait",
      price: 7.50,
      description: "Ein cremiges Schichtdessert mit roten Beeren und scharfem Drachengemüse, serviert mit einer feurigen Sauce"
    },
    {
      name: "Elfenhain-Pudding",
      price: 5.25,
      description: "Ein samtiger Pudding aus Waldbeeren und Kräutern, garniert mit kandierten Blüten und einem Hauch von Honig"
    },
    {
      name: "Goldener Phönixkeks",
      price: 3.99,
      description: "Ein warmer, knuspriger Keks mit goldener Glasur und leichtem Ingwer-Aroma, entfacht das innere Feuer"
    },
    {
      name: "Dämmerglanz-Mousse",
      price: 6.75,
      description: "Eine fluffige Mousse aus mystischen Nachtfrüchten und einem Hauch von Dämmerlicht, serviert in einem Kristallschälchen"
    }
  ]
  myDrinks = [
    {
      name: "Kristallklarer Elfentrunk",
      price: 4.99,
      description: "Ein leuchtendes Getränk aus Elfenblüten und Sternenfrüchten, belebt die Sinne"
    },
    {
      name: "Drachenodem-Elixier",
      price: 5.99,
      description: "Ein feuriges, rubinrotes Getränk mit einer Spur von Chili und Zimt, erwärmt Körper und Geist"
    },
    {
      name: "Nebelmond-Trunk",
      price: 6.49,
      description: "Ein schimmerndes, silberblaues Getränk aus Mondbeeren und Nebelblatt, sorgt für klare Gedanken"
    },
    {
      name: "Phönixfunken-Limonade",
      price: 4.50,
      description: "Sprudelndes Getränk mit einem Hauch von Ingwer und exotischen Früchten, entfacht die Lebensgeister"
    },
    {
      name: "Hexenholz-Essenz",
      price: 5.25,
      description: "Ein tiefgrünes Kräutergetränk aus seltenen Waldkräutern und Moosbeeren, bringt Ruhe und Gelassenheit"
    }
  ]
  constructor() { }
}
