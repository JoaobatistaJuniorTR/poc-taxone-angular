import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
})
export class ExampleGridService {
  mockData = (): any => {
    // create some data for demo
    const data = [];
    const names = 'Paul,Alex,Phil,Bob,Dan,Jane,Erika,Zoe,Amy,Mary'.split(',');
    const products = 'Foo,Bar,Baz,Qux,Fum,Zot'.split(',');
    const productCount = products.length;
    const links = ['http://www.tr.com', 'http://www.reuters.tv', 'http://onesource.tr.com'];

    for (let i = 1; i <= 100; i += 1) {
      data.push({
        id: i,
        name: names[i % productCount],
        product: products[Math.floor(Math.random() * productCount)],
        age: Math.round(10 + Math.random() * 100),
        date: new Date(),
        quantity: Math.round(Math.random() * 1000),
        link: links[Math.round(Math.random() * (links.length - 1))],
      });
    }
    return data;
  };
}
