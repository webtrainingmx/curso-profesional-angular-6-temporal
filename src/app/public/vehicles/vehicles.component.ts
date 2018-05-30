import {Component, OnInit} from '@angular/core';
import {Vehicle} from './models/vehicle.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  vehicles: Array<Vehicle> = [{
    'id': 1,
    'manufacturer_id': 5,
    'model': 'GT-R',
    'year': 2018,
    'price': '250.00',
    'link': 'http:\/\/en.wikipedia.org\/wiki\/Nissan_Gt-r',
    'image': 'Nissan-GT-R.jpg',
    'rented': 1,
    'thumbnail': 'Nissan-GT-R-thumbnail.jpg',
    'created_at': '2018-05-24 18:22:20',
    'updated_at': '2018-05-24 18:22:20',
    'manufacturer': {
      'id': 5,
      'name': 'Nissan',
      'description': 'Nissan',
      'created_at': '2018-05-24 18:22:56',
      'updated_at': '2018-05-24 18:22:56'
    }
  }, {
    'id': 2,
    'manufacturer_id': 1,
    'model': 'M3',
    'year': 2017,
    'price': '150.00',
    'link': 'http:\/\/en.wikipedia.org\/wiki\/Bmw_m3',
    'image': 'BMW-M3.jpg',
    'rented': 0,
    'thumbnail': 'BMW-M3-thumbnail.jpg',
    'created_at': '2018-05-24 11:22:20',
    'updated_at': '2018-05-24 11:22:20',
    'manufacturer': {
      'id': 1,
      'name': 'BMW',
      'description': 'BMW.',
      'created_at': '2018-05-24 18:18:04',
      'updated_at': '2018-05-24 18:18:04'
    }
  }, {
    'id': 3,
    'manufacturer_id': 3,
    'model': 'TT',
    'year': 2017,
    'price': '220.00',
    'link': 'http:\/\/en.wikipedia.org\/wiki\/Audi_TT',
    'image': 'Audi-TT.jpg',
    'rented': 0,
    'thumbnail': 'Audi-TT-thumbnail.jpg',
    'created_at': '2018-04-24 11:22:20',
    'updated_at': '2018-04-24 11:22:20',
    'manufacturer': {
      'id': 3,
      'name': 'Audi',
      'description': 'Audi.',
      'created_at': '2018-05-24 18:19:39',
      'updated_at': '2018-05-24 18:19:39'
    }
  }, {
    'id': 4,
    'manufacturer_id': 3,
    'model': 'S5',
    'year': 2018,
    'price': '220.00',
    'link': 'http:\/\/en.wikipedia.org\/wiki\/Audi_S5#Audi_S5',
    'image': 'Audi-S5.jpg',
    'rented': 0,
    'thumbnail': 'Audi-S5-thumbnail.jpg',
    'created_at': '2018-04-30 11:22:20',
    'updated_at': '2018-04-30 11:22:20',
    'manufacturer': {
      'id': 3,
      'name': 'Audi',
      'description': 'Audi.',
      'created_at': '2018-05-24 18:19:39',
      'updated_at': '2018-05-24 18:19:39'
    }
  }, {
    'id': 5,
    'manufacturer_id': 4,
    'model': 'Civic Type-R',
    'year': 2018,
    'price': '98.00',
    'link': 'https:\/\/en.wikipedia.org\/wiki\/Honda_Civic_Type_R',
    'image': 'Civic-Type-R.jpg',
    'rented': 0,
    'thumbnail': 'Civic-Type-R-thumbnail.jpg',
    'created_at': '2018-05-30 11:22:20',
    'updated_at': '2018-05-30 11:22:20',
    'manufacturer': {
      'id': 4,
      'name': 'Honda',
      'description': 'Honda.',
      'created_at': '2018-05-24 18:20:00',
      'updated_at': '2018-05-24 18:20:00'
    }
  }, {
    'id': 6,
    'manufacturer_id': 2,
    'model': 'Camry',
    'year': 2018,
    'price': '86.00',
    'link': 'https:\/\/en.wikipedia.org\/wiki\/Toyota_Camry',
    'image': 'Camry.jpg',
    'rented': 1,
    'thumbnail': 'Camry-thumbnail.jpg',
    'created_at': '2018-05-15 11:22:20',
    'updated_at': '2018-05-15 11:22:20',
    'manufacturer': {
      'id': 2,
      'name': 'Toyota',
      'description': 'Toyota.',
      'created_at': '2018-05-24 18:19:11',
      'updated_at': '2018-05-24 18:19:11'
    }
  }, {
    'id': 7,
    'manufacturer_id': 2,
    'model': 'Prius',
    'year': 2017,
    'price': '78.00',
    'link': 'https:\/\/en.wikipedia.org\/wiki\/Toyota_Prius',
    'image': 'Prius.jpg',
    'rented': 1,
    'thumbnail': 'Prius-thumbnail.jpg',
    'created_at': '2018-05-18 11:22:20',
    'updated_at': '2018-05-18 11:22:20',
    'manufacturer': {
      'id': 2,
      'name': 'Toyota',
      'description': 'Toyota.',
      'created_at': '2018-05-24 18:19:11',
      'updated_at': '2018-05-24 18:19:11'
    }
  }, {
    'id': 8,
    'manufacturer_id': 6,
    'model': 'Spark',
    'year': 2017,
    'price': '48.00',
    'link': 'https:\/\/en.wikipedia.org\/wiki\/Chevrolet_Spark',
    'image': 'Spark.jpg',
    'rented': 0,
    'thumbnail': 'Spark-thumbnail.jpg',
    'created_at': '2018-05-21 11:22:20',
    'updated_at': '2018-05-21 11:22:20',
    'manufacturer': {
      'id': 6,
      'name': 'Chevrolet',
      'description': 'Chevrolet',
      'created_at': '2018-05-24 18:22:56',
      'updated_at': '2018-05-24 18:22:56'
    }
  }, {
    'id': 9,
    'manufacturer_id': 7,
    'model': 'XV',
    'year': 2017,
    'price': '90.00',
    'link': 'https:\/\/de.wikipedia.org\/wiki\/Subaru_XV',
    'image': 'XV.jpg',
    'rented': 0,
    'thumbnail': 'XV-thumbnail.jpg',
    'created_at': '2018-05-21 11:22:20',
    'updated_at': '2018-05-21 11:22:20',
    'manufacturer': {
      'id': 7,
      'name': 'Subaru',
      'description': 'Subaru',
      'created_at': '2018-05-24 18:22:56',
      'updated_at': '2018-05-24 18:22:56'
    }
  }, {
    'id': 10,
    'manufacturer_id': 7,
    'model': 'Impreza',
    'year': 2017,
    'price': '60.00',
    'link': 'https:\/\/en.wikipedia.org\/wiki\/Subaru_Impreza',
    'image': 'Impreza.jpg',
    'rented': 0,
    'thumbnail': 'Impreza-thumbnail.jpg',
    'created_at': '2018-05-21 11:22:20',
    'updated_at': '2018-05-21 11:22:20',
    'manufacturer': {
      'id': 7,
      'name': 'Subaru',
      'description': 'Subaru',
      'created_at': '2018-05-24 18:22:56',
      'updated_at': '2018-05-24 18:22:56'
    }
  }, {
    'id': 11,
    'manufacturer_id': 8,
    'model': 'Focus',
    'year': 205,
    'price': '54.00',
    'link': 'https:\/\/en.wikipedia.org\/wiki\/Ford_Focus',
    'image': 'Focus.jpg',
    'rented': 0,
    'thumbnail': 'Focus-thumbnail.jpg',
    'created_at': '2018-05-21 11:22:20',
    'updated_at': '2018-05-21 11:22:20',
    'manufacturer': {
      'id': 8,
      'name': 'Ford',
      'description': 'Ford',
      'created_at': '2018-05-24 18:22:56',
      'updated_at': '2018-05-24 18:22:56'
    }
  }, {
    'id': 12,
    'manufacturer_id': 2,
    'model': 'Rav 4',
    'year': 2017,
    'price': '88.00',
    'link': 'https:\/\/en.wikipedia.org\/wiki\/Toyota_RAV4',
    'image': 'Rav4.jpg',
    'rented': 0,
    'thumbnail': 'Rav4-thumbnail.jpg',
    'created_at': '2018-05-18 11:22:20',
    'updated_at': '2018-05-18 11:22:20',
    'manufacturer': {
      'id': 2,
      'name': 'Toyota',
      'description': 'Toyota.',
      'created_at': '2018-05-24 18:19:11',
      'updated_at': '2018-05-24 18:19:11'
    }
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
