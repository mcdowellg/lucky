(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n\n<!-- <app-block-details [searchString]=\"search\"></app-block-details> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontEnd';
        this.search = '';
    }
    AppComponent.prototype.searchValues = function (search) {
        this.search = search;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _choose_people_machines_choose_people_machines_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./choose-people-machines/choose-people-machines.component */ "./src/app/choose-people-machines/choose-people-machines.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _gantt_chart_gantt_chart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./gantt-chart/gantt-chart.component */ "./src/app/gantt-chart/gantt-chart.component.ts");
/* harmony import */ var _map_chart_map_chart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./map-chart/map-chart.component */ "./src/app/map-chart/map-chart.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _block_details_block_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./block-details/block-details.component */ "./src/app/block-details/block-details.component.ts");
/* harmony import */ var _block_details_block_drag_block_drag_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./block-details/block-drag/block-drag.component */ "./src/app/block-details/block-drag/block-drag.component.ts");
/* harmony import */ var _block_details_task_input_task_input_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./block-details/task-input/task-input.component */ "./src/app/block-details/task-input/task-input.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _search_pipe_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./search-pipe.pipe */ "./src/app/search-pipe.pipe.ts");
/* harmony import */ var _tasks_view_tasks_view_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tasks-view/tasks-view.component */ "./src/app/tasks-view/tasks-view.component.ts");








// import { FullCalenderComponent } from './full-calender/full-calender.component';
// import { FullCalendarModule } from 'ng-fullcalendar'
 // for FullCalendar!







// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                // FullCalenderComponent,
                _choose_people_machines_choose_people_machines_component__WEBPACK_IMPORTED_MODULE_10__["ChoosePeopleMachinesComponent"],
                _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_16__["DataTableComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                _gantt_chart_gantt_chart_component__WEBPACK_IMPORTED_MODULE_19__["GanttChartComponent"],
                _map_chart_map_chart_component__WEBPACK_IMPORTED_MODULE_20__["MapChartComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_21__["CalendarComponent"],
                _block_details_block_details_component__WEBPACK_IMPORTED_MODULE_22__["BlockDetailsComponent"],
                _block_details_block_drag_block_drag_component__WEBPACK_IMPORTED_MODULE_23__["BlockDragComponent"],
                _block_details_task_input_task_input_component__WEBPACK_IMPORTED_MODULE_24__["TaskInputComponent"],
                _search_pipe_pipe__WEBPACK_IMPORTED_MODULE_26__["SearchPipePipe"],
                _tasks_view_tasks_view_component__WEBPACK_IMPORTED_MODULE_27__["TasksViewComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: "full-calendar",
                        component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_21__["CalendarComponent"]
                    },
                    {
                        path: "block-details",
                        component: _block_details_block_details_component__WEBPACK_IMPORTED_MODULE_22__["BlockDetailsComponent"]
                    },
                    {
                        path: "task-view",
                        component: _tasks_view_tasks_view_component__WEBPACK_IMPORTED_MODULE_27__["TasksViewComponent"]
                    },
                    {
                        path: "data-table",
                        component: _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_16__["DataTableComponent"]
                    },
                    {
                        path: "gantt-chart",
                        component: _gantt_chart_gantt_chart_component__WEBPACK_IMPORTED_MODULE_19__["GanttChartComponent"]
                    },
                    {
                        path: "map-chart",
                        component: _map_chart_map_chart_component__WEBPACK_IMPORTED_MODULE_20__["MapChartComponent"]
                    }
                ]),
                angular_datatables__WEBPACK_IMPORTED_MODULE_18__["DataTablesModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_8__["FullCalendarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [_choose_people_machines_choose_people_machines_component__WEBPACK_IMPORTED_MODULE_10__["ChoosePeopleMachinesComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/block-details/block-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/block-details/block-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{searchData}}\n<div class=\"schedule-loader\" [hidden]=\"scheduleComponentReady\">\n \n  <mat-progress-spinner [diameter]=\"80\" [mode]=\"'indeterminate'\">\n  </mat-progress-spinner>\n\n</div>\n\n      <span *ngIf=\"scheduleComponentReady\">\n        <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n\n            <div class='parent inline-flex-parent'>\n                <div class='child'>\n\n                        <label>\n                          Task Name:\n                          <input type=\"text\" formControlName=\"taskName\" required>\n                        </label>\n                        <div formGroupName=\"rates\">\n                          <h3>Rates</h3>\n                          <label>\n                            Speed: (Kms/Hr)\n                            <input type=\"text\" formControlName=\"speed\">\n                          </label>\n                          <label>\n                            Number of Resources:\n                            <input type=\"text\" formControlName=\"resources\">\n                          </label>\n                          <label>\n                            Hours Worked:\n                            <input type=\"text\" formControlName=\"hoursWorked\">\n                          </label>\n                          <label>\n                            Start Time:\n                            <input type=\"text\" formControlName=\"start\">\n                          </label>\n                          <label>\n                            End Time:\n                            <input type=\"text\" formControlName=\"end\">\n                          </label>\n                        </div>\n                        \n\n                      \n                      <hr>\n                      <p>\n                        Form Value: {{ profileForm.value | json }}\n                      </p>\n                      <p>\n                        Form Status: {{ profileForm.status }}\n                      </p>\n                      <p>\n                        <button type=\"button\" (click)=\"updateProfile()\">Generic Task</button>\n                      </p> \n\n                </div>\n          \n                <div class='child'>\n                      <span cdkDropListGroup>\n                          <div class=\"example-container\">\n                            <h3>Scheduled Tasks</h3>\n                        \n                            <div\n                              cdkDropList\n                              [cdkDropListData]=\"scheduledTasksFiltered\"\n                              class=\"example-list\"\n                              (cdkDropListDropped)=\"drop($event)\">\n                              <div class=\"example-box\" *ngFor=\"let item of scheduledTasksFiltered\" cdkDrag>{{item.UniqID}}</div>\n                            </div>\n                          </div>\n                        \n                          <div class=\"example-container\">\n                            <h3>Ordered Tasks</h3>\n                        \n                            <div\n                              cdkDropList\n                              [cdkDropListData]=\"allocatedTasks\"\n                              class=\"example-list\"\n                              (cdkDropListDropped)=\"drop($event)\">\n                              <div class=\"example-box\" *ngFor=\"let item of allocatedTasks\" cdkDrag>{{item.UniqID}}</div>\n                            </div>\n                          </div>\n                        </span>\n\n                </div>\n\n\n          <button type=\"submit\" [disabled]=\"!profileForm.valid || !(allocatedTasks.length>0)\">Submit</button>\n\n            </div>\n\n        </form>\n\n        </span> \n          \n          \n            \n          \n"

/***/ }),

/***/ "./src/app/block-details/block-details.component.scss":
/*!************************************************************!*\
  !*** ./src/app/block-details/block-details.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".schedule-loader {\n  position: relative;\n  margin-left: 40%;\n  margin-right: 60%;\n  margin-top: 15%; }\n\n.mat-progress-spinner::ng-deep circle {\n  stroke: #6c8fd1; }\n\n.inline-flex-parent {\n  display: inline-flex; }\n\n.example-container {\n  width: 300px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top; }\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block; }\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px; }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.example-box:last-child {\n  border: none; }\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n:host {\n  display: flex;\n  flex-direction: column;\n  padding-top: 24px;\n  padding-left: 20px; }\n\nlabel {\n  display: block;\n  width: 6em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold; }\n\nbody {\n  margin: 2em; }\n\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em; }\n\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; }\n\nbutton:hover {\n  background-color: #cfd8dc; }\n\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2stZGV0YWlscy9DOlxcVXNlcnNcXG1jZG93ZWxnXFxEb2N1bWVudHNcXEFuZ3VsYXJcXGZyb250RW5kL3NyY1xcYXBwXFxibG9jay1kZXRhaWxzXFxibG9jay1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxnQkFBMEIsRUFDM0I7O0FBR0Q7RUFDSSxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixzQkFBcUI7RUFDckIsc0JBQXFCO0VBQ3JCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLHVCQUFzQjtFQUN0QixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsZUFBYyxFQUNmOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLDhCQUE2QjtFQUM3QiwyQkFBMEI7RUFDMUIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixzSEFFOEMsRUFDL0M7O0FBRUQ7RUFDRSxXQUFVLEVBQ1g7O0FBRUQ7RUFDRSwrREFBc0Q7RUFBdEQsdURBQXNEO0VBQXRELDJHQUFzRCxFQUN2RDs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLCtEQUFzRDtFQUF0RCx1REFBc0Q7RUFBdEQsMkdBQXNELEVBQ3ZEOztBQUVEO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsZUFBYztFQUNkLFdBQVU7RUFDVixlQUFjO0VBQ2QsZUFBYztFQUNkLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxlQUFjO0VBQ2QsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHVCQUFzQjtFQUN0QixZQUFXO0VBQ1gsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvYmxvY2stZGV0YWlscy9ibG9jay1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjaGVkdWxlLWxvYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2MCU7XHJcbiAgbWFyZ2luLXRvcDogMTUlOyBcclxufVxyXG5cclxuLm1hdC1wcm9ncmVzcy1zcGlubmVyOjpuZy1kZWVwIGNpcmNsZSB7XHJcbiAgc3Ryb2tlOiByZ2IoMTA4LCAxNDMsIDIwOSk7XHJcbn1cclxuXHJcblxyXG4uaW5saW5lLWZsZXgtcGFyZW50IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAyNXB4IDI1cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWxpc3Qge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYm94IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gIH1cclxuICBcclxuICA6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA2ZW07XHJcbiAgICBtYXJnaW46IC41ZW0gMDtcclxuICAgIGNvbG9yOiAjNjA3RDhCO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICBib2R5IHtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gIH1cclxuICBcclxuICBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAuNGVtO1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBjb2xvcjogI2NjYztcclxuICAgIGN1cnNvcjogYXV0bztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/block-details/block-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/block-details/block-details.component.ts ***!
  \**********************************************************/
/*! exports provided: BlockDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockDetailsComponent", function() { return BlockDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events.service */ "./src/app/events.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _search_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search-service.service */ "./src/app/search-service.service.ts");







var BlockDetailsComponent = /** @class */ (function () {
    function BlockDetailsComponent(eventservice, fb, search) {
        this.eventservice = eventservice;
        this.fb = fb;
        this.search = search;
        this.details = [];
        this.row_kms = [];
        this.total_vines = [];
        this.row_numbers = [];
        this.profileForm = this.fb.group({
            taskName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            rates: this.fb.group({
                speed: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(20)]],
                resources: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(200)]],
                hoursWorked: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(20)]],
                start: [''],
                end: ['']
            })
        });
        this.scheduledTasks = [];
        this.scheduledTasksFiltered = [];
        this.allocatedTasks = [];
        this.calculations = [];
    }
    ;
    BlockDetailsComponent.prototype.updateProfile = function () {
        this.profileForm.patchValue({
            taskName: 'Generic Task',
            rates: {
                speed: 7.5,
                resources: 8,
                hoursWorked: 9,
                start: 8,
                end: 16
            }
        });
        this.change = false;
    };
    BlockDetailsComponent.prototype.onSubmit = function () {
        // Combine input data to create a group task that can then be imported into the calendar script.
        // Get row kms, turns and vines
        var row_kms = Number(this.calculations.reduce(function (accumulator, currentValue, currentIndex, array) {
            return accumulator + Number(currentValue['Row_KM']);
        }, 0));
        var row_numbers = this.calculations.reduce(function (accumulator, currentValue, currentIndex, array) {
            return accumulator + Number(currentValue['Row_Numbers']);
        }, 0);
        var total_vines = this.calculations.reduce(function (accumulator, currentValue, currentIndex, array) {
            return accumulator + Number(currentValue['Total_Vines']);
        }, 0);
        // Now calculate duration
        // Duration equals (distance/speed)/machines
        var speed = Number(this.profileForm.value.rates.speed);
        var resources = Number(this.profileForm.value.rates.resources);
        var hoursWorked = Number(this.profileForm.value.rates.hoursWorked);
        var start = Number(this.profileForm.value.rates.start);
        var end = Number(this.profileForm.value.rates.end);
        console.warn(resources);
        var duration = (row_kms / speed) / resources;
        console.warn(this.calculations);
        this.details = [this.profileForm.value, this.allocatedTasks, duration, row_kms, row_numbers, total_vines, hoursWorked, start, end];
        console.log(this.details);
        // Now want to post this data to the Tasks model in DB
        console.log(this.change);
        if (this.change = true) {
            this.eventservice.postTaskData({
                "Tasks": this.details
            })
                .subscribe(function (res) {
                console.log("posted task");
            }, function (err) {
                console.log("Error occured");
            });
        }
    };
    BlockDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleComponentReady = false;
        this.search.data.subscribe(function (data) {
            console.log("1: is anything coming into here?: " + data);
            _this.searchData = data;
            var splitData = data.split(' ');
            console.log(splitData);
            console.log(_this.scheduledTasksFiltered);
            // Also want to update scheduled tasks to show only filtered search data
            if (splitData[1])
                _this.scheduledTasksFiltered = _this.scheduledTasksFiltered.filter(function (input) { return (input.UniqID.toLowerCase().includes(splitData[0].toLowerCase()) && input.UniqID.toLowerCase().includes(splitData[1].toLowerCase())); });
            // (input.UniqID.toLowerCase().includes(splitData[0].toLowerCase()) && input.UniqID.toLowerCase().includes(splitData[1].toLowerCase()))) 
            else
                _this.scheduledTasksFiltered = _this.scheduledTasks.filter(function (input) { return input.UniqID.toLowerCase().includes(splitData[0].toLowerCase()); });
            console.log(_this.scheduledTasksFiltered);
        });
        this.scheduledTasks = this.eventservice.getListData()
            .subscribe(function (res) {
            console.log(res);
            var arr = [];
            for (var prop in res) {
                // console.log(arr)
                arr.push(res[prop]);
            }
            console.log("find new listed jobs");
            _this.scheduledTasks = arr;
            _this.scheduledTasksFiltered = _this.scheduledTasks;
            // console.log(this.scheduledTasksFiltered)
            _this.scheduleComponentReady = true;
        }, function (err) {
            console.log("Error occured in loading lists");
        });
    };
    BlockDetailsComponent.prototype.drop = function (event) {
        console.log(event);
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            console.log(event);
        }
        else if (event.container.id == "cdk-drop-list-0") {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            console.warn("When dropped from bottom to top");
            console.log(event.previousContainer.data);
            console.log(event.container.data);
            console.log(event.previousIndex);
            console.log(event.currentIndex);
            // this.allocatedTasks = event.container.data;
            this.scheduledTasksFiltered = event.container.data;
            this.allocatedTasks = event.previousContainer.data;
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            console.warn("When dropped from top to bottom");
            console.log(event.previousContainer.data);
            console.log(event.container.data);
            console.log(event.previousIndex);
            console.log(event.currentIndex);
            this.allocatedTasks = event.container.data;
            this.scheduledTasksFiltered = event.previousContainer.data;
        }
        this.scheduledTasks = this.scheduledTasks.slice();
        this.scheduledTasksFiltered = this.scheduledTasksFiltered.slice();
        console.log(this.allocatedTasks);
        console.log(this.scheduledTasks);
        // here we need to undertake the calculations before it is submitted to the calendar schedule
        this.calculations = this.allocatedTasks; // find or map or filter to get values for RowKMs and Row Numbers for turn time, make calculations and provide back to this.details!
    };
    BlockDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-details',
            template: __webpack_require__(/*! ./block-details.component.html */ "./src/app/block-details/block-details.component.html"),
            styles: [__webpack_require__(/*! ./block-details.component.scss */ "./src/app/block-details/block-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _search_service_service__WEBPACK_IMPORTED_MODULE_5__["SearchServiceService"]])
    ], BlockDetailsComponent);
    return BlockDetailsComponent;
}());



/***/ }),

/***/ "./src/app/block-details/block-drag/block-drag.component.html":
/*!********************************************************************!*\
  !*** ./src/app/block-details/block-drag/block-drag.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div cdkDropListGroup>\n    <div class=\"example-container\">\n      <h3>Scheduled Tasks</h3>\n  \n      <div\n        cdkDropList\n        [cdkDropListData]=\"scheduledTasks\"\n        class=\"example-list\"\n        (cdkDropListDropped)=\"drop($event)\">\n        <div class=\"example-box\" *ngFor=\"let item of scheduledTasks\" cdkDrag>{{item.UniqID}}</div>\n      </div>\n    </div>\n  \n    <div class=\"example-container\">\n      <h3>Ordered Tasks</h3>\n  \n      <div\n        cdkDropList\n        [cdkDropListData]=\"allocatedTasks\"\n        class=\"example-list\"\n        (cdkDropListDropped)=\"drop($event)\">\n        <div class=\"example-box\" *ngFor=\"let item of allocatedTasks\" cdkDrag>{{item.UniqID}}</div>\n      </div>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/block-details/block-drag/block-drag.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/block-details/block-drag/block-drag.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 300px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top; }\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block; }\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px; }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.example-box:last-child {\n  border: none; }\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2stZGV0YWlscy9ibG9jay1kcmFnL0M6XFxVc2Vyc1xcbWNkb3dlbGdcXERvY3VtZW50c1xcQW5ndWxhclxcZnJvbnRFbmQvc3JjXFxhcHBcXGJsb2NrLWRldGFpbHNcXGJsb2NrLWRyYWdcXGJsb2NrLWRyYWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixzQkFBcUI7RUFDckIsc0JBQXFCO0VBQ3JCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLHVCQUFzQjtFQUN0QixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsZUFBYyxFQUNmOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLDhCQUE2QjtFQUM3QiwyQkFBMEI7RUFDMUIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixzSEFFOEMsRUFDL0M7O0FBRUQ7RUFDRSxXQUFVLEVBQ1g7O0FBRUQ7RUFDRSwrREFBc0Q7RUFBdEQsdURBQXNEO0VBQXRELDJHQUFzRCxFQUN2RDs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLCtEQUFzRDtFQUF0RCx1REFBc0Q7RUFBdEQsMkdBQXNELEVBQ3ZEIiwiZmlsZSI6InNyYy9hcHAvYmxvY2stZGV0YWlscy9ibG9jay1kcmFnL2Jsb2NrLWRyYWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtbGlzdCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1ib3gge1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/block-details/block-drag/block-drag.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/block-details/block-drag/block-drag.component.ts ***!
  \******************************************************************/
/*! exports provided: BlockDragComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockDragComponent", function() { return BlockDragComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../events.service */ "./src/app/events.service.ts");




/**
 * @title Drag&Drop connected sorting group
 */
var BlockDragComponent = /** @class */ (function () {
    function BlockDragComponent(eventservice) {
        this.eventservice = eventservice;
        this.scheduledTasks = [];
        this.allocatedTasks = [];
    }
    ;
    BlockDragComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduledTasks = this.eventservice.getListData()
            .subscribe(function (res) {
            console.log(res);
            var arr = [];
            for (var prop in res) {
                console.log(arr);
                arr.push(res[prop]);
            }
            console.log("find new listed jobs");
            _this.scheduledTasks = arr;
            console.log(arr);
        }, function (err) {
            console.log("Error occured in loading lists");
        });
    };
    BlockDragComponent.prototype.drop = function (event) {
        console.log(event);
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.allocatedTasks = event.container.data;
    };
    BlockDragComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-drag',
            template: __webpack_require__(/*! ./block-drag.component.html */ "./src/app/block-details/block-drag/block-drag.component.html"),
            styles: [__webpack_require__(/*! ./block-drag.component.scss */ "./src/app/block-details/block-drag/block-drag.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]])
    ], BlockDragComponent);
    return BlockDragComponent;
}());



/***/ }),

/***/ "./src/app/block-details/task-input/task-input.component.html":
/*!********************************************************************!*\
  !*** ./src/app/block-details/task-input/task-input.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n    <label>\n      Task Name:\n      <input type=\"text\" formControlName=\"taskName\" required>\n    </label>\n  \n    <div formGroupName=\"rates\">\n      <h3>Rates</h3>\n  \n      <label>\n        Speed: (Kms/Hr)\n        <input type=\"text\" formControlName=\"speed\">\n      </label>\n  \n      <label>\n        Number of Resources:\n        <input type=\"text\" formControlName=\"resources\">\n      </label>\n      \n    </div>\n  \n  \n    <button type=\"submit\" [disabled]=\"!profileForm.valid\">Submit</button>\n  </form>\n  \n  <hr>\n  \n  \n  <p>\n    Form Value: {{ profileForm.value | json }}\n  </p>\n  \n  \n  <p>\n    Form Status: {{ profileForm.status }}\n  </p>\n  \n  <p>\n    <button (click)=\"updateProfile()\">Generic Task</button>\n  </p>\n  "

/***/ }),

/***/ "./src/app/block-details/task-input/task-input.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/block-details/task-input/task-input.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  padding-top: 24px;\n  padding-left: 20px; }\n\nlabel {\n  display: block;\n  width: 6em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold; }\n\nbody {\n  margin: 2em; }\n\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em; }\n\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; }\n\nbutton:hover {\n  background-color: #cfd8dc; }\n\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2stZGV0YWlscy90YXNrLWlucHV0L0M6XFxVc2Vyc1xcbWNkb3dlbGdcXERvY3VtZW50c1xcQW5ndWxhclxcZnJvbnRFbmQvc3JjXFxhcHBcXGJsb2NrLWRldGFpbHNcXHRhc2staW5wdXRcXHRhc2staW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsV0FBVTtFQUNWLGVBQWM7RUFDZCxlQUFjO0VBQ2Qsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsWUFBVztFQUNYLGVBQWM7RUFDZCxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsdUJBQXNCO0VBQ3RCLFlBQVc7RUFDWCxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9ibG9jay1kZXRhaWxzL3Rhc2staW5wdXQvdGFzay1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDZlbTtcclxuICAgIG1hcmdpbjogLjVlbSAwO1xyXG4gICAgY29sb3I6ICM2MDdEOEI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIGJvZHkge1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0IHtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC40ZW07XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG4gIH1cclxuICBcclxuICBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/block-details/task-input/task-input.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/block-details/task-input/task-input.component.ts ***!
  \******************************************************************/
/*! exports provided: TaskInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskInputComponent", function() { return TaskInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var TaskInputComponent = /** @class */ (function () {
    function TaskInputComponent(fb) {
        this.fb = fb;
        this.profileForm = this.fb.group({
            taskName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rates: this.fb.group({
                speed: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(20)]],
                resources: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(200)]]
            })
        });
    }
    TaskInputComponent.prototype.updateProfile = function () {
        this.profileForm.patchValue({
            taskName: 'Generic Task',
            rates: {
                speed: 7.5,
                resources: 8
            }
        });
    };
    TaskInputComponent.prototype.onSubmit = function () {
        // TODO: Use EventEmitter with form value
        console.warn(this.profileForm.value);
    };
    TaskInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-input',
            template: __webpack_require__(/*! ./task-input.component.html */ "./src/app/block-details/task-input/task-input.component.html"),
            styles: [__webpack_require__(/*! ./task-input.component.scss */ "./src/app/block-details/task-input/task-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], TaskInputComponent);
    return TaskInputComponent;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n<div class='listing' #externalevents id='external-events'>\n  \n  <strong> Scheduled Jobs </strong>\n\n  <div class=\"schedule-loader\" [hidden]=\"scheduleComponentReady\">\n \n    <mat-progress-spinner [diameter]=\"30\" [mode]=\"'indeterminate'\">\n    </mat-progress-spinner>\n  \n  </div>\n\n<p *ngIf=\"scheduleComponentReady\">\n  <li class = 'drag' #draggableel *ngFor=\"let list of lists\">\n      {{list.Tasks[0].taskName }}\n    <!-- <p hidden>/</p> -->\n    <p hidden>\n      {{list.Tasks[2]}} \n    </p>\n    <p hidden>\n      {{list.Tasks[3]}} \n    </p>\n    <p hidden>\n      {{list.Tasks[6]}} \n    </p>\n    <p hidden>\n      {{list.Tasks[7]}} \n    </p>\n    <p hidden>\n      {{list.Tasks[8]}} \n    </p>\n\n    <!-- {{list._id}} -->\n  </li>\n<!-- <div cdkDrag>move</div> -->\n<!-- <li #draggableelllllll >drag me 3</li> -->\n</p>\n\n\n<p>\n  <input type='checkbox' #dropremove id='drop-remove' />\n  <label class='test' for='drop-remove'>remove after drop</label>\n</p>\n</div>\n</nav>\n\n<div class=\"progress-loader\" [hidden]=\"rerender\">\n \n  <mat-progress-spinner [mode]=\"'indeterminate'\">\n  </mat-progress-spinner>\n\n</div>\n\n<article *ngIf=\"rerender\">\n  <full-calendar\n    *ngIf=\"options\"\n    #fullcalendar\n    [aspectRatio]=\"options.aspectRatio\"\n    [height]=\"options.height\"\n    [allDayText]=\"options.allDayText\"\n    [editable]= \"options.editable\"\n        [timeZone]= 'UTC'\n        [defaultView]= \"options.defaultView\"\n        [defaultDate]= \"options.defaultDate\"\n        minTime='08:00:00'\n        maxTime= '16:00:00'\n        [allDaySlot]= true\n        [nowIndicator]= true\n    [slotLabelFormat]=\"options.slotLabelFormat\"\n    [slotDuration]=\"options.slotDuration\"\n    [slotLabelInterval]=\"options.slotLabelInterval\"\n    [businessHours]=\"options.businessHours\" \n    [selectConstraint]=\"options.selectConstraint\"   \n    [weekends]=true\n    [(events)]=\"eventsWithFilter\"\n    [header]=\"options.header\"\n    (dateClick)=\"dateClick($event)\"\n    (eventDragStop)=\"eventDragStop($event)\"\n    [plugins]=\"options.plugins\"\n    (eventClick)=\"eventClick($event)\"\n    (drop)=\"dropped($event)\"  \n    (eventDrop)=\"updateEvent($event)\"\n    (eventResize)=\"eventResize($event)\" \n    (clickButton)=\"clickButton($event)\"\n    (eventReceive)=\"eventReceive($event)\"\n  ></full-calendar>\n</article>"

/***/ }),

/***/ "./src/app/calendar/calendar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".schedule-loader {\n  position: relative;\n  margin-left: 30%;\n  margin-right: 25%;\n  margin-top: 25%;\n  margin-bottom: 25%; }\n\n.progress-loader {\n  position: relative;\n  margin-left: 55%;\n  margin-right: 45%;\n  margin-top: 25%; }\n\n.mat-progress-spinner::ng-deep circle {\n  stroke: #6c8fd1; }\n\narticle {\n  float: right;\n  padding: 20px;\n  width: 86vw;\n  background-color: white; }\n\nstrong {\n  text-align: left; }\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;\n  font-size: 14px;\n  height: 100%;\n  width: 100%; }\n\n#external-events {\n  position: fixed;\n  /* z-index: 0; */\n  top: 55.6px;\n  padding: 0 10px;\n  border: 1px solid #ccc;\n  background: #eee;\n  display: inline-block; }\n\n.fc-event {\n  margin: 1em 0;\n  cursor: move;\n  position: absolute; }\n\n#calendar-container {\n  position: relative;\n  /* z-index: 1; */\n  margin-left: 200px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  top: 60px; }\n\n.listing li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px; }\n\n.listing li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white; }\n\n.listing li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em; }\n\n.text {\n  position: relative;\n  top: -3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvQzpcXFVzZXJzXFxtY2Rvd2VsZ1xcRG9jdW1lbnRzXFxBbmd1bGFyXFxmcm9udEVuZC9zcmNcXGFwcFxcY2FsZW5kYXJcXGNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGdCQUEwQixFQUMzQjs7QUFFQztFQUNFLGFBQVk7RUFDWixjQUFhO0VBQ2IsWUFBVztFQUNYLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFHRDtFQUNJLFVBQVM7RUFDVCxXQUFVO0VBQ1YsMERBQXlEO0VBQ3pELGdCQUFlO0VBQ2YsYUFBWTtFQUNaLFlBQVcsRUFDWjs7QUFFSDtFQUNFLGdCQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVc7RUFDWCxnQkFBZTtFQUNmLHVCQUFzQjtFQUN0QixpQkFBZ0I7RUFDaEIsc0JBQW9CLEVBQ3JCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLFVBQVMsRUFDVjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLFFBQU87RUFDUCx1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLHFDQUFvQztFQUNwQyxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsdUJBQXNCO0VBQ3RCLFdBQVUsRUFDWDs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5hdiB7XHJcbi8vICAgICBmbG9hdDogbGVmdDtcclxuLy8gICAgIHdpZHRoOiAxMiU7XHJcbi8vICAgICBoZWlnaHQ6IDIwMHB4OyAvKiBvbmx5IGZvciBkZW1vbnN0cmF0aW9uLCBzaG91bGQgYmUgcmVtb3ZlZCAqL1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2NjYztcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICB9XHJcblxyXG4uc2NoZWR1bGUtbG9hZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDI1JTtcclxuICBtYXJnaW4tdG9wOiAyNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjUlOyBcclxufVxyXG5cclxuLnByb2dyZXNzLWxvYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1NSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0NSU7XHJcbiAgbWFyZ2luLXRvcDogMjUlO1xyXG59XHJcblxyXG4ubWF0LXByb2dyZXNzLXNwaW5uZXI6Om5nLWRlZXAgY2lyY2xlIHtcclxuICBzdHJva2U6IHJnYigxMDgsIDE0MywgMjA5KTtcclxufVxyXG5cclxuICBhcnRpY2xlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogODZ2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgc3Ryb25nIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIFxyXG4gIGh0bWwsIGJvZHkge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICNleHRlcm5hbC1ldmVudHMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLyogei1pbmRleDogMDsgKi9cclxuICAgIHRvcDogNTUuNnB4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmZjLWV2ZW50IHtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIFxyXG4gICNjYWxlbmRhci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogei1pbmRleDogMTsgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgfVxyXG4gIC5saXN0aW5nIGxpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG4gICAgbWFyZ2luOiAuNWVtO1xyXG4gICAgcGFkZGluZzogLjNlbSAwO1xyXG4gICAgaGVpZ2h0OiAxLjZlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgLmxpc3RpbmcgbGkuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAubGlzdGluZyBsaTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzYwN0Q4QjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbiAgICBsZWZ0OiAuMWVtO1xyXG4gIH1cclxuICAudGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../events.service */ "./src/app/events.service.ts");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _choose_people_machines_choose_people_machines_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../choose-people-machines/choose-people-machines.component */ "./src/app/choose-people-machines/choose-people-machines.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _search_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../search-service.service */ "./src/app/search-service.service.ts");












var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(eventservice, dialog, element, search) {
        this.eventservice = eventservice;
        this.dialog = dialog;
        this.element = element;
        this.search = search;
        this.myEvents = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"]([]);
    }
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editable = true;
        this.rerender = true;
        this.scheduleComponentReady = false;
        // let data = sessionStorage.getItem('key');
        // let dates = new Date(sessionStorage.getItem('dates'));
        // console.log("___---------------------___________------------------____________________----------------------")
        // console.log(data)
        // console.log(dates)
        // console.log(dates.getUTCFullYear())
        // this.myEvents.subscribe(res => this.events = res.concat({}));
        this.testEvent = "4:00:00";
        this.options = {
            editable: this.editable,
            // defaultView: data,
            // defaultDate: dates,
            allDayDefault: false,
            aspectRatio: 2.25,
            allDayText: "All Day",
            slotDuration: "00:20:00",
            slotLabelInterval: "01:00",
            slotLabelFormat: {
                hour: 'numeric',
                minute: '2-digit',
                omitZeroMinute: true,
                meridiem: 'short'
            },
            businessHours: {
                // days of week. an array of zero-based day of week integers (0=Sunday)
                daysOfWeek: [1, 2, 3, 4, 5],
                startTime: '8:00',
                endTime: '18:00',
            },
            selectConstraint: "businessHours",
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'timeGridWeek timeGridDay dayGridMonth, listWeek'
            },
            plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_1___default.a, _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7___default.a, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4___default.a]
        };
        this.events = [];
        this.eventsWithFilter = this.events;
        this.search.data.subscribe(function (search) {
            // console.log(search)
            // console.log(this.events)
            // console.log(this.eventsWithFilter.filter(data => data.title == "Everything"))
            // this.events.filter(data => console.log(data.title))
            // this.events.filter(data => console.log(data.title.includes(search)))
            _this.eventsWithFilter = _this.events.filter(function (data) { return data.title.toLowerCase().includes(search.toLowerCase()); });
            console.log(_this.eventsWithFilter);
        });
        this.events = this.eventservice.getData()
            .subscribe(function (res) {
            // console.log(res)
            console.log("initialise events");
            _this.events = res;
            _this.eventsWithFilter = _this.events;
            // console.log(this.events.filter(data => data.title.includes("M18")))
        }, function (err) {
            console.log("Error occured");
        });
    };
    CalendarComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.myEvents.subscribe(function (res) { return _this.events = res; });
        // console.log(this.events)
        this.events.filter(function (data) { return data; });
        // console.log(this.events.filter(data => data))
    };
    CalendarComponent.prototype.ngAfterViewInit = function () {
        // console.log(this.view)
        // console.log(this.events)
        // "ngAfterViewContent"
        var _this = this;
        this.myEvents.subscribe(function (res) { return _this.events = res; });
        this.lists = this.eventservice.getTaskData()
            .subscribe(function (res) {
            // console.log(res)
            var arr = [];
            for (var prop in res) {
                // console.log(arr)
                arr.push(res[prop]);
            }
            console.log("find new listed jobs");
            _this.lists = arr;
            console.log(_this.lists);
            // Then once the list is available
            setupDraggables();
        }, function (err) {
            console.log("Error occurred in loading lists");
        });
        // setTimeout(()=>{ console.log(this.lists), 10000});
        var elef = this.element.nativeElement;
        // setTimeout(()=>{
        //   let weeks: any = elef.querySelectorAll(".fc-row").length;
        //         // loop to assign all attributes to DOM elements
        //         // console.log(weeks);
        //         var i: number;
        //         for(i=0; i<weeks;i++){
        //           elef.querySelectorAll(".fc-row")[i].style.zIndex=20-i;     
        //           // console.log(elef.querySelectorAll(".fc-row")[i]);     
        //           // console.log("fc row");
        //           }
        //   this.refreshToolTips();
        //   }, 4000)
        var setupDraggables = function () {
            // console.log("why the hell is this not working!");
            // console.log(this.draggable._results[0]);
            // new Draggable(this.draggable._results[0].nativeElement, {
            //   eventData: {
            //     title: 'my event',
            //     duration: '02:00'
            //   }
            // });
            // for (var i = 0; i < this.draggable._results.length; i++) {
            // this.draggable._results[i].nativeElement.draggable = true;
            // console.log(this.draggable);
            new _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["Draggable"](_this.containerEl.nativeElement, {
                itemSelector: '.drag',
                eventData: function (eventEl) {
                    // console.log("...think once the task has been brought through via a data transfer, as a service, or temporary array (not great as lost everytime browser is refreshed), then can pass variables from the task, (using a lookup on the draggable element text), into eventData which will provide the values upon drop through the eventReceive(), meaning eventReceive should then update the DB via data service rather than through the use of dropped() as used previously.")
                    // console.log(eventEl)
                    // console.log(eventEl.innerHTML)
                    // console.log(Number(eventEl.innerHTML.split(">")[1].split(" <")[0]))
                    // this.lists.map((obj, index) => {
                    //   console.log(obj);
                    //   if(eventEl.innerText === obj.Tasks[0].taskName) {
                    //     console.log("showme the money");
                    //     // console.log(index);
                    //     // this.events[index] = res
                    //   } 
                    // })
                    var hours = Number(eventEl.innerHTML.split(">")[1].split(" <")[0]);
                    var startTime = Number(eventEl.innerHTML.split(">")[7].split(" <")[0]);
                    var endTime = Number(eventEl.innerHTML.split(">")[9].split(" <")[0]);
                    var hoursPerDay = Number(eventEl.innerHTML.split(">")[9].split(" <")[0]) - Number(eventEl.innerHTML.split(">")[7].split(" <")[0]);
                    var dur = hours + Math.floor(hours / hoursPerDay) * (24 - hoursPerDay);
                    // console.log(startTime)
                    // console.log(endTime)
                    // console.log(hours)
                    // console.log(hoursPerDay)
                    // console.log(dur)
                    // console.log(Math.floor(hours/hoursPerDay)*(24-hoursPerDay))
                    return {
                        title: eventEl.innerText,
                        duration: { hours: dur },
                        Row_KMs: Number(eventEl.innerHTML.split(">")[3].split(" <")[0]),
                        HoursWorked: hours,
                        startTime: { hours: startTime },
                        // duration: {hours: 26},
                        startingTime: startTime,
                        endTime: endTime
                    };
                }
            });
            _this.scheduleComponentReady = true;
            // }
        };
    };
    // All Methods below:
    CalendarComponent.prototype.eventReceive = function (event) {
        var _this = this;
        // console.log("the event has been received.... Now need to post to DB")
        // console.log(event.view.el.outerHTML.includes("timeGridWeek-view"))
        // console.log(event)
        // console.log(this.fullcalendar)
        sessionStorage.setItem('key', event.view.type);
        sessionStorage.setItem('dates', event.event.start);
        this.options.defaultView = event.view.type;
        this.options.defaultDate = event.event.start;
        // need to adjust event dates to represent the true length of tasks then refresh events in the screen
        var t = 0;
        var hoursOfWork = event.event.extendedProps.HoursWorked;
        var hoursLeftInDay = event.event.extendedProps.endTime - Number(new Date(event.event.start).getHours());
        var dayLength = event.event.extendedProps.endTime - event.event.extendedProps.startingTime;
        var nightLength = 24 - dayLength;
        // console.log(hoursOfWork)
        // console.log(event.event.extendedProps.endTime)
        // console.log(event.event.start.getHours())
        // console.log(event.event.extendedProps.startingTime)
        // console.log("---------")
        // console.log(hoursLeftInDay)
        // console.log(dayLength)
        // console.log(nightLength)
        if (hoursLeftInDay < hoursOfWork) {
            t = t + nightLength;
            hoursOfWork = hoursOfWork - hoursLeftInDay;
        }
        while (dayLength < hoursOfWork) {
            t = t + nightLength;
            hoursOfWork = hoursOfWork - dayLength;
        }
        var nonWorkMilliSec = t * 60 * 60 * 1000;
        var hoursWorkedMilliSec = event.event.extendedProps.HoursWorked * 60 * 60 * 1000;
        var startDay = new Date(event.event.start); //.getDay(); 
        // console.log(t)
        // console.log(event.event)
        // console.log(new Date(Date.parse(event.event.start) + hoursWorkedMilliSec + nonWorkMilliSec))
        this.rerender = false;
        this.eventservice.PostEvent({
            "title": event.draggedEl.innerText,
            // "start": new Date(event.event.start), 
            "start": new Date(Date.parse(event.event.start)),
            "end": new Date(Date.parse(event.event.start) + hoursWorkedMilliSec + nonWorkMilliSec),
            "color": 'rgba(130,137,165, 0.4)',
            "extendedProps": {
                "hoursOfWork": event.event.extendedProps.HoursWorked,
                "startingTime": event.event.extendedProps.startingTime,
                "endTime": event.event.extendedProps.endTime
            }
        }).subscribe(function (res) {
            // console.log("response from post request");  
            // console.log(res);
            // console.log(this.events);
            _this.events = _this.events.concat(res);
            // console.log(this.events);
            _this.eventsWithFilter = _this.events;
            // this.eventsWithFilter.filter(data=>console.log(data));
            _this.rerender = true;
        }, function (err) { console.log("Error occured in post action"); });
        // this.events = this.events.concat({});
        this.refreshToolTips();
        this.events = this.events.slice();
        this.eventsWithFilter = this.events;
        if (this.checkbox.nativeElement.checked) {
            // console.log("yes this is working baby!")
            // console.log(this.checkbox.nativeElement.checked);
        }
        ////////////////////////////////////////////////////////
    };
    CalendarComponent.prototype.eventrender = function (event) {
        console.log("This should mean that the event has been updated in DB, DOM and also in the tooltips");
    };
    CalendarComponent.prototype.refreshToolTips = function () {
        // console.log("starting the Tooltips refresh");
        // var elef = this.element.nativeElement;  
        //     setTimeout(()=> {
        //     var el = this.element.nativeElement;
        //         // console.log(Object.values(this.events[0]).join("\r\n"));
        //     // want a date ordered array
        //     this.events.sort(function(a,b){
        //     var A = new Date(a.start);
        //     var B = new Date(b.start);
        //     return A > B ? 1 : -1;
        //     });
        //     let elements: any = el.querySelectorAll(".fc-content").length;
        //     // loop to assign all attributes to DOM elements
        //     var i: number;
        //     for(i=0; i<elements;i++){
        //         this.events.map((att, index)=> {
        //           // console.log(el.querySelectorAll(".fc-content")[i].innerText.replace(/\s/g,'') === att.title.replace(/\s/g,''))
        //           if(el.querySelectorAll(".fc-content")[i].innerText.replace(/\s/g,'') === att.title.replace(/\s/g,'')) {
        //             var html = this.events[index].title + '\n' + this.events[index]._id + '\n' + this.events[index].Staff + '\n' + this.events[index].Machine;
        //             var zForContent = el.querySelectorAll(".fc-content")[i].style.zIndex=2000-i;
        //             el.querySelectorAll(".fc-content")[i].setAttribute("data-tooltip", html)  
        //           }
        //       })
        //     }
        //     // console.log(el.querySelectorAll(".fc-title")[0].style.zIndex);
        //     // console.log("an element of DOM");
        //     // console.log(el.querySelectorAll(".fc-content"))
        //     this.popUp = true;
        //     // console.log("fccontent");
        //     // console.log(this.events);
        //     // console.log("event content");
        //     // console.log(el.querySelectorAll("a")[0].setAttribute("mattooltip", "tooltips is here now!"))
        //       }, 1000)
        //   // console.log(elef.querySelectorAll(".fc-content"));
        //   // console.log(elef.querySelectorAll(".fc-title")[0].style.zIndex);
        // console.log("finishing the Tooltips refresh and showing content then title zIndexes");
    };
    CalendarComponent.prototype.eventClick = function (model) {
        var _this = this;
        this.displayEvent = model.event._calendar.component.props.currentDate;
        // console.log(model.event.extendedProps._id);
        console.log("clicking event");
        // want to include a pop up screen here to allow the event to be modified
        // this.popUp = true;
        var dialog = this.dialog.open(_choose_people_machines_choose_people_machines_component__WEBPACK_IMPORTED_MODULE_9__["ChoosePeopleMachinesComponent"]);
        dialog.afterClosed()
            .subscribe(function (selection) {
            if (selection) {
                _this.selections = selection;
                // selections here is an array of those items selected
                // console.log(this.selections);
                // next want to patch this info to DB
                // console.log("patch testing");
                // console.log(model.event.extendedProps._id);
                _this.eventservice.updateEvent(model.event.extendedProps._id, {
                    "Staff": _this.selections[1],
                    "Machine": _this.selections[0]
                })
                    .subscribe(function (res) {
                    // console.log(res);
                    console.log("update events");
                    //this.events = this.events.concat();
                    // console.log(this.events);
                    _this.refreshToolTips();
                }, function (err) {
                    console.log("Error occured");
                });
            }
            else {
                // User clicked 'Cancel' or clicked outside the dialog
                console.log("didn't work :(");
            }
        });
        // this.refreshToolTips();
    };
    CalendarComponent.prototype.eventDragStop = function (model) {
        console.log("eventDrag event");
        this.editable = false;
        // console.log(this.editable)
    };
    CalendarComponent.prototype.dateClick = function (model) {
        // console.log(model);
        console.log("clicking the date buttons");
    };
    CalendarComponent.prototype.eventResize = function (model) {
        var _this = this;
        // console.log(model);
        var endingTime = new Date(Date.parse(model.event.end));
        this.eventservice.updateEvent(model.event.extendedProps._id, {
            "end": endingTime,
        })
            .subscribe(function (res) {
            _this.events.map(function (obj, index) {
                if (res._id === obj._id) {
                    _this.events[index] = res;
                }
            });
            _this.events = _this.events.slice();
            _this.eventsWithFilter = _this.events;
            _this.editable = true;
        }, function (err) {
            console.log("Error occured");
        });
    };
    CalendarComponent.prototype.dropped = function (model) {
        console.log("This is now redundant as all actions should have an eventData included - all the steps below have been moved to the eventReceive method above");
    };
    CalendarComponent.prototype.clickButton = function (model) {
        console.log("clicked clickbutton");
    };
    CalendarComponent.prototype.updateEvent = function (model) {
        var _this = this;
        console.log(model);
        this.options.editable = false;
        // console.log(this.editable);
        // console.log(model);
        // console.log(model.event.extendedProps._id);
        // this.rerender=false;
        // console.log(this.options)
        // Use updateEvent to obtain the events extendedProps, then use this to calculate the new timings as per the eventReceive method
        // then updateEvents again and re-render to show new timings.
        var t = 0;
        var hoursOfWork;
        var hoursLeftInDay;
        var dayLength;
        var nightLength;
        //   this.eventservice.updateEvent(model.event.extendedProps._id, {
        // })
        // .subscribe(
        //       res => {
        //         console.log(res) 
        //         hoursOfWork = res.extendedProps.HoursWorked;
        //         hoursLeftInDay = res.extendedProps.endTime - Number(new Date(res.start).getHours()) ;
        //         dayLength = res.extendedProps.endTime - res.extendedProps.startingTime;
        //         nightLength = 24 - dayLength;
        //       })    
        // Need to ensure the start can not be before the startingtime for the day. 
        // console.log(model.event.start.getHours() + model.event.start.getMinutes()/60)
        var currentTime = model.event.start.getHours() + model.event.start.getMinutes() / 60;
        var addHours = 0;
        if (model.event.start.getHours() < model.event.extendedProps.startingTime || model.event.start.getHours() > model.event.extendedProps.endTime) {
            // console.log("should print if start is before startingtime")
            addHours = model.event.extendedProps.startingTime - (currentTime);
            if (addHours < 0) {
                addHours = addHours + 24;
            }
        }
        // console.log(addHours)
        hoursOfWork = model.event.extendedProps.hoursOfWork;
        // console.log("---------")
        hoursLeftInDay = model.event.extendedProps.endTime - currentTime + addHours;
        dayLength = model.event.extendedProps.endTime - model.event.extendedProps.startingTime;
        nightLength = 24 - dayLength;
        // console.log(hoursOfWork)
        // console.log("---------")
        // console.log(hoursLeftInDay)
        // console.log(dayLength)
        // console.log(nightLength)
        if (hoursLeftInDay < hoursOfWork) {
            t = t + nightLength;
            hoursOfWork = hoursOfWork - hoursLeftInDay;
        }
        while (dayLength < hoursOfWork) {
            t = t + nightLength;
            hoursOfWork = hoursOfWork - dayLength;
        }
        // console.log(t + hoursOfWork)
        var nonWorkMilliSec = t * 60 * 60 * 1000;
        var hoursWorkedMilliSec = model.event.extendedProps.hoursOfWork * 60 * 60 * 1000;
        // console.log("start: " + new Date(Date.parse(model.event.start) + addHours*60*60*1000))
        // console.log("end: " + new Date(Date.parse(model.event.start) + addHours*60*60*1000 + hoursWorkedMilliSec + nonWorkMilliSec))
        // console.log("addHours: " + addHours)
        // console.log("hoursOfWork: " + hoursOfWork)
        // console.log("non worked: " + t)
        var endingTime;
        endingTime = new Date(Date.parse(model.event.start) + addHours * 60 * 60 * 1000 + hoursWorkedMilliSec + nonWorkMilliSec);
        // console.log(endingTime);
        this.eventservice.updateEvent(model.event.extendedProps._id, {
            "start": new Date(Date.parse(model.event.start) + addHours * 60 * 60 * 1000),
            "end": endingTime,
            // "end": new Date(Date.parse(model.event.start) + addHours*60*60*1000 + hoursWorkedMilliSec + nonWorkMilliSec),
            "allDay": false,
            "Staff": model.event.Staff,
            "Machine": model.event.Machine,
            "color": 'rgba(68,90,176, 0.4)'
        })
            .subscribe(function (res) {
            // console.log(res);
            console.log("update events");
            // this.events = this.events.concat(res);
            //   let array = Object
            // .entries(res)
            // // .map(([key, value]) => ({ [key]: value }))
            // .join(",")
            // JSONparse()
            _this.events.map(function (obj, index) {
                if (res._id === obj._id) {
                    // console.log("showme the money");
                    // console.log(index);
                    _this.events[index] = res;
                }
            });
            // this.events.map(obj => res._id === obj._id);
            // console.log(this.events);
            _this.rerender = true;
            // this.refreshToolTips();
            // console.log(this.events)
            _this.events = _this.events.slice();
            // console.log(this.events)
            _this.eventsWithFilter = _this.events;
            // this.myEvents.next(this.events)
            _this.options.editable = true;
            // console.log(this.editable)
        }, function (err) {
            console.log("Error occured");
        });
    };
    Object.defineProperty(CalendarComponent.prototype, "yearMonth", {
        get: function () {
            var dateObj = new Date();
            return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('fullcalendar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["FullCalendarComponent"])
    ], CalendarComponent.prototype, "fullcalendar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('dropremove'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "checkbox", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('externalevents'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "containerEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('draggableel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "draggable", void 0);
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.scss */ "./src/app/calendar/calendar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _search_service_service__WEBPACK_IMPORTED_MODULE_11__["SearchServiceService"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/choose-people-machines/choose-people-machines.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/choose-people-machines/choose-people-machines.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Resources</h4>\n<div mat-dialog-content>\n  <mat-label>Staff</mat-label>\n  <mat-select [(ngModel)]=\"chosenPerson\">\n    <mat-option *ngFor=\"let person of people\" [value]=\"person\">\n      {{ person }}\n    </mat-option>\n  </mat-select>\n</div>\n\n<div mat-dialog-machine>\n  <mat-label>Machinery</mat-label>\n  <mat-select [(ngModel)]=\"chosenMachine\">\n    <mat-option value=\"volvo\">Volvo</mat-option>\n    <mat-option value=\"saab\">Saab</mat-option>\n    <mat-option value=\"mercedes\">Mercedes</mat-option>\n    <mat-option value=\"audi\">Audi</mat-option>\n  </mat-select>\n</div>\n\n<div mat-dialog-actions>\n  <button mat-button (click)=\"confirmSelection()\" color=\"primary\">\n    Confirm\n  </button>\n  <button mat-button (click)=\"dialogRef.close()\">\n    Cancel\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/choose-people-machines/choose-people-machines.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/choose-people-machines/choose-people-machines.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nob29zZS1wZW9wbGUtbWFjaGluZXMvY2hvb3NlLXBlb3BsZS1tYWNoaW5lcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/choose-people-machines/choose-people-machines.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/choose-people-machines/choose-people-machines.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChoosePeopleMachinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosePeopleMachinesComponent", function() { return ChoosePeopleMachinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ChoosePeopleMachinesComponent = /** @class */ (function () {
    function ChoosePeopleMachinesComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.people = ['🐼', '💪', '🐷', '🤖', '👽', '🐥'];
    }
    ChoosePeopleMachinesComponent.prototype.confirmSelection = function () {
        // this.dialogRef.close(this.chosenPerson);
        this.dialogRef.close([this.chosenMachine, this.chosenPerson]);
    };
    ChoosePeopleMachinesComponent.prototype.ngOnInit = function () {
    };
    ChoosePeopleMachinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-people-machines',
            template: __webpack_require__(/*! ./choose-people-machines.component.html */ "./src/app/choose-people-machines/choose-people-machines.component.html"),
            styles: [__webpack_require__(/*! ./choose-people-machines.component.scss */ "./src/app/choose-people-machines/choose-people-machines.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], ChoosePeopleMachinesComponent);
    return ChoosePeopleMachinesComponent;
}());



/***/ }),

/***/ "./src/app/data-table/data-table.component.html":
/*!******************************************************!*\
  !*** ./src/app/data-table/data-table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img *ngIf=\"!loaded\" src=\"/assets/source.gif\" alt=\"loading\" />\n<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"aTrigger\" class=\"row-border hover\" id=\"example\" *ngIf=\"loaded\">\n        <thead>\n          <tr>\n            <th>Staff</th>\n            <th *ngFor=\"let day of Dates\">{{day}}</th>\n            <!-- <th>Tuesday</th> -->\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let info of Info\">\n            <!-- <td>Name</td> -->\n            <td *ngFor=\"let row of info\"> {{row}} </td>\n            <!-- <td>{{ rost.title }}</td>\n            <td>{{ rost.dates }}</td> -->\n          </tr>\n        </tbody>\n</table>\n\n"

/***/ }),

/***/ "./src/app/data-table/data-table.component.scss":
/*!******************************************************!*\
  !*** ./src/app/data-table/data-table.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td.highlight {\n  background-color: whitesmoke !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS10YWJsZS9DOlxcVXNlcnNcXG1jZG93ZWxnXFxEb2N1bWVudHNcXEFuZ3VsYXJcXGZyb250RW5kL3NyY1xcYXBwXFxkYXRhLXRhYmxlXFxkYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQXVDLEVBQzFDIiwiZmlsZSI6InNyYy9hcHAvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQuaGlnaGxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2UgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/data-table/data-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/data-table/data-table.component.ts ***!
  \****************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events.service */ "./src/app/events.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(eventservice) {
        this.eventservice = eventservice;
        this.dtOptions = {};
        this.aTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    DataTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaded = false;
        this.earlyAll = [];
        this.lateAll = [];
        // setTimeout(()=> {
        this.loaded = true;
        // }, 2000)
        // setTimeout(()=> {
        this.roster = this.eventservice.getData()
            .subscribe(function (res) {
            console.log("initialise roster");
            _this.roster = res;
            // Here will manipulate the data to present as a roster 
            var getDateArray = function (start, end) {
                var arr = new Array();
                var dt = new Date(start);
                end = new Date(end);
                while (dt <= end) {
                    arr.push((new Date(dt)).toString().substring(0, 15)); //save only the Day MMM DD YYYY part
                    dt.setDate(dt.getDate() + 1);
                }
                return arr;
            };
            var i;
            var longest = [];
            for (i = 0; i < _this.roster.length; i++) {
                var endDate;
                if (_this.roster[i].end) {
                    endDate = _this.roster[i].end;
                }
                else {
                    endDate = _this.roster[i].start;
                }
                _this.roster[i].dates = getDateArray(_this.roster[i].start, endDate);
                // find longest date array for later
                if (_this.roster[i].dates.length > longest) {
                    longest = _this.roster[i].dates.length;
                }
                ;
                // get latest
                var late = _this.roster[i].dates.reduce(function (pre, cur) {
                    return Date.parse(pre) < Date.parse(cur) ? cur : pre;
                });
                // now reduce again on latest
                _this.lateAll.push(late);
                // get earliest
                var early = _this.roster[i].dates.reduce(function (pre, cur) {
                    return Date.parse(pre) > Date.parse(cur) ? cur : pre;
                });
                // now reduce again on earliest
                _this.earlyAll.push(early);
            }
            var overallEndDate = _this.lateAll.reduce(function (pre, cur) {
                return Date.parse(pre) < Date.parse(cur) ? cur : pre;
            });
            var overallStartDate = _this.earlyAll.reduce(function (pre, cur) {
                return Date.parse(pre) > Date.parse(cur) ? cur : pre;
            });
            // console.log(this.earlyAll);
            // console.log(this.lateAll);
            // console.log(overallStartDate)
            // console.log(overallEndDate)
            _this.Dates = getDateArray(overallStartDate, overallEndDate);
            // Use Dates to create an array with Titles and the Staff Name
            // console.log(this.roster[1].dates.flat())
            _this.Info = []; // Array(this.Dates.length).fill(Array(this.Dates.length));
            _this.Names = [];
            // Create a new blank array to hold all the event dates as a matrix
            for (i = 0; i < _this.roster.length; i++) {
                _this.Info[i] = new Array(_this.Dates.length);
            }
            // Info loop starts here as mentioned below
            _this.Info.map(function (a, j) {
                // Create a new blank array to fill for each date
                _this.AnotherBox = [];
                for (i = 0; i < longest; i++) {
                    _this.AnotherBox[i] = new Array(_this.Dates.length);
                }
                _this.AnotherBox.map(function (o, i) {
                    var oneArray = _this.Dates.map(function (obj, index) {
                        if (_this.roster[j].dates[i] === obj) {
                            _this.AnotherBox[i][index] = _this.roster[j].title;
                        }
                        else {
                            _this.AnotherBox[i][index] = "";
                        }
                        ;
                        // this.AnotherBox[i][index] = this.roster[j].dates[i] === obj;
                    });
                });
                // Now need to flatten or condense these five rows into one.
                _this.AnotherBox = _this.AnotherBox.reduce(function (a, b) { return a.map(function (c, i) { return b[i] || c; }); });
                _this.Info[j] = _this.AnotherBox;
                if (_this.roster[j].Staff) {
                    _this.Names[j] = _this.roster[j].Staff;
                }
                else {
                    _this.Names[j] = " ";
                }
                ;
                // Now need to map on all events so have created Info.map in above loop
            });
            // Now transpose data for html format
            _this.Info = _this.Info[0].map(function (col, i) { return _this.Info.map(function (row) { return row[i]; }); });
            // Add the staff names to the front of the array
            _this.Info.unshift(_this.Names);
            // Now transpose back!
            _this.Info = _this.Info[0].map(function (col, i) { return _this.Info.map(function (row) { return row[i]; }); });
            console.log("roster with dates");
            console.log(_this.Info);
            console.log(_this.Dates);
            console.log(_this.Names);
            _this.aTrigger.next();
        }, function (err) {
            console.log("Error occured");
        });
        // }, 2000)
        setTimeout(function () {
            $(document).ready(function () {
                var table = $('#example').DataTable();
                $('#example tbody')
                    .on('mouseenter', 'td', function () {
                    var colIdx = table.cell(this).index().column;
                    $(table.cells().nodes()).removeClass('highlight');
                    $(table.column(colIdx).nodes()).addClass('highlight');
                    console.log("colIndex on mouseenter");
                });
            });
        }, 500);
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
    };
    DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.scss */ "./src/app/data-table/data-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/events.service.ts":
/*!***********************************!*\
  !*** ./src/app/events.service.ts ***!
  \***********************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var EventsService = /** @class */ (function () {
    // eventAccess = new Observable(getData)
    function EventsService(http, datePipe) {
        this.http = http;
        this.datePipe = datePipe;
        this.eventsUrl = 'https://nodeappvitiplanning.azurewebsites.net/events';
        this.eventUrl = 'https://nodeappvitiplanning.azurewebsites.net/event/';
        this.listURL = 'https://nodeappvitiplanning.azurewebsites.net/lists';
        this.gpsUrl = 'https://nodeappvitiplanning.azurewebsites.net/gps';
        this.blockUrl = 'https://nodeappvitiplanning.azurewebsites.net/blocks';
        this.tasksUrl = 'https://nodeappvitiplanning.azurewebsites.net/tasks';
        this.date = Date.now();
    }
    // getData() {
    //   console.log(this.date + '-07')
    //   return [{
    //         title: 'Long Event',
    //         start: '2019-03-07',
    //         end: '2019-03-12'
    //       }]
    // }
    EventsService.prototype.getTaskData = function () {
        return this.http.get(this.tasksUrl);
    };
    // onInit() {
    //   this.service.myEvents.subscribe(this.data)
    // }
    EventsService.prototype.postTaskData = function (eventPassed) {
        // console.log(eventPassed);
        // console.log("is anything happening?");
        return this.http.post(this.tasksUrl, eventPassed);
    };
    // postTaskData(eventPassed: any):Observable<any> {
    //   // console.log(eventPassed);
    //   console.log("is anything happening?");
    //   this.http.post<any>(this.tasksUrl, eventPassed).subscribe(data => this.myEvents.next(data));
    // }
    EventsService.prototype.getListData = function () {
        this.list = this.http.get(this.listURL);
        // console.log(this.list);
        return this.list;
    };
    EventsService.prototype.getBlockData = function () {
        this.blocks = this.http.get(this.blockUrl);
        // console.log(this.blocks);
        return this.blocks;
    };
    EventsService.prototype.getData = function () {
        this.event = this.http.get(this.eventsUrl);
        // console.log(this.event);
        return this.event;
    };
    EventsService.prototype.getGPSData = function () {
        return this.http.get(this.gpsUrl);
    };
    EventsService.prototype.PostEvent = function (eventPassed) {
        // console.log(eventPassed);
        // console.log("is anything happening?");
        return this.http.post(this.eventsUrl, eventPassed);
    };
    EventsService.prototype.updateEvent = function (id, eventChange) {
        return this.http.patch(this.eventUrl + id, eventChange);
    };
    EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./src/app/gantt-chart/gantt-chart.component.html":
/*!********************************************************!*\
  !*** ./src/app/gantt-chart/gantt-chart.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>\n     <div id=\"chart_div\"></div>\n\n<iframe width=\"1140\" height=\"541.25\" src=\"https://app.powerbi.com/reportEmbed?reportId=25f7640e-5b42-4444-be3d-fa0b38cf6013&appId=8febf78b-9095-4f64-bca6-43754a049eef&autoAuth=true&ctid=933c9cbe-35d3-4416-abbd-ddd1bca5879c\" frameborder=\"0\" allowFullScreen=\"true\"></iframe>"

/***/ }),

/***/ "./src/app/gantt-chart/gantt-chart.component.scss":
/*!********************************************************!*\
  !*** ./src/app/gantt-chart/gantt-chart.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbnR0LWNoYXJ0L2dhbnR0LWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/gantt-chart/gantt-chart.component.ts":
/*!******************************************************!*\
  !*** ./src/app/gantt-chart/gantt-chart.component.ts ***!
  \******************************************************/
/*! exports provided: GanttChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttChartComponent", function() { return GanttChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GanttChartComponent = /** @class */ (function () {
    function GanttChartComponent() {
    }
    GanttChartComponent.prototype.ngOnInit = function () {
        google.charts.load('current', { 'packages': ['gantt'] });
        google.charts.setOnLoadCallback(drawChart);
        function daysToMilliseconds(days) {
            return days * 24 * 60 * 60 * 1000;
        }
        function drawChart() {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Task ID');
            data.addColumn('string', 'Task Name');
            data.addColumn('string', 'Resource');
            data.addColumn('date', 'Start Date');
            data.addColumn('date', 'End Date');
            data.addColumn('number', 'Duration');
            data.addColumn('number', 'Percent Complete');
            data.addColumn('string', 'Dependencies');
            data.addRows([
                ['Research', 'Barrel Pruning', 'Machine Task',
                    new Date(2015, 0, 1), new Date(2015, 0, 5), null, 100, null],
                ['Write', 'Spur Prune', 'prune',
                    null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
                ['Cite', 'Full Job VSP', 'prune',
                    null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'],
                ['Complete', 'Post Pushing', 'labour',
                    null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
                ['Outline', 'Klima Cut', 'prune',
                    null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, 'Research']
            ]);
            var options = {
                height: 275
            };
            var chart = new google.visualization.Gantt(document.getElementById('chart_div'));
            chart.draw(data, options);
        }
    };
    GanttChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gantt-chart',
            template: __webpack_require__(/*! ./gantt-chart.component.html */ "./src/app/gantt-chart/gantt-chart.component.html"),
            styles: [__webpack_require__(/*! ./gantt-chart.component.scss */ "./src/app/gantt-chart/gantt-chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GanttChartComponent);
    return GanttChartComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" id=\"main-nav\">\n  <a class=\"navbar-brand\" href=\"/\">PRWNZ</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n  \n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"block-details\"> Block Detail Planning </a>\n    </li>\n\n\t  <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"full-calendar\"> Job Calendar </a>\n      </li>\n\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"task-view\"> Task Details </a>\n      </li>\n\t  \n      <li class=\"nav-item\">\n\t\t<a class=\"nav-link\" routerLink=\"data-table\"> Roster </a>\n      </li>\n      \n      <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"gantt-chart\"> Gantt </a>\n      </li>\n      \n      <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"map-chart\"> Map </a>\n      </li>\n\n    <input type=\"search\" class=\"navbar-brand\" id=\"site-search\" name=\"q\"\n          aria-label=\"Search through site content\" (keyup)=\"onKey($event)\">\n    \n    <!-- <button class=\"navbar-brand\" id=\"site-search\">Search</button> -->\n      \n    </ul>\n    \n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#site-search {\n  position: relative;\n  left: 120%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcbWNkb3dlbGdcXERvY3VtZW50c1xcQW5ndWxhclxcZnJvbnRFbmQvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLFdBQVUsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2l0ZS1zZWFyY2gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTIwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-service.service */ "./src/app/search-service.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(search) {
        this.search = search;
        this.values = '';
    }
    HeaderComponent.prototype.onKey = function (event) {
        this.values = event.target.value;
        console.warn(event.target.value);
        this.search.updateData(this.values);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_search_service_service__WEBPACK_IMPORTED_MODULE_2__["SearchServiceService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/map-chart/map-chart.component.html":
/*!****************************************************!*\
  !*** ./src/app/map-chart/map-chart.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h3 style=\"text-align: center\"> Vineyard Block Level Geo Maps </h3>\n<!--The div element for the map -->\n\n<tbody>\n    <header>Previous Tracks</header>\n      <tr *ngFor=\"let route of previousRoutes\">\n        {{route.finished | date }}, {{ route.path.length }} Waypoints\n      <div>\n      <button ion-button clear item-end (click)=\"showHistoryRoute(route.path)\">\n          View Route</button>\n      </div>\n</tbody>\n\n<div #gmap class=\"map\"></div>\n\n\n\n"

/***/ }),

/***/ "./src/app/map-chart/map-chart.component.scss":
/*!****************************************************!*\
  !*** ./src/app/map-chart/map-chart.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set the size of the div element that contains the map */\n.map {\n  height: 100%;\n  /* The height is 400 pixels */\n  width: 100%;\n  /* The width is the width of the web page */\n  position: absolute; }\ndiv {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLWNoYXJ0L0M6XFxVc2Vyc1xcbWNkb3dlbGdcXERvY3VtZW50c1xcQW5ndWxhclxcZnJvbnRFbmQvc3JjXFxhcHBcXG1hcC1jaGFydFxcbWFwLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJEQUEyRDtBQUMzRDtFQUNJLGFBQVk7RUFBRyw4QkFBOEI7RUFDN0MsWUFBVztFQUFHLDRDQUE0QztFQUMxRCxtQkFBaUIsRUFDbEI7QUFFRDtFQUNFLGtCQUNGLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9tYXAtY2hhcnQvbWFwLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IHRoZSBzaXplIG9mIHRoZSBkaXYgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBtYXAgKi9cclxuLm1hcCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7ICAvKiBUaGUgaGVpZ2h0IGlzIDQwMCBwaXhlbHMgKi9cclxuICAgIHdpZHRoOiAxMDAlOyAgLyogVGhlIHdpZHRoIGlzIHRoZSB3aWR0aCBvZiB0aGUgd2ViIHBhZ2UgKi9cclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIH1cclxuXHJcbiAgZGl2IHtcclxuICAgIHRleHQtYWxpZ246cmlnaHRcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/map-chart/map-chart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/map-chart/map-chart.component.ts ***!
  \**************************************************/
/*! exports provided: MapChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapChartComponent", function() { return MapChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events.service */ "./src/app/events.service.ts");




var MapChartComponent = /** @class */ (function () {
    function MapChartComponent(dataService) {
        this.dataService = dataService;
        this.previousRoutes = [];
        this.currentMapTrack = null;
    }
    MapChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var historicalOverlay;
        console.log("is this running when chart is loaded?");
        setTimeout(function () {
            _this.loadHistoricRoutes();
        }, 20000);
        // setTimeout(()=>{
        this.loadBlocks();
        // }, 20000)
        var mapStyle = [{
                'stylers': [{ 'visibility': 'on' }]
            }, {
                'featureType': 'landscape',
                'elementType': 'geometry',
                'stylers': [{ 'visibility': 'on' }, { 'color': '#fcfcfc' }]
            }, {
                'featureType': 'water',
                'elementType': 'geometry',
                'stylers': [{ 'visibility': 'on' }, { 'color': '#bfd4ff' }]
            }];
        var mapProp = {
            center: new google.maps.LatLng(-41.344, 173.5),
            zoom: 7,
            styles: mapStyle
            // mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        // console.log(this.blocks[0].object);
        // var outerCoords = [
        //   {lat: -41.844, lng: 173.5}, // north west
        //   {lat: -41.344, lng: 173.5}, // south west
        //   {lat: -41.344, lng: 173.0}, // south east
        //   {lat: -41.844, lng: 173.0}  // north east
        // ];
        // this.map.data.add({geometry: new google.maps.Data.Polygon([outerCoords])})
        // this.map.setMapTypeId('hybrid');
        // this.map.data.setStyle(styleFeature);
        // var imageBounds = {
        //   north: -41.344, 
        //   south: -41.444,
        //   east: 173.5,
        //   west: 173.6
        // };
        // historicalOverlay = new google.maps.GroundOverlay(
        //     'https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
        //     imageBounds);
        // historicalOverlay.setMap(this.map);
    };
    MapChartComponent.prototype.loadBlocks = function () {
        var _this = this;
        console.log("when does this run?");
        this.dataService.getBlockData() // should give us M10 data in geoJSON format, not asyncronous
            //// .pipe(
            ////   filter(p => p.coords != undefined))
            .subscribe(function (res) {
            console.log("Gotta get this coming up in console!");
            console.log(res);
            if (res) {
                //       this.blocks = res;
                //       var outerCoords = [
                //         {lat: -41.844, lng: 173.5}, // north west
                //         {lat: -41.344, lng: 173.5}, // south west
                //         {lat: -41.344, lng: 173.0}, // south east
                //         {lat: -41.844, lng: 173.0}  // north east
                //       ];
                //       console.log(outerCoords)
                //   var geoJWorking = {"type": "FeatureCollection",
                //   "features": [{ "type": "Feature", "properties": { "Name": "M13CHDF", "descriptio": null, "timestamp": null, "begin": null, "end": null, "altitudeMo": null, "tessellate": -1, "extrude": 0, "visibility": -1, "drawOrder": null, "icon": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 173.869027481569987, -41.482158401244, 0.0 ], [ 173.869383387470009, -41.482114812916997, 0.0 ], [ 173.870291644750097, -41.486194197415003, 0.0 ], [ 173.869937820950014, -41.486240055136001, 0.0 ], [ 173.869027481569987, -41.482158401244, 0.0 ] ] ] } },
                //   { "type": "Feature", "properties": { "Name": "M13CHDA", "descriptio": null, "timestamp": null, "begin": null, "end": null, "altitudeMo": null, "tessellate": -1, "extrude": 0, "visibility": -1, "drawOrder": null, "icon": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 173.872709398170002, -41.485888473129002, 0.0 ], [ 173.871802254459993, -41.481797749342, 0.0 ], [ 173.87183664054001, -41.481793475484999, 0.0 ], [ 173.871864592370002, -41.481919616001001, 0.0 ], [ 173.872198493940004, -41.481878784959001, 0.0 ], [ 173.872165549449988, -41.481752823134997, 0.0 ], [ 173.872235216919989, -41.481744207696998, 0.0 ], [ 173.872884221090004, -41.484589099859001, 0.0 ], [ 173.872518372970006, -41.484637163183002, 0.0 ], [ 173.872801551089992, -41.485876729716999, 0.0 ], [ 173.872709398170002, -41.485888473129002, 0.0 ] ] ] } },
                //   { "type": "Feature", "properties": { "Name": "M13CHDB", "descriptio": null, "timestamp": null, "begin": null, "end": null, "altitudeMo": null, "tessellate": -1, "extrude": 0, "visibility": -1, "drawOrder": null, "icon": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 173.871802254459993, -41.481797749342, 0.0 ], [ 173.872709398170002, -41.485888473129002, 0.0 ], [ 173.871979023480009, -41.4859824778, 0.0 ], [ 173.871075723589996, -41.481889376044997, 0.0 ], [ 173.871802254459993, -41.481797749342, 0.0 ] ] ] } },
                //   { "type": "Feature", "properties": { "Name": "M13CHDC", "descriptio": null, "timestamp": null, "begin": null, "end": null, "altitudeMo": null, "tessellate": -1, "extrude": 0, "visibility": -1, "drawOrder": null, "icon": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 173.870958662580108, -41.481914135449003, 0.0 ], [ 173.87187762727001, -41.485995188677997, 0.0 ], [ 173.871448501689997, -41.486050223519001, 0.0 ], [ 173.870529309469902, -41.481964294378002, 0.0 ], [ 173.870958662580108, -41.481914135449003, 0.0 ] ] ] } },
                //   { "type": "Feature", "properties": { "Name": "M13CHDE", "descriptio": null, "timestamp": null, "begin": null, "end": null, "altitudeMo": null, "tessellate": -1, "extrude": 0, "visibility": -1, "drawOrder": null, "icon": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 173.869383387470009, -41.482114812916997, 0.0 ], [ 173.86996127929001, -41.482042007433002, 0.0 ], [ 173.870874850679996, -41.486123624534997, 0.0 ], [ 173.870291644750097, -41.486194197415003, 0.0 ], [ 173.869383387470009, -41.482114812916997, 0.0 ] ] ] } },
                //   { "type": "Feature", "properties": { "Name": "M13CHDG", "descriptio": null, "timestamp": null, "begin": null, "end": null, "altitudeMo": null, "tessellate": -1, "extrude": 0, "visibility": -1, "drawOrder": null, "icon": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 173.868669961189994, -41.482203962478998, 0.0 ], [ 173.869027481569987, -41.482158401244, 0.0 ], [ 173.869937820950014, -41.486240055136001, 0.0 ], [ 173.869582135819996, -41.486284802248001, 0.0 ], [ 173.868669961189994, -41.482203962478998, 0.0 ] ] ] } }]
                // }
                // console.log(geoJWorking);
                var geoJSON = JSON.parse(res);
                //       // var data = (JSON.parse('[{"lat":-41.844, "lng": 173.0}, {"lat": -41.344, "lng": 173.5},  {"lat": -41.344, "lng": 173.0}, {"lat": -41.844, "lng": 173.0}]'));
                //       // this.map.data.add({geometry: new google.maps.Data.Polygon([data])});
                _this.map.data.addGeoJson(geoJSON);
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    MapChartComponent.prototype.loadHistoricRoutes = function () {
        var _this = this;
        console.log(this.previousRoutes);
        this.dataService.getGPSData()
            // .pipe(
            //   filter(p => p.coords != undefined))
            .subscribe(function (res) {
            console.log("returning routes successfully");
            if (res) {
                _this.previousRoutes = res;
                console.log(_this.previousRoutes);
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    MapChartComponent.prototype.redrawPath = function (path) {
        if (this.currentMapTrack) {
            this.currentMapTrack.setMap(null);
        }
        if (path.length > 1) {
            this.currentMapTrack = new google.maps.Polyline({
                path: path,
                geodesic: true,
                strokeColor: '#ff00ff',
                strokeOpacity: 1.0,
                strokeWeight: 3
            });
            this.currentMapTrack.setMap(this.map);
        }
    };
    MapChartComponent.prototype.showHistoryRoute = function (route) {
        this.redrawPath(route);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapChartComponent.prototype, "gmapElement", void 0);
    MapChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-chart',
            template: __webpack_require__(/*! ./map-chart.component.html */ "./src/app/map-chart/map-chart.component.html"),
            styles: [__webpack_require__(/*! ./map-chart.component.scss */ "./src/app/map-chart/map-chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]])
    ], MapChartComponent);
    return MapChartComponent;
}());



/***/ }),

/***/ "./src/app/search-pipe.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/search-pipe.pipe.ts ***!
  \*************************************/
/*! exports provided: SearchPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipePipe", function() { return SearchPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipePipe = /** @class */ (function () {
    function SearchPipePipe() {
    }
    SearchPipePipe.prototype.transform = function (value, args) {
        args = args.toLowerCase();
        return value.filter(function (item) {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    };
    SearchPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'searchPipe'
        })
    ], SearchPipePipe);
    return SearchPipePipe;
}());



/***/ }),

/***/ "./src/app/search-service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/search-service.service.ts ***!
  \*******************************************/
/*! exports provided: SearchServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchServiceService", function() { return SearchServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);



var SearchServiceService = /** @class */ (function () {
    function SearchServiceService() {
        this.inputData = '';
        this.dataSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.inputData);
        this.data = this.dataSource.asObservable();
    }
    SearchServiceService.prototype.updateData = function (data) {
        this.dataSource.next(data);
    };
    SearchServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchServiceService);
    return SearchServiceService;
}());



/***/ }),

/***/ "./src/app/tasks-view/tasks-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/tasks-view/tasks-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <li *ngFor= \"let list of lists\">\n  {{ list.Tasks[1][0][0]}}\n</li> -->\n\n<p *ngIf= \"ready\">\n  <tr *ngFor=\"let list of listsFiltered\">\n      {{list.Tasks[0].taskName}}\n      <div>\n          Block Order\n           \n    <li *ngFor=\"let task of list.Tasks[1]\">\n      <span [style.background-color]=\"task.colour\">\n        {{task.UniqID}}\n      </span>\n      \n    </li>\n      </div> \n  </tr>\n\n</p>\n"

/***/ }),

/***/ "./src/app/tasks-view/tasks-view.component.scss":
/*!******************************************************!*\
  !*** ./src/app/tasks-view/tasks-view.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  border-style: solid; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3Mtdmlldy9DOlxcVXNlcnNcXG1jZG93ZWxnXFxEb2N1bWVudHNcXEFuZ3VsYXJcXGZyb250RW5kL3NyY1xcYXBwXFx0YXNrcy12aWV3XFx0YXNrcy12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUssb0JBQW1CLEVBQUciLCJmaWxlIjoic3JjL2FwcC90YXNrcy12aWV3L3Rhc2tzLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge2JvcmRlci1zdHlsZTogc29saWQ7fSJdfQ== */"

/***/ }),

/***/ "./src/app/tasks-view/tasks-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tasks-view/tasks-view.component.ts ***!
  \****************************************************/
/*! exports provided: TasksViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksViewComponent", function() { return TasksViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events.service */ "./src/app/events.service.ts");
/* harmony import */ var _search_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-service.service */ "./src/app/search-service.service.ts");




var TasksViewComponent = /** @class */ (function () {
    function TasksViewComponent(eventservice, search) {
        this.eventservice = eventservice;
        this.search = search;
        this.lists = [];
        this.ready = false;
        this.listsFiltered = [];
    }
    TasksViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.search.data.subscribe(function (data) {
            console.log("1: is anything coming into here?: " + data);
            _this.searchData = data;
            console.log("2: is anything coming into here?: " + _this.searchData);
            // Also want to update scheduled tasks to show only filtered search data
            _this.listsFiltered = _this.lists.filter(function (input) {
                console.warn(String(input.Tasks[0].taskName).toLowerCase());
                String(input.Tasks[0].taskName).toLowerCase().includes(data.toLowerCase());
            });
            _this.listsFiltered = _this.listsFiltered.slice();
            console.log(_this.listsFiltered);
        });
        this.lists = this.eventservice.getTaskData()
            .subscribe(function (res) {
            // console.log(res)
            var arr = [];
            for (var prop in res) {
                // console.log(arr)
                arr.push(res[prop]);
            }
            console.log("find new listed jobs");
            _this.lists = arr;
            console.log(_this.lists);
            _this.listsFiltered = _this.lists;
            _this.ready = true;
            // Have added this in here to ensure the search data is retained... needs a review :)
            _this.search.data.subscribe(function (data) {
                console.log("1: is anything coming into here?: " + data);
                _this.searchData = data;
                console.log("2: is anything coming into here?: " + _this.searchData);
                // Also want to update scheduled tasks to show only filtered search data
                console.log(_this.listsFiltered);
                _this.listsFiltered = _this.lists.filter(function (input) {
                    return String(input.Tasks[0].taskName).toLowerCase().includes(data.toLowerCase());
                });
                _this.listsFiltered = _this.listsFiltered.slice();
                console.log(_this.listsFiltered);
            });
        }, function (err) {
            console.log("Error occurred in loading lists");
        });
    };
    TasksViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks-view',
            template: __webpack_require__(/*! ./tasks-view.component.html */ "./src/app/tasks-view/tasks-view.component.html"),
            styles: [__webpack_require__(/*! ./tasks-view.component.scss */ "./src/app/tasks-view/tasks-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"], _search_service_service__WEBPACK_IMPORTED_MODULE_3__["SearchServiceService"]])
    ], TasksViewComponent);
    return TasksViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mcdowelg\Documents\Angular\frontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map