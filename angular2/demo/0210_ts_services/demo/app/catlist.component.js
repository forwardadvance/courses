System.register(['angular2/core', './cats.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cats_service_1;
    var CatListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cats_service_1_1) {
                cats_service_1 = cats_service_1_1;
            }],
        execute: function() {
            CatListComponent = (function () {
                function CatListComponent(cats) {
                    this.cats = cats.get();
                }
                CatListComponent = __decorate([
                    core_1.Component({
                        selector: 'cat-list',
                        template: "\n      <ul>\n        <li *ngFor=\"#cat of cats\">\n          {{cat.name}}\n        </li>\n      </ul>\n    ",
                        directives: [],
                        providers: [cats_service_1.CatsService]
                    }), 
                    __metadata('design:paramtypes', [cats_service_1.CatsService])
                ], CatListComponent);
                return CatListComponent;
            }());
            exports_1("CatListComponent", CatListComponent);
        }
    }
});
//# sourceMappingURL=catlist.component.js.map