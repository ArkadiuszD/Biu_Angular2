import { Gist } from '../gists/gist';

export class InMemoryDataService {
	createDb() {
		let gists = [

            { "opis": "Paliwo", "kategoria": "Eksplatacja", "price": "150" },
            { "opis": "Klocki Hamulcowe", "kategoria": "Układ Hamulcowy", "price": "240" },
            { "opis": "Sprzęgło", "kategoria": "Napęd", "price": "78" },
            { "opis": "Opony", "kategoria": "Ogumienie", "price": "650" },
            { "opis": "Paliwo", "kategoria": "Eskplatacja", "price": "180" },
            { "opis": "Paliwo", "kategoria": "Eksplatacja", "price": "100" },
            { "opis": "Paliwo", "kategoria": "Eksplatacja", "price": "150" },
            { "opis": "Klocki Hamulcowe", "kategoria": "Układ Hamulcowy", "price": "240" },
            { "opis": "Sprzęgło", "kategoria": "Napęd", "price": "78" },
            { "opis": "Opony", "kategoria": "Ogumienie", "price": "650" },
            { "opis": "Paliwo", "kategoria": "Eskplatacja", "price": "180" },
            { "opis": "Paliwo", "kategoria": "Eksplatacja", "price": "100" },
            { "opis": "Paliwo", "kategoria": "Eksplatacja", "price": "150" },
            { "opis": "Klocki Hamulcowe", "kategoria": "Układ Hamulcowy", "price": "240" },
            { "opis": "Sprzęgło", "kategoria": "Napęd", "price": "78" },
            { "opis": "Opony", "kategoria": "Ogumienie", "price": "650" },
            { "opis": "Paliwo", "kategoria": "Eskplatacja", "price": "180" },
            { "opis": "Paliwo", "kategoria": "Eksplatacja", "price": "100" },
            { "opis": "Paliwo", "kategoria": "Eksplatacja", "price": "150" },
            { "opis": "Klocki Hamulcowe", "kategoria": "Układ Hamulcowy", "price": "240" },
            { "opis": "Sprzęgło", "kategoria": "Napęd", "price": "78" },
            { "opis": "Opony", "kategoria": "Ogumienie", "price": "650" },
            { "opis": "Paliwo", "kategoria": "Eskplatacja", "price": "180" },
            { "opis": "Paliwo", "kategoria": "Eksplatacja", "price": "100" },
            { "opis": "Paliwo", "kategoria": "Eksplatacja", "price": "150" },
            { "opis": "Klocki Hamulcowe", "kategoria": "Układ Hamulcowy", "price": "240" },
            { "opis": "Sprzęgło", "kategoria": "Napęd", "price": "78" },
            { "opis": "Opony", "kategoria": "Ogumienie", "price": "650" },
            { "opis": "Paliwo", "kategoria": "Eskplatacja", "price": "180" },
            { "opis": "Paliwo", "kategoria": "Eksplatacja", "price": "100" }

		
		];

		return {gists};
	}
}