"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var gists = [
            { "title": "Paliwo", "author": "Eksplatacja", "price": "150" },
            { "title": "Klocki Hamulcowe", "author": "Układ Hamulcowy", "price": "240" },
            { "title": "Sprzęgło", "author": "Napęd", "price": "78" },
            { "title": "Opony", "author": "Ogumienie", "price": "650" },
            { "title": "Paliwo", "author": "Eskplatacja", "price": "180" },
            { "title": "Paliwo", "author": "Eksplatacja", "price": "100" }
        ];
        return { gists: gists };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map