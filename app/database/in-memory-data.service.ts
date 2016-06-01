import { Book } from '../books/book';

export class InMemoryDataService {
	createDb() {
		let books = [

            { "title": "Paliwo", "author": "Eksplatacja", "price": "150" },
            { "title": "Klocki Hamulcowe", "author": "Układ Hamulcowy", "price": "240" },
            { "title": "Sprzęgło", "author": "Napęd", "price": "78" },
            { "title": "Opony", "author": "Ogumienie", "price": "650" },
            { "title": "Paliwo", "author": "Eskplatacja", "price": "180" },
            { "title": "Paliwo", "author": "Eksplatacja", "price": "100" }
		
		];

		return {books};
	}
}