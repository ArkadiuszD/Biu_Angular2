"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var books = [
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
        return { books: books };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map