import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit {
  total: number;
  dealerTotal: number;
  gameover: boolean;
  message: string;
  showMePorn: boolean;

  constructor() { }

  ngOnInit(): void {
    this.total = 0;
    this.dealerTotal = 0;
    this.gameover = false;
    this.showMePorn = false;
  }

  hitMeDaddy()
  {
    this.total += this.getCard(1, 11);
    if(this.total > 21) {
      this.gameover = true;
      this.message = "YOU LOSE BITCH!";
    }
    else if (this.total === 21)
    {
      this.standErect()
    }
  }

  standErect() {
    while(this.dealerTotal < 17)
    {
      this.dealerTotal += this.getCard(1, 11);
    }
    this.gameover = true;

    if (this.dealerTotal > 21)
    {
      this.message = "DADDY BUSTY";
      this.showMePorn = true;
    }
    else if(this.total === this.dealerTotal)
    {
      this.message = "TIE GAME";
    }
    else if (this.total > this.dealerTotal)
    {
      this.message = "YOU WIN PORN";
      this.showMePorn = true;
    }
    else if (this.total < this.dealerTotal)
    {
      this.message = "DADDY WINS";
    }
  }

  resetGame() {
    this.dealerTotal = 0;
    this.total = 0;
    this.gameover = false;
    this.message = "";
    this.showMePorn = false;
  }

  getCard(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
}
