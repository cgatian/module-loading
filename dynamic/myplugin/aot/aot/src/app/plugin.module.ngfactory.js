/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from '@angular/core';
import * as import1 from '../../../src/app/plugin.module';
import * as import2 from './plugin.component.ngfactory';
var PluginModuleInjector = (function (_super) {
    __extends(PluginModuleInjector, _super);
    function PluginModuleInjector(parent) {
        return _super.call(this, parent, [import2.PluginComponentNgFactory], []) || this;
    }
    PluginModuleInjector.prototype.createInternal = function () {
        this._PluginModule_0 = new import1.PluginModule();
        return this._PluginModule_0;
    };
    PluginModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import1.PluginModule)) {
            return this._PluginModule_0;
        }
        return notFoundResult;
    };
    PluginModuleInjector.prototype.destroyInternal = function () {
    };
    return PluginModuleInjector;
}(import0.ɵNgModuleInjector));
export var PluginModuleNgFactory = new import0.NgModuleFactory(PluginModuleInjector, import1.PluginModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2ZhYmlhbndpbGVzL0RvY3VtZW50cy9tb2R1bGUtbG9hZGluZy9keW5hbWljL215cGx1Z2luL3NyYy9hcHAvcGx1Z2luLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9mYWJpYW53aWxlcy9Eb2N1bWVudHMvbW9kdWxlLWxvYWRpbmcvZHluYW1pYy9teXBsdWdpbi9zcmMvYXBwL3BsdWdpbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
