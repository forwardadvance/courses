System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CatsService;
    return {
        setters:[],
        execute: function() {
            CatsService = (function () {
                function CatsService() {
                    this.cats = [
                        { name: "Danger Moog" },
                        { name: "Pippa T. Floof" },
                        { name: "Sniff Weasel" }
                    ];
                }
                CatsService.prototype.get = function () {
                    return this.cats;
                };
                return CatsService;
            }());
            exports_1("CatsService", CatsService);
        }
    }
});
//# sourceMappingURL=cats.service.js.map