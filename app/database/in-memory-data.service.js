"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var books = [
            { "title": "Paliwo", "kategoria": "Eksplatacja", "price": "150" },
            { "title": "Klocki Hamulcowe", "kategoria": "Układ Hamulcowy", "price": "240" },
            { "title": "Sprzęgło", "kategoria": "Napęd", "price": "78" },
            { "title": "Opony", "kategoria": "Ogumienie", "price": "650" },
            { "title": "Paliwo", "kategoria": "Eskplatacja", "price": "180" },
            { "title": "Paliwo", "kategoria": "Eksplatacja", "price": "100" }
        ];
        return { books: books };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map