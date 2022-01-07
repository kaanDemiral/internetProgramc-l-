import { Component, OnInit } from '@angular/core';
import { ogrenci } from 'src/app/models/ogrenciler';

@Component({
  selector: 'app-kayıtlar',
  templateUrl: './kayıtlar.component.html',
  styleUrls: ['./kayıtlar.component.css']
})
export class KayıtlarComponent implements OnInit {

  ogrenciler:ogrenci[]= [
    {
      "no": 180,
      "adsoyad": "Cihad Akmeşe",
      "mail": "Aenean@nec.arpa"
    },
    {
      "no": 174,
      "adsoyad": "Zeyşan İlk",
      "mail": "cursus@metus.vn"
    },
    {
      "no": 148,
      "adsoyad": "Kaviy Elmas kılıç",
      "mail": "auctor@in.mp"
    },
    {
      "no": 215,
      "adsoyad": "Kibariye Benli",
      "mail": "et@amet.int"
    },
    {
      "no": 201,
      "adsoyad": "Tuğaltay Atabay",
      "mail": "imperdiet@ac.mp"
    },
    {
      "no": 105,
      "adsoyad": "Zeki Kırımhan",
      "mail": "eget@at.bz"
    },
    {
      "no": 74,
      "adsoyad": "Hızlan Bürge",
      "mail": "urna@malesuada.fm"
    },
    {
      "no": 258,
      "adsoyad": "Mazmun Kara yarkıcı",
      "mail": "ut@arcu.gi"
    },
    {
      "no": 124,
      "adsoyad": "Altay Soylu",
      "mail": "dignissim@amet.uk"
    },
    {
      "no": 220,
      "adsoyad": "Şeyda Burçak",
      "mail": "id@massa.ht"
    },
    {
      "no": 283,
      "adsoyad": "Abgun İpek demirtaş",
      "mail": "In@Nunc.it"
    },
    {
      "no": 179,
      "adsoyad": "Tözüm Çiftlikçi",
      "mail": "Nulla@mattis.gw"
    },
    {
      "no": 165,
      "adsoyad": "Eribe Dolu",
      "mail": "vulputate@viverra.int"
    },
    
  ]
  
  
  constructor() { }

  ngOnInit() {
  }

}
