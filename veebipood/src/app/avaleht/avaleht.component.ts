import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit { // klassi lahti mineku loogeline sulg
  s6naline = "Nimi"; // toodete nimi, kategooria, pilt, kirjeldus    isikutel nimi, postiindeks, isikukood, tel nr 
  numbriline = 1312312; // toote hinnad, kogused      inimestel lapse arv
  kahendV22rtus = true; // tõde või väär ja kolmandat varianti pole.   toode on aktiivne, toode on laos, isik täisealine, sisselogitud

  constructor() { }

  ngOnInit(): void {
    console.log("Läksin avalehe lehele");
  }

  muudaS6nalineV22rtus() {
    this.s6naline = "Uus nimi";
  }

  muudaS6nalineV22rtusOriginaali() {
    this.s6naline = "Tagasi nimi";
  }

  muudaNumbrilineV22rtus() {
    this.numbriline = 3123;
  }

  muudaNumbrilineV22rtusOriginaali() {
    this.numbriline = 1312312;
  }

  muudaKahendV22rtus() {
    this.kahendV22rtus = false;
  }

  muudaKahendV22rtusOriginaali() {
    this.kahendV22rtus = true;
  }

  aktiivsuseMuutus() { // funktsiooni lahti mineku loogeline
    this.kahendV22rtus = !this.kahendV22rtus;
  } // funktsiooni kinni mineku loogeline sulg

  korrutaNumberKahega() {
    console.log(this.numbriline);
    this.numbriline = this.numbriline * 2;
    console.log(this.numbriline);
  }

  muudaK6ik() {
    this.kahendV22rtus = true;
    this.numbriline = this.numbriline + 3112312;
    this.s6naline = "Jutumärkide sees oleva uue väärtuse";
  }
  
} // klassi kinni mineku loogeline sulg

// salvestus
// 1. andmebaas - pilveteenusesse
// 2. brauseri vahemälu - chrome/firefox/edge
// 3. fail - logid


// tumesinine - selle klassiga seotud asjad
// helesinine - muutujad
//  kollane - funktsioon


// muutujate väärtused:
// oranž - sõnaline
// roheline - numbriline
// tumesinine - kahendväärtus