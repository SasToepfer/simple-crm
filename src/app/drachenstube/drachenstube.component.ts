import { Component } from '@angular/core';
import { FoodMenuService } from '../services/food-menu.service';

@Component({
  selector: 'app-drachenstube',
  standalone: true,
  imports: [],
  templateUrl: './drachenstube.component.html',
  styleUrl: './drachenstube.component.scss'
})
export class DrachenstubeComponent {
  deliveryFee = 5;
  preSum = 0;
  finalSum = 0;
  orderShown = false;
  myFoods: (any)[] = [];
  myDrinks: (any)[] = [];
  myDesserts: (any)[] = [];
  myBasket: (any)[] = [];

  constructor(private foodService: FoodMenuService) {
    this.myFoods = foodService.myDishes;
    this.myDrinks = foodService.myDrinks;
    this.myDesserts = foodService.myDesserts;
  }


  addToBasket(food: any) {
    let nameFound = false;
    this.myBasket.forEach(element => {
      if (element.name === food.name) {
        element.basketAmount += 1;
        nameFound = true;
      }
    });
    if (!nameFound) {
      this.myBasket.push({ name: food.name, price: food.price, basketAmount: 1 });
    }

    this.checkPrice();
  }

  subtractFromBasket(food: any) {
    this.myBasket.forEach(element => {
      if (element.name === food.name) {
        if (element.basketAmount - 1 == 0) {
          this.removeFromBasket(food)
        } else {
          element.basketAmount -= 1;
        }
      }
    });

    this.checkPrice();
  }

  removeFromBasket(food: any) {
    this.myBasket.forEach((element, index) => {
      if (element.name === food.name) {
        this.myBasket.splice(index, 1);
      }
    });

    this.checkPrice();
  }

  checkPrice() {
    this.preSum = 0;
    if (this.myBasket) {
      this.myBasket.forEach(element => {
        this.preSum += element.basketAmount * element.price;
      });
    } else {
      this.preSum = 0;
    }

    if (this.preSum <= 50) {
      this.finalSum = this.preSum + this.deliveryFee;
    }else {
      this.finalSum = this.preSum;
    }
  }

  toggleOrderDialog() {
    this.myBasket = [];
    this.orderShown = !this.orderShown;
    this.checkPrice();
  }
  // function orderBasket() {
  //     if (myBasket.length != 0) {
  //         myBasket = [];
  //         renderBasket();
  //         writePayText()
  //         toggleOrderDialog("Danke für ihre Bestellung");
  //     } else {
  //         toggleOrderDialog("Bitte erst etwas in den Warenkorb legen");
  //     }
  // }

  // function toggleOrderDialog(text) {
  //     document.getElementById("order-overlay").classList.toggle("d-none");
  //     document.body.classList.toggle("o-hid");
  //     document.getElementById("dialog-text").innerHTML = text;
  //     hidePayText();
  // }

  // function stopBubbling(event) {
  //     event.stopPropagation();
  // }

  // function showBasketMobile() {
  //     document.getElementById("basket-wrapper").classList.toggle("basket-wrapper-closed");
  //     document.body.classList.toggle("o-hid");
  // }

}
