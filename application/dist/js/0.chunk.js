webpackJsonpac__name_([0],{

/***/ 1275:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(10);
var home_routing_1 = __webpack_require__(1279);
var smartadmin_module_1 = __webpack_require__(1300);
var home_component_1 = __webpack_require__(1277);
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            home_routing_1.homeRouting,
            smartadmin_module_1.SmartadminModule
        ],
        declarations: [home_component_1.HomeComponent]
    }),
    __metadata("design:paramtypes", [])
], HomeModule);
exports.HomeModule = HomeModule;


/***/ },

/***/ 1276:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ },

/***/ 1277:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        template: __webpack_require__(1316),
        styles: [__webpack_require__(1323)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ },

/***/ 1278:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(10);
var easy_pie_chart_container_directive_1 = __webpack_require__(1285);
var sparkline_container_directive_1 = __webpack_require__(1286);
var InlineGraphsModule = (function () {
    function InlineGraphsModule() {
    }
    return InlineGraphsModule;
}());
InlineGraphsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [easy_pie_chart_container_directive_1.EasyPieChartContainer, sparkline_container_directive_1.SparklineContainer],
        exports: [easy_pie_chart_container_directive_1.EasyPieChartContainer, sparkline_container_directive_1.SparklineContainer],
    }),
    __metadata("design:paramtypes", [])
], InlineGraphsModule);
exports.InlineGraphsModule = InlineGraphsModule;


/***/ },

/***/ 1279:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(39);
var home_component_1 = __webpack_require__(1277);
exports.homeRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        data: {
            pageTitle: 'Home'
        }
    }
];
exports.homeRouting = router_1.RouterModule.forChild(exports.homeRoutes);


/***/ },

/***/ 1280:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var OnOffSwitchComponent = (function () {
    function OnOffSwitchComponent() {
        this.modelChange = new core_1.EventEmitter();
    }
    OnOffSwitchComponent.prototype.ngOnInit = function () {
        this.value = this.model;
        this.widgetId = 'on-off-switch' + OnOffSwitchComponent.widgetsCounter++;
    };
    OnOffSwitchComponent.prototype.onChange = function () {
        this.modelChange.emit(this.value);
    };
    return OnOffSwitchComponent;
}());
OnOffSwitchComponent.widgetsCounter = 0;
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], OnOffSwitchComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OnOffSwitchComponent.prototype, "model", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OnOffSwitchComponent.prototype, "modelChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OnOffSwitchComponent.prototype, "value", void 0);
OnOffSwitchComponent = __decorate([
    core_1.Component({
        selector: 'on-off-switch',
        template: __webpack_require__(1317),
    }),
    __metadata("design:paramtypes", [])
], OnOffSwitchComponent);
exports.OnOffSwitchComponent = OnOffSwitchComponent;


/***/ },

/***/ 1281:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(10);
var on_off_switch_component_1 = __webpack_require__(1280);
var forms_1 = __webpack_require__(29);
var OnOffSwitchModule = (function () {
    function OnOffSwitchModule() {
    }
    return OnOffSwitchModule;
}());
OnOffSwitchModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, forms_1.FormsModule
        ],
        declarations: [on_off_switch_component_1.OnOffSwitchComponent],
        exports: [on_off_switch_component_1.OnOffSwitchComponent]
    }),
    __metadata("design:paramtypes", [])
], OnOffSwitchModule);
exports.OnOffSwitchModule = OnOffSwitchModule;


/***/ },

/***/ 1282:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var dom_helpers_1 = __webpack_require__(1305);
var Select2Directive = (function () {
    function Select2Directive(el) {
        this.el = el;
        dom_helpers_1.addClassName(this.el.nativeElement, ['sa-cloak', 'sa-hidden']);
    }
    Select2Directive.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 1319)).then(function () {
            $(_this.el.nativeElement).select2();
            dom_helpers_1.removeClassName(_this.el.nativeElement, ['sa-hidden']);
        });
    };
    return Select2Directive;
}());
Select2Directive = __decorate([
    core_1.Directive({
        selector: '[select2]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], Select2Directive);
exports.Select2Directive = Select2Directive;
var _a;


/***/ },

/***/ 1283:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(10);
var select2_directive_1 = __webpack_require__(1282);
var Select2Module = (function () {
    function Select2Module() {
    }
    return Select2Module;
}());
Select2Module = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [select2_directive_1.Select2Directive],
        exports: [select2_directive_1.Select2Directive],
    }),
    __metadata("design:paramtypes", [])
], Select2Module);
exports.Select2Module = Select2Module;


/***/ },

/***/ 1284:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(29);
var common_1 = __webpack_require__(10);
var select2_module_1 = __webpack_require__(1283);
var on_off_switch_module_1 = __webpack_require__(1281);
var SmartadminFormsLiteModule = (function () {
    function SmartadminFormsLiteModule() {
    }
    return SmartadminFormsLiteModule;
}());
SmartadminFormsLiteModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule],
        declarations: [],
        exports: [
            select2_module_1.Select2Module, on_off_switch_module_1.OnOffSwitchModule
        ]
    }),
    __metadata("design:paramtypes", [])
], SmartadminFormsLiteModule);
exports.SmartadminFormsLiteModule = SmartadminFormsLiteModule;


/***/ },

/***/ 1285:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
__webpack_require__(1320);
var EasyPieChartContainer = (function () {
    function EasyPieChartContainer(container) {
        this.container = container;
        this.counter = 0;
    }
    EasyPieChartContainer.prototype.render = function () {
        $('.easy-pie-chart', this.container.nativeElement).each(function (idx, element) {
            var $this = $(element), barColor = $this.css('color') || $this.data('pie-color'), trackColor = $this.data('pie-track-color') || 'rgba(0,0,0,0.04)', size = parseInt($this.data('pie-size')) || 25;
            $this.easyPieChart({
                barColor: barColor,
                trackColor: trackColor,
                scaleColor: false,
                lineCap: 'butt',
                lineWidth: size / 8.5,
                animate: 1500,
                rotate: -90,
                size: size,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        });
    };
    EasyPieChartContainer.prototype.ngAfterContentChecked = function () {
        var _this = this;
        var counter = $('.easy-pie-chart').length;
        if (counter != this.counter) {
            this.counter = counter;
            setTimeout(function () {
                _this.render();
            }, 25);
        }
    };
    EasyPieChartContainer.prototype.ngAfterContentInit = function () {
        this.render();
    };
    return EasyPieChartContainer;
}());
EasyPieChartContainer = __decorate([
    core_1.Directive({
        selector: '[saEasyPieChartContainer]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], EasyPieChartContainer);
exports.EasyPieChartContainer = EasyPieChartContainer;
var _a;


/***/ },

/***/ 1286:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
__webpack_require__(1321);
var SparklineContainer = (function () {
    function SparklineContainer(el) {
        this.el = el;
        this.container = this.el.nativeElement;
    }
    SparklineContainer.prototype.ngOnInit = function () {
        this.drawSparklines();
    };
    SparklineContainer.prototype.barChart = function ($el) {
        var barColor = $el.data('sparkline-bar-color') || $el.css('color') || '#0000f0';
        var sparklineHeight = $el.data('sparkline-height') || '26px';
        var sparklineBarWidth = $el.data('sparkline-barwidth') || 5;
        var sparklineBarSpacing = $el.data('sparkline-barspacing') || 2;
        var sparklineNegBarColor = $el.data('sparkline-negbar-color') || '#A90329';
        var sparklineStackedColor = $el.data('sparkline-barstacked-color') || ["#A90329", "#0099c6", "#98AA56", "#da532c", "#4490B1", "#6E9461", "#990099", "#B4CAD3"];
        $el.sparkline('html', {
            barColor: barColor,
            type: 'bar',
            height: sparklineHeight,
            barWidth: sparklineBarWidth,
            barSpacing: sparklineBarSpacing,
            stackedBarColor: sparklineStackedColor,
            negBarColor: sparklineNegBarColor,
            zeroAxis: 'false',
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.lineChart = function ($el) {
        var sparklineHeight = $el.data('sparkline-height') || '20px';
        var sparklineWidth = $el.data('sparkline-width') || '90px';
        var thisLineColor = $el.data('sparkline-line-color') || $el.css('color') || '#0000f0';
        var thisLineWidth = $el.data('sparkline-line-width') || 1;
        var thisFill = $el.data('fill-color') || '#c0d0f0';
        var thisSpotColor = $el.data('sparkline-spot-color') || '#f08000';
        var thisMinSpotColor = $el.data('sparkline-minspot-color') || '#ed1c24';
        var thisMaxSpotColor = $el.data('sparkline-maxspot-color') || '#f08000';
        var thishighlightSpotColor = $el.data('sparkline-highlightspot-color') || '#50f050';
        var thisHighlightLineColor = $el.data('sparkline-highlightline-color') || 'f02020';
        var thisSpotRadius = $el.data('sparkline-spotradius') || 1.5;
        var thisChartMinYRange = $el.data('sparkline-min-y');
        var thisChartMaxYRange = $el.data('sparkline-max-y');
        var thisChartMinXRange = $el.data('sparkline-min-x');
        var thisChartMaxXRange = $el.data('sparkline-max-x');
        var thisMinNormValue = $el.data('min-val');
        var thisMaxNormValue = $el.data('max-val');
        var thisNormColor = $el.data('norm-color') || '#c0c0c0';
        var thisDrawNormalOnTop = $el.data('draw-normal') || false;
        $el.sparkline('html', {
            type: 'line',
            width: sparklineWidth,
            height: sparklineHeight,
            lineWidth: thisLineWidth,
            lineColor: thisLineColor,
            fillColor: thisFill,
            spotColor: thisSpotColor,
            minSpotColor: thisMinSpotColor,
            maxSpotColor: thisMaxSpotColor,
            highlightSpotColor: thishighlightSpotColor,
            highlightLineColor: thisHighlightLineColor,
            spotRadius: thisSpotRadius,
            chartRangeMin: thisChartMinYRange,
            chartRangeMax: thisChartMaxYRange,
            chartRangeMinX: thisChartMinXRange,
            chartRangeMaxX: thisChartMaxXRange,
            normalRangeMin: thisMinNormValue,
            normalRangeMax: thisMaxNormValue,
            normalRangeColor: thisNormColor,
            drawNormalOnTop: thisDrawNormalOnTop,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.pieChart = function ($el) {
        var pieColors = $el.data('sparkline-piecolor') || ["#B4CAD3", "#4490B1", "#98AA56", "#da532c", "#6E9461", "#0099c6", "#990099", "#717D8A"];
        var pieWidthHeight = $el.data('sparkline-piesize') || 90;
        var pieBorderColor = $el.data('border-color') || '#45494C';
        var pieOffset = $el.data('sparkline-offset') || 0;
        $el.sparkline('html', {
            type: 'pie',
            width: pieWidthHeight,
            height: pieWidthHeight,
            tooltipFormat: '<span style="color: {{color}}">&#9679;</span> ({{percent.1}}%)',
            sliceColors: pieColors,
            borderWidth: 1,
            offset: pieOffset,
            borderColor: pieBorderColor,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.boxChart = function ($el) {
        var thisBoxWidth = $el.data('sparkline-width') || 'auto';
        var thisBoxHeight = $el.data('sparkline-height') || 'auto';
        var thisBoxRaw = $el.data('sparkline-boxraw');
        var thisBoxTarget = $el.data('sparkline-targetval');
        var thisBoxMin = $el.data('sparkline-min');
        var thisBoxMax = $el.data('sparkline-max');
        var thisShowOutlier = $el.data('sparkline-showoutlier') || true;
        var thisIQR = $el.data('sparkline-outlier-iqr') || 1.5;
        var thisBoxSpotRadius = $el.data('sparkline-spotradius') || 1.5;
        var thisBoxLineColor = $el.css('color') || '#000000';
        var thisBoxFillColor = $el.data('fill-color') || '#c0d0f0';
        var thisBoxWhisColor = $el.data('sparkline-whis-color') || '#000000';
        var thisBoxOutlineColor = $el.data('sparkline-outline-color') || '#303030';
        var thisBoxOutlineFill = $el.data('sparkline-outlinefill-color') || '#f0f0f0';
        var thisBoxMedianColor = $el.data('sparkline-outlinemedian-color') || '#f00000';
        var thisBoxTargetColor = $el.data('sparkline-outlinetarget-color') || '#40a020';
        $el.sparkline('html', {
            type: 'box',
            width: thisBoxWidth,
            height: thisBoxHeight,
            raw: thisBoxRaw,
            target: thisBoxTarget,
            minValue: thisBoxMin,
            maxValue: thisBoxMax,
            showOutliers: thisShowOutlier,
            outlierIQR: thisIQR,
            spotRadius: thisBoxSpotRadius,
            boxLineColor: thisBoxLineColor,
            boxFillColor: thisBoxFillColor,
            whiskerColor: thisBoxWhisColor,
            outlierLineColor: thisBoxOutlineColor,
            outlierFillColor: thisBoxOutlineFill,
            medianColor: thisBoxMedianColor,
            targetColor: thisBoxTargetColor,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.bulletChart = function ($el) {
        var thisBulletHeight = $el.data('sparkline-height') || 'auto';
        var thisBulletWidth = $el.data('sparkline-width') || 2;
        var thisBulletColor = $el.data('sparkline-bullet-color') || '#ed1c24';
        var thisBulletPerformanceColor = $el.data('sparkline-performance-color') || '#3030f0';
        var thisBulletRangeColors = $el.data('sparkline-bulletrange-color') || ["#d3dafe", "#a8b6ff", "#7f94ff"];
        $el.sparkline('html', {
            type: 'bullet',
            height: thisBulletHeight,
            targetWidth: thisBulletWidth,
            targetColor: thisBulletColor,
            performanceColor: thisBulletPerformanceColor,
            rangeColors: thisBulletRangeColors,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.discreteChart = function ($el) {
        var thisDiscreteHeight = $el.data('sparkline-height') || 26;
        var thisDiscreteWidth = $el.data('sparkline-width') || 50;
        var thisDiscreteLineColor = $el.css('color');
        var thisDiscreteLineHeight = $el.data('sparkline-line-height') || 5;
        var thisDiscreteThrushold = $el.data('sparkline-threshold');
        var thisDiscreteThrusholdColor = $el.data('sparkline-threshold-color') || '#ed1c24';
        $el.sparkline('html', {
            type: 'discrete',
            width: thisDiscreteWidth,
            height: thisDiscreteHeight,
            lineColor: thisDiscreteLineColor,
            lineHeight: thisDiscreteLineHeight,
            thresholdValue: thisDiscreteThrushold,
            thresholdColor: thisDiscreteThrusholdColor,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.tristaneChart = function ($el) {
        var thisTristateHeight = $el.data('sparkline-height') || 26;
        var thisTristatePosBarColor = $el.data('sparkline-posbar-color') || '#60f060';
        var thisTristateNegBarColor = $el.data('sparkline-negbar-color') || '#f04040';
        var thisTristateZeroBarColor = $el.data('sparkline-zerobar-color') || '#909090';
        var thisTristateBarWidth = $el.data('sparkline-barwidth') || 5;
        var thisTristateBarSpacing = $el.data('sparkline-barspacing') || 2;
        var thisZeroAxis = $el.data('sparkline-zeroaxis');
        $el.sparkline('html', {
            type: 'tristate',
            height: thisTristateHeight,
            posBarColor: thisTristatePosBarColor,
            negBarColor: thisTristateNegBarColor,
            zeroBarColor: thisTristateZeroBarColor,
            barWidth: thisTristateBarWidth,
            barSpacing: thisTristateBarSpacing,
            zeroAxis: thisZeroAxis,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.compositeBarChart = function ($el) {
        var sparklineHeight = $el.data('sparkline-height') || '20px';
        var sparklineWidth = $el.data('sparkline-width') || '100%';
        var sparklineBarWidth = $el.data('sparkline-barwidth') || 3;
        var thisLineWidth = $el.data('sparkline-line-width') || 1;
        var thisLineColor = $el.data('sparkline-color-top') || '#ed1c24';
        var thisBarColor = $el.data('sparkline-color-bottom') || '#333333';
        $el.sparkline($el.data('sparkline-bar-val'), {
            type: 'bar',
            width: sparklineWidth,
            height: sparklineHeight,
            barColor: thisBarColor,
            barWidth: sparklineBarWidth,
            tooltipContainer: this.container
        });
        $el.sparkline($el.data('sparkline-line-val'), {
            width: sparklineWidth,
            height: sparklineHeight,
            lineColor: thisLineColor,
            lineWidth: thisLineWidth,
            composite: true,
            fillColor: false,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.compositeLineChart = function ($el) {
        // @todo webpack gets stuck on chunk optimization if uncomment defaults
        var sparklineHeight = $el.data('sparkline-height'); // || '20px';
        var sparklineWidth = $el.data('sparkline-width'); // || '90px';
        var sparklineValue = $el.data('sparkline-bar-val');
        var sparklineValueSpots1 = $el.data('sparkline-bar-val-spots-top');
        var sparklineValueSpots2 = $el.data('sparkline-bar-val-spots-bottom');
        var thisLineWidth1 = $el.data('sparkline-line-width-top'); //  || 1;
        var thisLineWidth2 = $el.data('sparkline-line-width-bottom'); // || 1;
        var thisLineColor1 = $el.data('sparkline-color-top'); //  || '#333333';
        var thisLineColor2 = $el.data('sparkline-color-bottom'); //  || '#ed1c24';
        var thisSpotRadius1 = $el.data('sparkline-spotradius-top'); // || 1.5;
        var thisSpotRadius2 = $el.data('sparkline-spotradius-bottom'); // || thisSpotRadius1;
        var thisSpotColor = $el.data('sparkline-spot-color'); // || '#f08000';
        var thisMinSpotColor1 = $el.data('sparkline-minspot-color-top'); // || '#ed1c24';
        var thisMaxSpotColor1 = $el.data('sparkline-maxspot-color-top'); //  || '#f08000';
        var thisMinSpotColor2 = $el.data('sparkline-minspot-color-bottom'); // || thisMinSpotColor1;
        var thisMaxSpotColor2 = $el.data('sparkline-maxspot-color-bottom'); //  || thisMaxSpotColor1;
        var thishighlightSpotColor1 = $el.data('sparkline-highlightspot-color-top'); //  || '#50f050';
        var thisHighlightLineColor1 = $el.data('sparkline-highlightline-color-top'); // || '#f02020';
        var thishighlightSpotColor2 = $el.data('sparkline-highlightspot-color-bottom'); // || thishighlightSpotColor1;
        var thisHighlightLineColor2 = $el.data('sparkline-highlightline-color-bottom'); // || thisHighlightLineColor1;
        var thisFillColor1 = $el.data('sparkline-fillcolor-top'); // || 'transparent';
        var thisFillColor2 = $el.data('sparkline-fillcolor-bottom'); // || 'transparent';
        $el.sparkline(sparklineValue, {
            type: 'line',
            spotRadius: thisSpotRadius1,
            spotColor: thisSpotColor,
            minSpotColor: thisMinSpotColor1,
            maxSpotColor: thisMaxSpotColor1,
            highlightSpotColor: thishighlightSpotColor1,
            highlightLineColor: thisHighlightLineColor1,
            valueSpots: sparklineValueSpots1,
            lineWidth: thisLineWidth1,
            width: sparklineWidth,
            height: sparklineHeight,
            lineColor: thisLineColor1,
            fillColor: thisFillColor1,
            tooltipContainer: this.container
        });
        $el.sparkline($el.data('sparkline-line-val'), {
            type: 'line',
            spotRadius: thisSpotRadius2,
            spotColor: thisSpotColor,
            minSpotColor: thisMinSpotColor2,
            maxSpotColor: thisMaxSpotColor2,
            highlightSpotColor: thishighlightSpotColor2,
            highlightLineColor: thisHighlightLineColor2,
            valueSpots: sparklineValueSpots2,
            lineWidth: thisLineWidth2,
            width: sparklineWidth,
            height: sparklineHeight,
            lineColor: thisLineColor2,
            composite: true,
            fillColor: thisFillColor2,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.drawSparklines = function () {
        var _this = this;
        $('.sparkline:not(:has(>canvas))', this.container).each(function (i, el) {
            var $el = $(el), sparklineType = $el.data('sparkline-type') || 'bar';
            if (sparklineType == 'bar') {
                _this.barChart($el);
            }
            if (sparklineType == 'line') {
                _this.lineChart($el);
            }
            if (sparklineType == 'pie') {
                _this.pieChart($el);
            }
            if (sparklineType == 'box') {
                _this.boxChart($el);
            }
            if (sparklineType == 'bullet') {
                _this.bulletChart($el);
            }
            if (sparklineType == 'discrete') {
                _this.discreteChart($el);
            }
            if (sparklineType == 'tristate') {
                _this.tristaneChart($el);
            }
            if (sparklineType == 'compositebar') {
                _this.compositeBarChart($el);
            }
            if (sparklineType == 'compositeline') {
                _this.compositeLineChart($el);
            }
        });
    };
    return SparklineContainer;
}());
SparklineContainer = __decorate([
    core_1.Directive({
        selector: '[saSparklineContainer]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], SparklineContainer);
exports.SparklineContainer = SparklineContainer;
var _a;


/***/ },

/***/ 1287:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var footer_component_1 = __webpack_require__(679);
exports.FooterComponent = footer_component_1.FooterComponent;


/***/ },

/***/ 1288:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var activities_message_component_1 = __webpack_require__(680);
exports.ActivitiesMessageComponent = activities_message_component_1.ActivitiesMessageComponent;


/***/ },

/***/ 1289:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var activities_notification_component_1 = __webpack_require__(681);
exports.ActivitiesNotificationComponent = activities_notification_component_1.ActivitiesNotificationComponent;


/***/ },

/***/ 1290:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var activities_task_component_1 = __webpack_require__(682);
exports.ActivitiesTaskComponent = activities_task_component_1.ActivitiesTaskComponent;


/***/ },

/***/ 1291:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var activities_component_1 = __webpack_require__(683);
exports.ActivitiesComponent = activities_component_1.ActivitiesComponent;
var activities_message_1 = __webpack_require__(1288);
exports.ActivitiesMessageComponent = activities_message_1.ActivitiesMessageComponent;
var activities_task_1 = __webpack_require__(1290);
exports.ActivitiesTaskComponent = activities_task_1.ActivitiesTaskComponent;
var activities_notification_1 = __webpack_require__(1289);
exports.ActivitiesNotificationComponent = activities_notification_1.ActivitiesNotificationComponent;


/***/ },

/***/ 1292:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var collapse_menu_component_1 = __webpack_require__(684);
exports.CollapseMenuComponent = collapse_menu_component_1.CollapseMenuComponent;


/***/ },

/***/ 1293:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var full_screen_component_1 = __webpack_require__(685);
exports.FullScreenComponent = full_screen_component_1.FullScreenComponent;


/***/ },

/***/ 1294:
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var header_component_1 = __webpack_require__(686);
exports.HeaderComponent = header_component_1.HeaderComponent;
var header_module_1 = __webpack_require__(687);
exports.HeaderModule = header_module_1.HeaderModule;
__export(__webpack_require__(1293));
__export(__webpack_require__(1292));
__export(__webpack_require__(1295));
__export(__webpack_require__(1291));


/***/ },

/***/ 1295:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var recent_projects_component_1 = __webpack_require__(688);
exports.RecentProjectsComponent = recent_projects_component_1.RecentProjectsComponent;
var recent_projects_service_1 = __webpack_require__(689);
exports.RecentProjectsService = recent_projects_service_1.RecentProjectsService;


/***/ },

/***/ 1296:
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var layout_switcher_component_1 = __webpack_require__(690);
exports.LayoutSwitcherComponent = layout_switcher_component_1.LayoutSwitcherComponent;
var layout_service_1 = __webpack_require__(54);
exports.LayoutService = layout_service_1.LayoutService;
var layout_module_1 = __webpack_require__(691);
exports.SmartadminLayoutModule = layout_module_1.SmartadminLayoutModule;
__export(__webpack_require__(1287));
__export(__webpack_require__(1294));
__export(__webpack_require__(1297));
__export(__webpack_require__(1298));
__export(__webpack_require__(1299));


/***/ },

/***/ 1297:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var navigation_component_1 = __webpack_require__(694);
exports.NavigationComponent = navigation_component_1.NavigationComponent;
var big_breadcrumbs_component_1 = __webpack_require__(692);
exports.BigBreadcrumbsComponent = big_breadcrumbs_component_1.BigBreadcrumbsComponent;
var minify_menu_component_1 = __webpack_require__(693);
exports.MinifyMenuComponent = minify_menu_component_1.MinifyMenuComponent;
var smart_menu_directive_1 = __webpack_require__(696);
exports.SmartMenuDirective = smart_menu_directive_1.SmartMenuDirective;
var navigation_module_1 = __webpack_require__(695);
exports.NavigationModule = navigation_module_1.NavigationModule;


/***/ },

/***/ 1298:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ribbon_component_1 = __webpack_require__(697);
exports.RibbonComponent = ribbon_component_1.RibbonComponent;


/***/ },

/***/ 1299:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var shortcut_component_1 = __webpack_require__(698);
exports.ShortcutComponent = shortcut_component_1.ShortcutComponent;


/***/ },

/***/ 1300:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(10);
var forms_1 = __webpack_require__(29);
var http_1 = __webpack_require__(180);
var router_1 = __webpack_require__(39);
var ng2_bootstrap_1 = __webpack_require__(113);
var ng2_popover_1 = __webpack_require__(700);
var layout_1 = __webpack_require__(1296);
var i18n_module_1 = __webpack_require__(333);
var voice_control_module_1 = __webpack_require__(699);
var smartadmin_widgets_module_1 = __webpack_require__(1306);
var utils_module_1 = __webpack_require__(216);
// import {ChatModule} from "./chat/chat.module";
var stats_module_1 = __webpack_require__(1302);
var inline_graphs_module_1 = __webpack_require__(1278);
var smartadmin_forms_lite_module_1 = __webpack_require__(1284);
var smart_progressbar_module_1 = __webpack_require__(1304);
var SmartadminModule = (function () {
    function SmartadminModule() {
    }
    return SmartadminModule;
}());
SmartadminModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule,
        ],
        declarations: [],
        exports: [
            common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule,
            ng2_bootstrap_1.ModalModule,
            ng2_bootstrap_1.ButtonsModule,
            ng2_bootstrap_1.AlertModule,
            ng2_bootstrap_1.TabsModule,
            ng2_bootstrap_1.TooltipModule,
            ng2_bootstrap_1.DropdownModule,
            ng2_bootstrap_1.ProgressbarModule,
            ng2_popover_1.PopoverModule,
            layout_1.SmartadminLayoutModule,
            i18n_module_1.I18nModule,
            utils_module_1.UtilsModule,
            smartadmin_forms_lite_module_1.SmartadminFormsLiteModule,
            smart_progressbar_module_1.SmartProgressbarModule,
            inline_graphs_module_1.InlineGraphsModule,
            smartadmin_widgets_module_1.SmartadminWidgetsModule,
            // ChatModule,
            stats_module_1.StatsModule,
            voice_control_module_1.VoiceControlModule,
        ]
    }),
    __metadata("design:paramtypes", [])
], SmartadminModule);
exports.SmartadminModule = SmartadminModule;


/***/ },

/***/ 1301:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var StatsComponent = (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    return StatsComponent;
}());
StatsComponent = __decorate([
    core_1.Component({
        selector: 'sa-stats',
        template: __webpack_require__(1318)
    }),
    __metadata("design:paramtypes", [])
], StatsComponent);
exports.StatsComponent = StatsComponent;


/***/ },

/***/ 1302:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(10);
var stats_component_1 = __webpack_require__(1301);
var inline_graphs_module_1 = __webpack_require__(1278);
var StatsModule = (function () {
    function StatsModule() {
    }
    return StatsModule;
}());
StatsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, inline_graphs_module_1.InlineGraphsModule],
        declarations: [stats_component_1.StatsComponent],
        exports: [stats_component_1.StatsComponent],
    }),
    __metadata("design:paramtypes", [])
], StatsModule);
exports.StatsModule = StatsModule;


/***/ },

/***/ 1303:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var ProgressbarDirective = (function () {
    function ProgressbarDirective(el) {
        this.el = el;
    }
    ProgressbarDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 1310)).then(function () {
            $(_this.el.nativeElement).progressbar(_this.saProgressbar || {
                display_text: 'fill'
            });
        });
    };
    return ProgressbarDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProgressbarDirective.prototype, "saProgressbar", void 0);
ProgressbarDirective = __decorate([
    core_1.Directive({
        selector: '[saProgressbar]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], ProgressbarDirective);
exports.ProgressbarDirective = ProgressbarDirective;
var _a;


/***/ },

/***/ 1304:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(10);
var progressbar_directive_1 = __webpack_require__(1303);
var SmartProgressbarModule = (function () {
    function SmartProgressbarModule() {
    }
    return SmartProgressbarModule;
}());
SmartProgressbarModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [progressbar_directive_1.ProgressbarDirective],
        exports: [progressbar_directive_1.ProgressbarDirective],
    }),
    __metadata("design:paramtypes", [])
], SmartProgressbarModule);
exports.SmartProgressbarModule = SmartProgressbarModule;


/***/ },

/***/ 1305:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * by griga
 */

function addClassName(el, classNames) {
    if (!Array.isArray(classNames)) {
        classNames = [classNames];
    }
    classNames.forEach(function (className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else {
            el.className += ' ' + className;
        }
    });
    return el;
}
exports.addClassName = addClassName;
function removeClassName(el, classNames) {
    if (!Array.isArray(classNames)) {
        classNames = [classNames];
    }
    classNames.forEach(function (className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    });
    return el;
}
exports.removeClassName = removeClassName;


/***/ },

/***/ 1306:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var widget_component_1 = __webpack_require__(1308);
var widgets_grid_component_1 = __webpack_require__(1309);
var common_1 = __webpack_require__(10);
var SmartadminWidgetsModule = (function () {
    function SmartadminWidgetsModule() {
    }
    return SmartadminWidgetsModule;
}());
SmartadminWidgetsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [widget_component_1.WidgetComponent, widgets_grid_component_1.WidgetsGridComponent],
        exports: [widget_component_1.WidgetComponent, widgets_grid_component_1.WidgetsGridComponent]
    }),
    __metadata("design:paramtypes", [])
], SmartadminWidgetsModule);
exports.SmartadminWidgetsModule = SmartadminWidgetsModule;


/***/ },

/***/ 1307:
/***/ function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    grid: 'article',
    widgets: '.jarviswidget',
    localStorage: true,
    deleteSettingsKey: '#deletesettingskey-options',
    settingsKeyLabel: 'Reset settings?',
    deletePositionKey: '#deletepositionkey-options',
    positionKeyLabel: 'Reset position?',
    sortable: true,
    buttonsHidden: false,
    // toggle button
    toggleButton: true,
    toggleClass: 'fa fa-minus | fa fa-plus',
    toggleSpeed: 200,
    onToggle: function () {
    },
    // delete btn
    deleteButton: true,
    deleteMsg: 'Warning: This action cannot be undone!',
    deleteClass: 'fa fa-times',
    deleteSpeed: 200,
    onDelete: function () {
    },
    // edit btn
    editButton: true,
    editPlaceholder: '.jarviswidget-editbox',
    editClass: 'fa fa-cog | fa fa-save',
    editSpeed: 200,
    onEdit: function () {
    },
    // color button
    colorButton: true,
    // full screen
    fullscreenButton: true,
    fullscreenClass: 'fa fa-expand | fa fa-compress',
    fullscreenDiff: 3,
    onFullscreen: function () {
    },
    // custom btn
    customButton: false,
    customClass: 'folder-10 | next-10',
    customStart: function () {
        alert('Hello you, this is a custom button...');
    },
    customEnd: function () {
        alert('bye, till next time...');
    },
    // order
    buttonOrder: '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
    opacity: 1.0,
    dragHandle: '> header',
    placeholderClass: 'jarviswidget-placeholder',
    indicator: true,
    indicatorTime: 600,
    ajax: true,
    timestampPlaceholder: '.jarviswidget-timestamp',
    timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
    refreshButton: true,
    refreshButtonClass: 'fa fa-refresh',
    labelError: 'Sorry but there was a error:',
    labelUpdated: 'Last Update:',
    labelRefresh: 'Refresh',
    labelDelete: 'Delete widget:',
    afterLoad: function () {
    },
    rtl: false,
    onChange: function () {
    },
    onSave: function () {
    },
    ajaxnav: true
};


/***/ },

/***/ 1308:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(39);
var WidgetComponent = (function () {
    function WidgetComponent(el, route, router) {
        this.el = el;
        this.route = route;
        this.router = router;
        this.colorbutton = true;
        this.editbutton = true;
        this.togglebutton = true;
        this.deletebutton = true;
        this.fullscreenbutton = true;
        this.custombutton = false;
        this.collapsed = false;
        this.sortable = true;
        this.hidden = false;
        this.load = false;
        this.refresh = false;
    }
    WidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.widgetId = this.genId();
        var widget = this.el.nativeElement.children[0];
        if (this.sortable) {
            widget.className += ' jarviswidget-sortable';
        }
        if (this.color) {
            widget.className += (' jarviswidget-color-' + this.color);
        }
        ['colorbutton',
            'editbutton',
            'togglebutton',
            'deletebutton',
            'fullscreenbutton',
            'custombutton',
            'sortable'
        ].forEach(function (option) {
            if (!_this[option]) {
                widget.setAttribute('data-widget-' + option, 'false');
            }
        });
        [
            'hidden',
            'collapsed'
        ].forEach(function (option) {
            if (_this[option]) {
                widget.setAttribute('data-widget-' + option, 'true');
            }
        });
        // ['refresh', 'load'].forEach(function (option) {
        //   if (this[option])
        //     widgetProps['data-widget-' + option] = this[option]
        // }.bind(this));
    };
    WidgetComponent.prototype.genId = function () {
        if (this.name) {
            return this.name;
        }
        else {
            var heading = this.el.nativeElement.querySelector('header h2');
            var id = heading ? heading.textContent.trim() : 'jarviswidget-' + WidgetComponent.counter++;
            id = id.toLowerCase().replace(/\W+/gm, '-');
            var url = this.router.url.substr(1).replace(/\//g, '-');
            id = url + '--' + id;
            return id;
        }
    };
    WidgetComponent.prototype.ngAfterViewInit = function () {
        var $widget = $(this.el.nativeElement);
        if (this.editbutton) {
            $widget.find('.widget-body').prepend('<div class="jarviswidget-editbox"><input class="form-control" type="text"></div>');
        }
        var isFiller = $widget.hasClass('sa-fx-col');
        if ($widget.attr('class')) {
            $widget.find('.jarviswidget').addClass($widget.attr('class'));
            $widget.attr('class', '');
        }
        if (isFiller) {
            $widget.attr('class', 'sa-fx-col');
        }
    };
    return WidgetComponent;
}());
WidgetComponent.counter = 0;
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WidgetComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "colorbutton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "editbutton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "togglebutton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "deletebutton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "fullscreenbutton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "custombutton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "collapsed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "sortable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "hidden", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WidgetComponent.prototype, "color", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "load", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "refresh", void 0);
WidgetComponent = __decorate([
    core_1.Component({
        selector: 'sa-widget',
        template: "<div id=\"{{widgetId}}\" class=\"jarviswidget\"\n    \n  ><ng-content></ng-content></div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], WidgetComponent);
exports.WidgetComponent = WidgetComponent;
var _a, _b, _c;


/***/ },

/***/ 1309:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var widget_defaults_1 = __webpack_require__(1307);
var core_2 = __webpack_require__(0);
__webpack_require__(1322);
var WidgetsGridComponent = (function () {
    function WidgetsGridComponent(el) {
        this.el = el;
    }
    WidgetsGridComponent.prototype.ngAfterViewInit = function () {
        $('#widgets-grid', this.el.nativeElement).jarvisWidgets(widget_defaults_1.default);
    };
    return WidgetsGridComponent;
}());
WidgetsGridComponent = __decorate([
    core_1.Component({
        selector: 'sa-widgets-grid',
        template: "\n     <section id=\"widgets-grid\">\n       <ng-content></ng-content>\n     </section>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_2.ElementRef !== "undefined" && core_2.ElementRef) === "function" && _a || Object])
], WidgetsGridComponent);
exports.WidgetsGridComponent = WidgetsGridComponent;
var _a;


/***/ },

/***/ 1311:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1312)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ },

/***/ 1312:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },

/***/ 1314:
/***/ function(module, exports) {

module.exports = "/**!\n * easyPieChart\n * Lightweight plugin to render simple, animated and retina optimized pie charts\n *\n * @license \n * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)\n * @version 2.1.6\n **/\n!function(a,b){\"object\"==typeof exports?module.exports=b(require(\"jquery\")):\"function\"==typeof define&&define.amd?define([\"jquery\"],b):b(a.jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement(\"canvas\");a.appendChild(d),\"undefined\"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext(\"2d\");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,\"px\"].join(\"\"),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d=\"function\"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:\"#ef1e25\",trackColor:\"#f9f9f9\",scaleColor:\"#dfe0e0\",scaleLength:5,lineCap:\"round\",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}};if(\"undefined\"!=typeof b)d.renderer=b;else{if(\"undefined\"==typeof SVGRenderer)throw new Error(\"Please load either the SVG- or the CanvasRenderer\");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&\"undefined\"!=typeof c[b]?c[b]:d[b],\"function\"==typeof e[b]&&(e[b]=e[b].bind(this)));e.easing=\"string\"==typeof e.easing&&\"undefined\"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?jQuery.easing[e.easing]:d.easing,\"number\"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),\"boolean\"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute(\"data-percent\")&&this.update(parseFloat(a.getAttribute(\"data-percent\")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,\"easyPieChart\")||(d=a.extend({},b,a(this).data()),a.data(this,\"easyPieChart\",new c(this,d)))})}});"

/***/ },

/***/ 1315:
/***/ function(module, exports) {

module.exports = "/* jquery.sparkline 2.1.3 - http://omnipotent.net/jquery.sparkline/ \n Licensed under the New BSD License - see above site for details */\n!function(a,b,c){!function(a){\"function\"==typeof define&&define.amd?define([\"jquery\"],a):jQuery&&!jQuery.fn.sparkline&&a(jQuery)}(function(d){\"use strict\";var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K={},L=0;e=function(){return{common:{type:\"line\",lineColor:\"#00f\",fillColor:\"#cdf\",defaultPixelsPerValue:3,width:\"auto\",height:\"auto\",composite:!1,tagValuesAttribute:\"values\",tagOptionsPrefix:\"spark\",enableTagOptions:!1,enableHighlight:!0,highlightLighten:1.4,tooltipSkipNull:!0,tooltipPrefix:\"\",tooltipSuffix:\"\",disableHiddenCheck:!1,numberFormatter:!1,numberDigitGroupCount:3,numberDigitGroupSep:\",\",numberDecimalMark:\".\",disableTooltips:!1,disableInteraction:!1},line:{spotColor:\"#f80\",highlightSpotColor:\"#5f5\",highlightLineColor:\"#f22\",spotRadius:1.5,minSpotColor:\"#f80\",maxSpotColor:\"#f80\",lineWidth:1,normalRangeMin:c,normalRangeMax:c,normalRangeColor:\"#ccc\",drawNormalOnTop:!1,chartRangeMin:c,chartRangeMax:c,chartRangeMinX:c,chartRangeMaxX:c,tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:\"#3366cc\",negBarColor:\"#f44\",stackedBarColor:[\"#3366cc\",\"#dc3912\",\"#ff9900\",\"#109618\",\"#66aa00\",\"#dd4477\",\"#0099c6\",\"#990099\"],zeroColor:c,nullColor:c,zeroAxis:!0,barWidth:4,barSpacing:1,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,colorMap:c,tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:\"#6f6\",negBarColor:\"#f44\",zeroBarColor:\"#999\",colorMap:{},tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{\"-1\":\"Loss\",0:\"Draw\",1:\"Win\"}}},discrete:{lineHeight:\"auto\",thresholdColor:c,thresholdValue:0,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,tooltipFormat:new g(\"{{prefix}}{{value}}{{suffix}}\")},bullet:{targetColor:\"#f33\",targetWidth:3,performanceColor:\"#33f\",rangeColors:[\"#d3dafe\",\"#a8b6ff\",\"#7f94ff\"],base:c,tooltipFormat:new g(\"{{fieldkey:fields}} - {{value}}\"),tooltipValueLookups:{fields:{r:\"Range\",p:\"Performance\",t:\"Target\"}}},pie:{offset:0,sliceColors:[\"#3366cc\",\"#dc3912\",\"#ff9900\",\"#109618\",\"#66aa00\",\"#dd4477\",\"#0099c6\",\"#990099\"],borderWidth:0,borderColor:\"#000\",tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:!1,boxLineColor:\"#000\",boxFillColor:\"#cdf\",whiskerColor:\"#000\",outlierLineColor:\"#333\",outlierFillColor:\"#fff\",medianColor:\"#f00\",showOutliers:!0,outlierIQR:1.5,spotRadius:1.5,target:c,targetColor:\"#4a2\",chartRangeMax:c,chartRangeMin:c,tooltipFormat:new g(\"{{field:fields}}: {{value}}\"),tooltipFormatFieldlistKey:\"field\",tooltipValueLookups:{fields:{lq:\"Lower Quartile\",med:\"Median\",uq:\"Upper Quartile\",lo:\"Left Outlier\",ro:\"Right Outlier\",lw:\"Left Whisker\",rw:\"Right Whisker\"}}}}},D='.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)\";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;box-sizing: content-box;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',f=function(){var a,b;return a=function(){this.init.apply(this,arguments)},arguments.length>1?(arguments[0]?(a.prototype=d.extend(new arguments[0],arguments[arguments.length-1]),a._super=arguments[0].prototype):a.prototype=arguments[arguments.length-1],arguments.length>2&&(b=Array.prototype.slice.call(arguments,1,-1),b.unshift(a.prototype),d.extend.apply(d,b))):a.prototype=arguments[0],a.prototype.cls=a,a},d.SPFormatClass=g=f({fre:/\\{\\{([\\w.]+?)(:(.+?))?\\}\\}/g,precre:/(\\w+)\\.(\\d+)/,init:function(a,b){this.format=a,this.fclass=b},render:function(a,b,d){var e,f,g,h,i,j=this,k=a;return this.format.replace(this.fre,function(){var a;return f=arguments[1],g=arguments[3],e=j.precre.exec(f),e?(i=e[2],f=e[1]):i=!1,h=k[f],h===c?\"\":g&&b&&b[g]?(a=b[g],a.get?b[g].get(h)||h:b[g][h]||h):(m(h)&&(h=d.get(\"numberFormatter\")?d.get(\"numberFormatter\")(h):r(h,i,d.get(\"numberDigitGroupCount\"),d.get(\"numberDigitGroupSep\"),d.get(\"numberDecimalMark\"))),h)})}}),d.spformat=function(a,b){return new g(a,b)},h=function(a,b,c){return b>a?b:a>c?c:a},i=function(a,c){var d;return 2===c?(d=b.floor(a.length/2),a.length%2?a[d]:(a[d-1]+a[d])/2):a.length%2?(d=(a.length*c+c)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1]):(d=(a.length*c+2)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1])},j=function(a){var b;switch(a){case\"undefined\":a=c;break;case\"null\":a=null;break;case\"true\":a=!0;break;case\"false\":a=!1;break;default:b=parseFloat(a),a==b&&(a=b)}return a},k=function(a){var b,c=[];for(b=a.length;b--;)c[b]=j(a[b]);return c},l=function(a,b){var c,d,e=[];for(c=0,d=a.length;d>c;c++)a[c]!==b&&e.push(a[c]);return e},m=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},r=function(a,b,c,e,f){var g,h;for(a=(b===!1?parseFloat(a).toString():a.toFixed(b)).split(\"\"),g=(g=d.inArray(\".\",a))<0?a.length:g,g<a.length&&(a[g]=f),h=g-c;h>0;h-=c)a.splice(h,0,e);return a.join(\"\")},n=function(a,b,c){var d;for(d=b.length;d--;)if((!c||null!==b[d])&&b[d]!==a)return!1;return!0},o=function(a){var b,c=0;for(b=a.length;b--;)c+=\"number\"==typeof a[b]?a[b]:0;return c},q=function(a){return d.isArray(a)?a:[a]},p=function(b){var c,d;if(a.createStyleSheet)try{return a.createStyleSheet().cssText=b,void 0}catch(e){d=!0}c=a.createElement(\"style\"),c.type=\"text/css\",a.getElementsByTagName(\"head\")[0].appendChild(c),d?a.styleSheets[a.styleSheets.length-1].cssText=b:c[\"string\"==typeof a.body.style.WebkitAppearance?\"innerText\":\"innerHTML\"]=b},d.fn.simpledraw=function(b,e,f,g){var h,i;if(f&&(h=this.data(\"_jqs_vcanvas\")))return h;if(d.fn.sparkline.canvas===!1)return!1;if(d.fn.sparkline.canvas===c){var j=a.createElement(\"canvas\");if(j.getContext&&j.getContext(\"2d\"))d.fn.sparkline.canvas=function(a,b,c,d){return new H(a,b,c,d)};else{if(!a.namespaces||a.namespaces.v)return d.fn.sparkline.canvas=!1,!1;a.namespaces.add(\"v\",\"urn:schemas-microsoft-com:vml\",\"#default#VML\"),d.fn.sparkline.canvas=function(a,b,c){return new I(a,b,c)}}}return b===c&&(b=d(this).innerWidth()),e===c&&(e=d(this).innerHeight()),h=d.fn.sparkline.canvas(b,e,this,g),i=d(this).data(\"_jqs_mhandler\"),i&&i.registerCanvas(h),h},d.fn.cleardraw=function(){var a=this.data(\"_jqs_vcanvas\");a&&a.reset()},d.RangeMapClass=s=f({init:function(a){var b,c,d=[];for(b in a)a.hasOwnProperty(b)&&\"string\"==typeof b&&b.indexOf(\":\")>-1&&(c=b.split(\":\"),c[0]=0===c[0].length?-1/0:parseFloat(c[0]),c[1]=0===c[1].length?1/0:parseFloat(c[1]),c[2]=a[b],d.push(c));this.map=a,this.rangelist=d||!1},get:function(a){var b,d,e,f=this.rangelist;if((e=this.map[a])!==c)return e;if(f)for(b=f.length;b--;)if(d=f[b],d[0]<=a&&d[1]>=a)return d[2];return c}}),d.range_map=function(a){return new s(a)},t=f({init:function(a,b){var c=d(a);this.$el=c,this.options=b,this.currentPageX=0,this.currentPageY=0,this.el=a,this.splist=[],this.tooltip=null,this.over=!1,this.displayTooltips=!b.get(\"disableTooltips\"),this.highlightEnabled=!b.get(\"disableHighlight\")},registerSparkline:function(a){this.splist.push(a),this.over&&this.updateDisplay()},registerCanvas:function(a){var b=d(a.canvas);this.canvas=a,this.$canvas=b,b.mouseenter(d.proxy(this.mouseenter,this)),b.mouseleave(d.proxy(this.mouseleave,this)),b.click(d.proxy(this.mouseclick,this))},reset:function(a){this.splist=[],this.tooltip&&a&&(this.tooltip.remove(),this.tooltip=c)},mouseclick:function(a){var b=d.Event(\"sparklineClick\");b.originalEvent=a,b.sparklines=this.splist,this.$el.trigger(b)},mouseenter:function(b){d(a.body).unbind(\"mousemove.jqs\"),d(a.body).bind(\"mousemove.jqs\",d.proxy(this.mousemove,this)),this.over=!0,this.currentPageX=b.pageX,this.currentPageY=b.pageY,this.currentEl=b.target,!this.tooltip&&this.displayTooltips&&(this.tooltip=new u(this.options),this.tooltip.updatePosition(b.pageX,b.pageY)),this.updateDisplay()},mouseleave:function(){d(a.body).unbind(\"mousemove.jqs\");var b,c,e=this.splist,f=e.length,g=!1;for(this.over=!1,this.currentEl=null,this.tooltip&&(this.tooltip.remove(),this.tooltip=null),c=0;f>c;c++)b=e[c],b.clearRegionHighlight()&&(g=!0);g&&this.canvas.render()},mousemove:function(a){this.currentPageX=a.pageX,this.currentPageY=a.pageY,this.currentEl=a.target,this.tooltip&&this.tooltip.updatePosition(a.pageX,a.pageY),this.updateDisplay()},updateDisplay:function(){var a,b,c,e,f,g=this.splist,h=g.length,i=!1,j=this.$canvas.offset(),k=this.currentPageX-j.left,l=this.currentPageY-j.top;if(this.over){for(c=0;h>c;c++)b=g[c],e=b.setRegionHighlight(this.currentEl,k,l),e&&(i=!0);if(i){if(f=d.Event(\"sparklineRegionChange\"),f.sparklines=this.splist,this.$el.trigger(f),this.tooltip){for(a=\"\",c=0;h>c;c++)b=g[c],a+=b.getCurrentRegionTooltip();this.tooltip.setContent(a)}this.disableHighlight||this.canvas.render()}null===e&&this.mouseleave()}}}),u=f({sizeStyle:\"position: static !important;display: block !important;visibility: hidden !important;float: left !important;\",init:function(b){var c,e=b.get(\"tooltipClassname\",\"jqstooltip\"),f=this.sizeStyle;this.container=b.get(\"tooltipContainer\")||a.body,this.tooltipOffsetX=b.get(\"tooltipOffsetX\",10),this.tooltipOffsetY=b.get(\"tooltipOffsetY\",12),d(\"#jqssizetip\").remove(),d(\"#jqstooltip\").remove(),this.sizetip=d(\"<div/>\",{id:\"jqssizetip\",style:f,\"class\":e}),this.tooltip=d(\"<div/>\",{id:\"jqstooltip\",\"class\":e}).appendTo(this.container),c=this.tooltip.offset(),this.offsetLeft=c.left,this.offsetTop=c.top,this.hidden=!0,d(window).unbind(\"resize.jqs scroll.jqs\"),d(window).bind(\"resize.jqs scroll.jqs\",d.proxy(this.updateWindowDims,this)),this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=d(window).scrollTop(),this.scrollLeft=d(window).scrollLeft(),this.scrollRight=this.scrollLeft+d(window).width(),this.updatePosition()},getSize:function(a){this.sizetip.html(a).appendTo(this.container),this.width=this.sizetip.width()+1,this.height=this.sizetip.height(),this.sizetip.remove()},setContent:function(a){return a?(this.getSize(a),this.tooltip.html(a).css({width:this.width,height:this.height,visibility:\"visible\"}),this.hidden&&(this.hidden=!1,this.updatePosition()),void 0):(this.tooltip.css(\"visibility\",\"hidden\"),this.hidden=!0,void 0)},updatePosition:function(a,b){if(a===c){if(this.mousex===c)return;a=this.mousex-this.offsetLeft,b=this.mousey-this.offsetTop}else this.mousex=a-=this.offsetLeft,this.mousey=b-=this.offsetTop;this.height&&this.width&&!this.hidden&&(b-=this.height+this.tooltipOffsetY,a+=this.tooltipOffsetX,b<this.scrollTop&&(b=this.scrollTop),a<this.scrollLeft?a=this.scrollLeft:a+this.width>this.scrollRight&&(a=this.scrollRight-this.width),this.tooltip.css({left:a,top:b}))},remove:function(){this.tooltip.remove(),this.sizetip.remove(),this.sizetip=this.tooltip=c,d(window).unbind(\"resize.jqs scroll.jqs\")}}),E=function(){p(D)},d(E),J=[],d.fn.sparkline=function(b,e){return this.each(function(){var f,g,h=new d.fn.sparkline.options(this,e),i=d(this);if(f=function(){var e,f,g,j,k,l,m;return\"html\"===b||b===c?(m=this.getAttribute(h.get(\"tagValuesAttribute\")),(m===c||null===m)&&(m=i.html()),e=m.replace(/(^\\s*<!--)|(-->\\s*$)|\\s+/g,\"\").split(\",\")):e=b,f=\"auto\"===h.get(\"width\")?e.length*h.get(\"defaultPixelsPerValue\"):h.get(\"width\"),\"auto\"===h.get(\"height\")?h.get(\"composite\")&&d.data(this,\"_jqs_vcanvas\")||(j=a.createElement(\"span\"),j.innerHTML=\"a\",i.html(j),g=d(j).innerHeight()||d(j).height(),d(j).remove(),j=null):g=h.get(\"height\"),h.get(\"disableInteraction\")?k=!1:(k=d.data(this,\"_jqs_mhandler\"),k?h.get(\"composite\")||k.reset():(k=new t(this,h),d.data(this,\"_jqs_mhandler\",k))),h.get(\"composite\")&&!d.data(this,\"_jqs_vcanvas\")?(d.data(this,\"_jqs_errnotify\")||(alert(\"Attempted to attach a composite sparkline to an element with no existing sparkline\"),d.data(this,\"_jqs_errnotify\",!0)),void 0):(l=new(d.fn.sparkline[h.get(\"type\")])(this,e,h,f,g),l.render(),k&&k.registerSparkline(l),void 0)},d(this).html()&&!h.get(\"disableHiddenCheck\")&&d(this).is(\":hidden\")||!d(this).parents(\"body\").length){if(!h.get(\"composite\")&&d.data(this,\"_jqs_pending\"))for(g=J.length;g;g--)J[g-1][0]==this&&J.splice(g-1,1);J.push([this,f]),d.data(this,\"_jqs_pending\",!0)}else f.call(this)})},d.fn.sparkline.defaults=e(),d.sparkline_display_visible=function(){var a,b,c,e=[];for(b=0,c=J.length;c>b;b++)a=J[b][0],d(a).is(\":visible\")&&!d(a).parents().is(\":hidden\")?(J[b][1].call(a),d.data(J[b][0],\"_jqs_pending\",!1),e.push(b)):d(a).closest(\"html\").length||d.data(a,\"_jqs_pending\")||(d.data(J[b][0],\"_jqs_pending\",!1),e.push(b));for(b=e.length;b;b--)J.splice(e[b-1],1)},d.fn.sparkline.options=f({init:function(a,b){var c,e,f,g;this.userOptions=b=b||{},this.tag=a,this.tagValCache={},e=d.fn.sparkline.defaults,f=e.common,this.tagOptionsPrefix=b.enableTagOptions&&(b.tagOptionsPrefix||f.tagOptionsPrefix),g=this.getTagSetting(\"type\"),c=g===K?e[b.type||f.type]:e[g],this.mergedOptions=d.extend({},f,c,b)},getTagSetting:function(a){var b,d,e,f,g=this.tagOptionsPrefix;if(g===!1||g===c)return K;if(this.tagValCache.hasOwnProperty(a))b=this.tagValCache.key;else{if(b=this.tag.getAttribute(g+a),b===c||null===b)b=K;else if(\"[\"===b.substr(0,1))for(b=b.substr(1,b.length-2).split(\",\"),d=b.length;d--;)b[d]=j(b[d].replace(/(^\\s*)|(\\s*$)/g,\"\"));else if(\"{\"===b.substr(0,1))for(e=b.substr(1,b.length-2).split(\",\"),b={},d=e.length;d--;)f=e[d].split(\":\",2),b[f[0].replace(/(^\\s*)|(\\s*$)/g,\"\")]=j(f[1].replace(/(^\\s*)|(\\s*$)/g,\"\"));else b=j(b);this.tagValCache.key=b}return b},get:function(a,b){var d,e=this.getTagSetting(a);return e!==K?e:(d=this.mergedOptions[a])===c?b:d}}),d.fn.sparkline._base=f({disabled:!1,init:function(a,b,e,f,g){this.el=a,this.$el=d(a),this.values=b,this.options=e,this.width=f,this.height=g,this.currentRegion=c},initTarget:function(){var a=!this.options.get(\"disableInteraction\");(this.target=this.$el.simpledraw(this.width,this.height,this.options.get(\"composite\"),a))?(this.canvasWidth=this.target.pixelWidth,this.canvasHeight=this.target.pixelHeight):this.disabled=!0},render:function(){return this.disabled?(this.el.innerHTML=\"\",!1):!0},getRegion:function(){},setRegionHighlight:function(a,b,d){var e,f=this.currentRegion,g=!this.options.get(\"disableHighlight\");return b>this.canvasWidth||d>this.canvasHeight||0>b||0>d?null:(e=this.getRegion(a,b,d),f!==e?(f!==c&&g&&this.removeHighlight(),this.currentRegion=e,e!==c&&g&&this.renderHighlight(),!0):!1)},clearRegionHighlight:function(){return this.currentRegion!==c?(this.removeHighlight(),this.currentRegion=c,!0):!1},renderHighlight:function(){this.changeHighlight(!0)},removeHighlight:function(){this.changeHighlight(!1)},changeHighlight:function(){},getCurrentRegionTooltip:function(){var a,b,e,f,h,i,j,k,l,m,n,o,p,q,r=this.options,s=\"\",t=[];if(this.currentRegion===c)return\"\";if(a=this.getCurrentRegionFields(),n=r.get(\"tooltipFormatter\"))return n(this,r,a);if(r.get(\"tooltipChartTitle\")&&(s+='<div class=\"jqs jqstitle\">'+r.get(\"tooltipChartTitle\")+\"</div>\\n\"),b=this.options.get(\"tooltipFormat\"),!b)return\"\";if(d.isArray(b)||(b=[b]),d.isArray(a)||(a=[a]),j=this.options.get(\"tooltipFormatFieldlist\"),k=this.options.get(\"tooltipFormatFieldlistKey\"),j&&k){for(l=[],i=a.length;i--;)m=a[i][k],-1!=(q=d.inArray(m,j))&&(l[q]=a[i]);a=l}for(e=b.length,p=a.length,i=0;e>i;i++)for(o=b[i],\"string\"==typeof o&&(o=new g(o)),f=o.fclass||\"jqsfield\",q=0;p>q;q++)a[q].isNull&&r.get(\"tooltipSkipNull\")||(d.extend(a[q],{prefix:r.get(\"tooltipPrefix\"),suffix:r.get(\"tooltipSuffix\")}),h=o.render(a[q],r.get(\"tooltipValueLookups\"),r),t.push('<div class=\"'+f+'\">'+h+\"</div>\"));return t.length?s+t.join(\"\\n\"):\"\"},getCurrentRegionFields:function(){},calcHighlightColor:function(a,c){var d,e,f,g,i=c.get(\"highlightColor\"),j=c.get(\"highlightLighten\");if(i)return i;if(j&&(d=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a))){for(f=[],e=4===a.length?16:1,g=0;3>g;g++)f[g]=h(b.round(parseInt(d[g+1],16)*e*j),0,255);return\"rgb(\"+f.join(\",\")+\")\"}return a}}),v={changeHighlight:function(a){var b,c=this.currentRegion,e=this.target,f=this.regionShapes[c];f&&(b=this.renderRegion(c,a),d.isArray(b)||d.isArray(f)?(e.replaceWithShapes(f,b),this.regionShapes[c]=d.map(b,function(a){return a.id})):(e.replaceWithShape(f,b),this.regionShapes[c]=b.id))},render:function(){var a,b,c,e,f=this.values,g=this.target,h=this.regionShapes;if(this.cls._super.render.call(this)){for(c=f.length;c--;)if(a=this.renderRegion(c))if(d.isArray(a)){for(b=[],e=a.length;e--;)a[e].append(),b.push(a[e].id);h[c]=b}else a.append(),h[c]=a.id;else h[c]=null;g.render()}}},d.fn.sparkline.line=w=f(d.fn.sparkline._base,{type:\"line\",init:function(a,b,c,d,e){w._super.init.call(this,a,b,c,d,e),this.vertices=[],this.regionMap=[],this.xvalues=[],this.yvalues=[],this.yminmax=[],this.hightlightSpotId=null,this.lastShapeId=null,this.initTarget()},getRegion:function(a,b){var d,e=this.regionMap;for(d=e.length;d--;)if(null!==e[d]&&b>=e[d][0]&&b<=e[d][1])return e[d][2];return c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:null===this.yvalues[a],x:this.xvalues[a],y:this.yvalues[a],color:this.options.get(\"lineColor\"),fillColor:this.options.get(\"fillColor\"),offset:a}},renderHighlight:function(){var a,b,d=this.currentRegion,e=this.target,f=this.vertices[d],g=this.options,h=g.get(\"spotRadius\"),i=g.get(\"highlightSpotColor\"),j=g.get(\"highlightLineColor\");f&&(h&&i&&(a=e.drawCircle(f[0],f[1],h,c,i),this.highlightSpotId=a.id,e.insertAfterShape(this.lastShapeId,a)),j&&(b=e.drawLine(f[0],this.canvasTop,f[0],this.canvasTop+this.canvasHeight,j),this.highlightLineId=b.id,e.insertAfterShape(this.lastShapeId,b)))},removeHighlight:function(){var a=this.target;this.highlightSpotId&&(a.removeShapeId(this.highlightSpotId),this.highlightSpotId=null),this.highlightLineId&&(a.removeShapeId(this.highlightLineId),this.highlightLineId=null)},scanValues:function(){var a,c,d,e,f,g=this.values,h=g.length,i=this.xvalues,j=this.yvalues,k=this.yminmax;for(a=0;h>a;a++)c=g[a],d=\"string\"==typeof g[a],e=\"object\"==typeof g[a]&&g[a]instanceof Array,f=d&&g[a].split(\":\"),d&&2===f.length?(i.push(Number(f[0])),j.push(Number(f[1])),k.push(Number(f[1]))):e?(i.push(c[0]),j.push(c[1]),k.push(c[1])):(i.push(a),null===g[a]||\"null\"===g[a]?j.push(null):(j.push(Number(c)),k.push(Number(c))));this.options.get(\"xvalues\")&&(i=this.options.get(\"xvalues\")),this.maxy=this.maxyorg=b.max.apply(b,k),this.miny=this.minyorg=b.min.apply(b,k),this.maxx=b.max.apply(b,i),this.minx=b.min.apply(b,i),this.xvalues=i,this.yvalues=j,this.yminmax=k},processRangeOptions:function(){var a=this.options,b=a.get(\"normalRangeMin\"),d=a.get(\"normalRangeMax\");b!==c&&(b<this.miny&&(this.miny=b),d>this.maxy&&(this.maxy=d)),a.get(\"chartRangeMin\")!==c&&(a.get(\"chartRangeClip\")||a.get(\"chartRangeMin\")<this.miny)&&(this.miny=a.get(\"chartRangeMin\")),a.get(\"chartRangeMax\")!==c&&(a.get(\"chartRangeClip\")||a.get(\"chartRangeMax\")>this.maxy)&&(this.maxy=a.get(\"chartRangeMax\")),a.get(\"chartRangeMinX\")!==c&&(a.get(\"chartRangeClipX\")||a.get(\"chartRangeMinX\")<this.minx)&&(this.minx=a.get(\"chartRangeMinX\")),a.get(\"chartRangeMaxX\")!==c&&(a.get(\"chartRangeClipX\")||a.get(\"chartRangeMaxX\")>this.maxx)&&(this.maxx=a.get(\"chartRangeMaxX\"))},drawNormalRange:function(a,d,e,f,g){var h=this.options.get(\"normalRangeMin\"),i=this.options.get(\"normalRangeMax\"),j=d+b.round(e-e*((i-this.miny)/g)),k=b.round(e*(i-h)/g);this.target.drawRect(a,j,f,k,c,this.options.get(\"normalRangeColor\")).append()},render:function(){var a,e,f,g,h,i,j,k,l,m,n,o,p,q,r,t,u,v,x,y,z,A,B,C,D,E=this.options,F=this.target,G=this.canvasWidth,H=this.canvasHeight,I=this.vertices,J=E.get(\"spotRadius\"),K=this.regionMap;if(w._super.render.call(this)&&(this.scanValues(),this.processRangeOptions(),B=this.xvalues,C=this.yvalues,this.yminmax.length&&!(this.yvalues.length<2))){for(g=h=0,a=this.maxx-this.minx===0?1:this.maxx-this.minx,e=this.maxy-this.miny===0?1:this.maxy-this.miny,f=this.yvalues.length-1,J&&(4*J>G||4*J>H)&&(J=0),J&&(z=E.get(\"highlightSpotColor\")&&!E.get(\"disableInteraction\"),(z||E.get(\"minSpotColor\")||E.get(\"spotColor\")&&C[f]===this.miny)&&(H-=b.ceil(J)),(z||E.get(\"maxSpotColor\")||E.get(\"spotColor\")&&C[f]===this.maxy)&&(H-=b.ceil(J),g+=b.ceil(J)),(z||(E.get(\"minSpotColor\")||E.get(\"maxSpotColor\"))&&(C[0]===this.miny||C[0]===this.maxy))&&(h+=b.ceil(J),G-=b.ceil(J)),(z||E.get(\"spotColor\")||E.get(\"minSpotColor\")||E.get(\"maxSpotColor\")&&(C[f]===this.miny||C[f]===this.maxy))&&(G-=b.ceil(J))),H--,E.get(\"normalRangeMin\")===c||E.get(\"drawNormalOnTop\")||this.drawNormalRange(h,g,H,G,e),j=[],k=[j],q=r=null,t=C.length,D=0;t>D;D++)l=B[D],n=B[D+1],m=C[D],o=h+b.round((l-this.minx)*(G/a)),p=t-1>D?h+b.round((n-this.minx)*(G/a)):G,r=o+(p-o)/2,K[D]=[q||0,r,D],q=r,null===m?D&&(null!==C[D-1]&&(j=[],k.push(j)),I.push(null)):(m<this.miny&&(m=this.miny),m>this.maxy&&(m=this.maxy),j.length||j.push([o,g+H]),i=[o,g+b.round(H-H*((m-this.miny)/e))],j.push(i),I.push(i));for(u=[],v=[],x=k.length,D=0;x>D;D++)j=k[D],j.length&&(E.get(\"fillColor\")&&(j.push([j[j.length-1][0],g+H]),v.push(j.slice(0)),j.pop()),j.length>2&&(j[0]=[j[0][0],j[1][1]]),u.push(j));for(x=v.length,D=0;x>D;D++)F.drawShape(v[D],E.get(\"fillColor\"),E.get(\"fillColor\")).append();for(E.get(\"normalRangeMin\")!==c&&E.get(\"drawNormalOnTop\")&&this.drawNormalRange(h,g,H,G,e),x=u.length,D=0;x>D;D++)F.drawShape(u[D],E.get(\"lineColor\"),c,E.get(\"lineWidth\")).append();if(J&&E.get(\"valueSpots\"))for(y=E.get(\"valueSpots\"),y.get===c&&(y=new s(y)),D=0;t>D;D++)A=y.get(C[D]),A&&F.drawCircle(h+b.round((B[D]-this.minx)*(G/a)),g+b.round(H-H*((C[D]-this.miny)/e)),J,c,A).append();J&&E.get(\"spotColor\")&&null!==C[f]&&F.drawCircle(h+b.round((B[B.length-1]-this.minx)*(G/a)),g+b.round(H-H*((C[f]-this.miny)/e)),J,c,E.get(\"spotColor\")).append(),this.maxy!==this.minyorg&&(J&&E.get(\"minSpotColor\")&&(l=B[d.inArray(this.minyorg,C)],F.drawCircle(h+b.round((l-this.minx)*(G/a)),g+b.round(H-H*((this.minyorg-this.miny)/e)),J,c,E.get(\"minSpotColor\")).append()),J&&E.get(\"maxSpotColor\")&&(l=B[d.inArray(this.maxyorg,C)],F.drawCircle(h+b.round((l-this.minx)*(G/a)),g+b.round(H-H*((this.maxyorg-this.miny)/e)),J,c,E.get(\"maxSpotColor\")).append())),this.lastShapeId=F.getLastShapeId(),this.canvasTop=g,F.render()}}}),d.fn.sparkline.bar=x=f(d.fn.sparkline._base,v,{type:\"bar\",init:function(a,e,f,g,i){var m,n,o,p,q,r,t,u,v,w,y,z,A,B,C,D,E,F,G,H,I,J,K=parseInt(f.get(\"barWidth\"),10),L=parseInt(f.get(\"barSpacing\"),10),M=f.get(\"chartRangeMin\"),N=f.get(\"chartRangeMax\"),O=f.get(\"chartRangeClip\"),P=1/0,Q=-1/0;for(x._super.init.call(this,a,e,f,g,i),r=0,t=e.length;t>r;r++)H=e[r],m=\"string\"==typeof H&&H.indexOf(\":\")>-1,(m||d.isArray(H))&&(C=!0,m&&(H=e[r]=k(H.split(\":\"))),H=l(H,null),n=b.min.apply(b,H),o=b.max.apply(b,H),P>n&&(P=n),o>Q&&(Q=o));this.stacked=C,this.regionShapes={},this.barWidth=K,this.barSpacing=L,this.totalBarWidth=K+L,this.width=g=e.length*K+(e.length-1)*L,this.initTarget(),O&&(A=M===c?-1/0:M,B=N===c?1/0:N),q=[],p=C?[]:q;var R=[],S=[];for(r=0,t=e.length;t>r;r++)if(C)for(D=e[r],e[r]=G=[],R[r]=0,p[r]=S[r]=0,E=0,F=D.length;F>E;E++)H=G[E]=O?h(D[E],A,B):D[E],null!==H&&(H>0&&(R[r]+=H),0>P&&Q>0?0>H?S[r]+=b.abs(H):p[r]+=H:p[r]+=b.abs(H-(0>H?Q:P)),q.push(H));else H=O?h(e[r],A,B):e[r],H=e[r]=j(H),null!==H&&q.push(H);this.max=z=b.max.apply(b,q),this.min=y=b.min.apply(b,q),this.stackMax=Q=C?b.max.apply(b,R):z,this.stackMin=P=C?b.min.apply(b,q):y,f.get(\"chartRangeMin\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMin\")<y)&&(y=f.get(\"chartRangeMin\")),f.get(\"chartRangeMax\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMax\")>z)&&(z=f.get(\"chartRangeMax\")),this.zeroAxis=v=f.get(\"zeroAxis\",!0),w=0>=y&&z>=0&&v?0:0==v?y:y>0?y:z,this.xaxisOffset=w,u=C?b.max.apply(b,p)+b.max.apply(b,S):z-y,this.canvasHeightEf=v&&0>y?this.canvasHeight-2:this.canvasHeight-1,w>y?(J=C&&z>=0?Q:z,I=(J-w)/u*this.canvasHeight,I!==b.ceil(I)&&(this.canvasHeightEf-=2,I=b.ceil(I))):I=this.canvasHeight,this.yoffset=I,d.isArray(f.get(\"colorMap\"))?(this.colorMapByIndex=f.get(\"colorMap\"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=f.get(\"colorMap\"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new s(this.colorMapByValue))),this.range=u},getRegion:function(a,d){var e=b.floor(d/this.totalBarWidth);return 0>e||e>=this.values.length?c:e},getCurrentRegionFields:function(){var a,b,c=this.currentRegion,d=q(this.values[c]),e=[];for(b=d.length;b--;)a=d[b],e.push({isNull:null===a,value:a,color:this.calcColor(b,a,c),offset:c});return e},calcColor:function(a,b,e){var f,g,h=this.colorMapByIndex,i=this.colorMapByValue,j=this.options;return f=this.stacked?j.get(\"stackedBarColor\"):0>b?j.get(\"negBarColor\"):j.get(\"barColor\"),0===b&&j.get(\"zeroColor\")!==c&&(f=j.get(\"zeroColor\")),i&&(g=i.get(b))?f=g:h&&h.length>e&&(f=h[e]),d.isArray(f)?f[a%f.length]:f},renderRegion:function(a,e){var f,g,h,i,j,k,l,m,o,p,q=this.values[a],r=this.options,s=this.xaxisOffset,t=[],u=this.range,v=this.stacked,w=this.target,x=a*this.totalBarWidth,y=this.canvasHeightEf,z=this.yoffset;if(q=d.isArray(q)?q:[q],l=q.length,m=q[0],i=n(null,q),p=n(s,q,!0),i)return r.get(\"nullColor\")?(h=e?r.get(\"nullColor\"):this.calcHighlightColor(r.get(\"nullColor\"),r),f=z>0?z-1:z,w.drawRect(x,f,this.barWidth-1,0,h,h)):c;for(j=z,k=0;l>k;k++){if(m=q[k],v&&m===s){if(!p||o)continue;o=!0}g=u>0?b.floor(y*(b.abs(m-s)/u))+1:1,s>m||m===s&&0===z?(f=j,j+=g):(f=z-g,z-=g),h=this.calcColor(k,m,a),e&&(h=this.calcHighlightColor(h,r)),t.push(w.drawRect(x,f,this.barWidth-1,g-1,h,h))}return 1===t.length?t[0]:t}}),d.fn.sparkline.tristate=y=f(d.fn.sparkline._base,v,{type:\"tristate\",init:function(a,b,e,f,g){var h=parseInt(e.get(\"barWidth\"),10),i=parseInt(e.get(\"barSpacing\"),10);y._super.init.call(this,a,b,e,f,g),this.regionShapes={},this.barWidth=h,this.barSpacing=i,this.totalBarWidth=h+i,this.values=d.map(b,Number),this.width=f=b.length*h+(b.length-1)*i,d.isArray(e.get(\"colorMap\"))?(this.colorMapByIndex=e.get(\"colorMap\"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=e.get(\"colorMap\"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new s(this.colorMapByValue))),this.initTarget()},getRegion:function(a,c){return b.floor(c/this.totalBarWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],color:this.calcColor(this.values[a],a),offset:a}},calcColor:function(a,b){var c,d,e=this.values,f=this.options,g=this.colorMapByIndex,h=this.colorMapByValue;return c=h&&(d=h.get(a))?d:g&&g.length>b?g[b]:e[b]<0?f.get(\"negBarColor\"):e[b]>0?f.get(\"posBarColor\"):f.get(\"zeroBarColor\")},renderRegion:function(a,c){var d,e,f,g,h,i,j=this.values,k=this.options,l=this.target;return d=l.pixelHeight,f=b.round(d/2),g=a*this.totalBarWidth,j[a]<0?(h=f,e=f-1):j[a]>0?(h=0,e=f-1):(h=f-1,e=2),i=this.calcColor(j[a],a),null!==i?(c&&(i=this.calcHighlightColor(i,k)),l.drawRect(g,h,this.barWidth-1,e-1,i,i)):void 0}}),d.fn.sparkline.discrete=z=f(d.fn.sparkline._base,v,{type:\"discrete\",init:function(a,e,f,g,h){z._super.init.call(this,a,e,f,g,h),this.regionShapes={},this.values=e=d.map(e,Number),this.min=b.min.apply(b,e),this.max=b.max.apply(b,e),this.range=this.max-this.min,this.width=g=\"auto\"===f.get(\"width\")?2*e.length:this.width,this.interval=b.floor(g/e.length),this.itemWidth=g/e.length,f.get(\"chartRangeMin\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMin\")<this.min)&&(this.min=f.get(\"chartRangeMin\")),f.get(\"chartRangeMax\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMax\")>this.max)&&(this.max=f.get(\"chartRangeMax\")),this.initTarget(),this.target&&(this.lineHeight=\"auto\"===f.get(\"lineHeight\")?b.round(.3*this.canvasHeight):f.get(\"lineHeight\"))},getRegion:function(a,c){return b.floor(c/this.itemWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],offset:a}},renderRegion:function(a,c){var d,e,f,g,i=this.values,j=this.options,k=this.min,l=this.max,m=this.range,n=this.interval,o=this.target,p=this.canvasHeight,q=this.lineHeight,r=p-q;return e=h(i[a],k,l),g=a*n,d=b.round(r-r*((e-k)/m)),f=j.get(\"thresholdColor\")&&e<j.get(\"thresholdValue\")?j.get(\"thresholdColor\"):j.get(\"lineColor\"),c&&(f=this.calcHighlightColor(f,j)),o.drawLine(g,d,g,d+q,f)}}),d.fn.sparkline.bullet=A=f(d.fn.sparkline._base,{type:\"bullet\",init:function(a,d,e,f,g){var h,i,j;A._super.init.call(this,a,d,e,f,g),this.values=d=k(d),j=d.slice(),j[0]=null===j[0]?j[2]:j[0],j[1]=null===d[1]?j[2]:j[1],h=b.min.apply(b,d),i=b.max.apply(b,d),h=e.get(\"base\")===c?0>h?h:0:e.get(\"base\"),this.min=h,this.max=i,this.range=i-h,this.shapes={},this.valueShapes={},this.regiondata={},this.width=f=\"auto\"===e.get(\"width\")?\"4.0em\":f,this.target=this.$el.simpledraw(f,g,e.get(\"composite\")),d.length||(this.disabled=!0),this.initTarget()},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{fieldkey:a.substr(0,1),value:this.values[a.substr(1)],region:a}},changeHighlight:function(a){var b,c=this.currentRegion,d=this.valueShapes[c];switch(delete this.shapes[d],c.substr(0,1)){case\"r\":b=this.renderRange(c.substr(1),a);break;case\"p\":b=this.renderPerformance(a);break;case\"t\":b=this.renderTarget(a)}this.valueShapes[c]=b.id,this.shapes[b.id]=c,this.target.replaceWithShape(d,b)},renderRange:function(a,c){var d=this.values[a],e=b.round(this.canvasWidth*((d-this.min)/this.range)),f=this.options.get(\"rangeColors\")[a-2];return c&&(f=this.calcHighlightColor(f,this.options)),this.target.drawRect(0,0,e-1,this.canvasHeight-1,f,f)},renderPerformance:function(a){var c=this.values[1],d=b.round(this.canvasWidth*((c-this.min)/this.range)),e=this.options.get(\"performanceColor\");return a&&(e=this.calcHighlightColor(e,this.options)),this.target.drawRect(0,b.round(.3*this.canvasHeight),d-1,b.round(.4*this.canvasHeight)-1,e,e)},renderTarget:function(a){var c=this.values[0],d=b.round(this.canvasWidth*((c-this.min)/this.range)-this.options.get(\"targetWidth\")/2),e=b.round(.1*this.canvasHeight),f=this.canvasHeight-2*e,g=this.options.get(\"targetColor\");return a&&(g=this.calcHighlightColor(g,this.options)),this.target.drawRect(d,e,this.options.get(\"targetWidth\")-1,f-1,g,g)},render:function(){var a,b,c=this.values.length,d=this.target;if(A._super.render.call(this)){for(a=2;c>a;a++)b=this.renderRange(a).append(),this.shapes[b.id]=\"r\"+a,this.valueShapes[\"r\"+a]=b.id;null!==this.values[1]&&(b=this.renderPerformance().append(),this.shapes[b.id]=\"p1\",this.valueShapes.p1=b.id),null!==this.values[0]&&(b=this.renderTarget().append(),this.shapes[b.id]=\"t0\",this.valueShapes.t0=b.id),d.render()}}}),d.fn.sparkline.pie=B=f(d.fn.sparkline._base,{type:\"pie\",init:function(a,c,e,f,g){var h,i=0;if(B._super.init.call(this,a,c,e,f,g),this.shapes={},this.valueShapes={},this.values=c=d.map(c,Number),\"auto\"===e.get(\"width\")&&(this.width=this.height),c.length>0)for(h=c.length;h--;)i+=c[h];this.total=i,this.initTarget(),this.radius=b.floor(b.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],percent:this.values[a]/this.total*100,color:this.options.get(\"sliceColors\")[a%this.options.get(\"sliceColors\").length],offset:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.renderSlice(b,a),d=this.valueShapes[b];delete this.shapes[d],this.target.replaceWithShape(d,c),this.valueShapes[b]=c.id,this.shapes[c.id]=b},renderSlice:function(a,d){var e,f,g,h,i,j=this.target,k=this.options,l=this.radius,m=k.get(\"borderWidth\"),n=k.get(\"offset\"),o=2*b.PI,p=this.values,q=this.total,r=n?2*b.PI*(n/360):0;for(h=p.length,g=0;h>g;g++){if(e=r,f=r,q>0&&(f=r+o*(p[g]/q)),a===g)return i=k.get(\"sliceColors\")[g%k.get(\"sliceColors\").length],d&&(i=this.calcHighlightColor(i,k)),j.drawPieSlice(l,l,l-m,e,f,c,i);\nr=f}},render:function(){var a,d,e=this.target,f=this.values,g=this.options,h=this.radius,i=g.get(\"borderWidth\");if(B._super.render.call(this)){for(i&&e.drawCircle(h,h,b.floor(h-i/2),g.get(\"borderColor\"),c,i).append(),d=f.length;d--;)f[d]&&(a=this.renderSlice(d).append(),this.valueShapes[d]=a.id,this.shapes[a.id]=d);e.render()}}}),d.fn.sparkline.box=C=f(d.fn.sparkline._base,{type:\"box\",init:function(a,b,c,e,f){C._super.init.call(this,a,b,c,e,f),this.values=d.map(b,Number),this.width=\"auto\"===c.get(\"width\")?\"4.0em\":e,this.initTarget(),this.values.length||(this.disabled=1)},getRegion:function(){return 1},getCurrentRegionFields:function(){var a=[{field:\"lq\",value:this.quartiles[0]},{field:\"med\",value:this.quartiles[1]},{field:\"uq\",value:this.quartiles[2]}];return this.loutlier!==c&&a.push({field:\"lo\",value:this.loutlier}),this.routlier!==c&&a.push({field:\"ro\",value:this.routlier}),this.lwhisker!==c&&a.push({field:\"lw\",value:this.lwhisker}),this.rwhisker!==c&&a.push({field:\"rw\",value:this.rwhisker}),a},render:function(){var a,d,e,f,g,h,j,k,l,m,n,o=this.target,p=this.values,q=p.length,r=this.options,s=this.canvasWidth,t=this.canvasHeight,u=r.get(\"chartRangeMin\")===c?b.min.apply(b,p):r.get(\"chartRangeMin\"),v=r.get(\"chartRangeMax\")===c?b.max.apply(b,p):r.get(\"chartRangeMax\"),w=0;if(C._super.render.call(this)){if(r.get(\"raw\"))r.get(\"showOutliers\")&&p.length>5?(d=p[0],a=p[1],f=p[2],g=p[3],h=p[4],j=p[5],k=p[6]):(a=p[0],f=p[1],g=p[2],h=p[3],j=p[4]);else if(p.sort(function(a,b){return a-b}),f=i(p,1),g=i(p,2),h=i(p,3),e=h-f,r.get(\"showOutliers\")){for(a=j=c,l=0;q>l;l++)a===c&&p[l]>f-e*r.get(\"outlierIQR\")&&(a=p[l]),p[l]<h+e*r.get(\"outlierIQR\")&&(j=p[l]);d=p[0],k=p[q-1]}else a=p[0],j=p[q-1];this.quartiles=[f,g,h],this.lwhisker=a,this.rwhisker=j,this.loutlier=d,this.routlier=k,n=s/(v-u+1),r.get(\"showOutliers\")&&(w=b.ceil(r.get(\"spotRadius\")),s-=2*b.ceil(r.get(\"spotRadius\")),n=s/(v-u+1),a>d&&o.drawCircle((d-u)*n+w,t/2,r.get(\"spotRadius\"),r.get(\"outlierLineColor\"),r.get(\"outlierFillColor\")).append(),k>j&&o.drawCircle((k-u)*n+w,t/2,r.get(\"spotRadius\"),r.get(\"outlierLineColor\"),r.get(\"outlierFillColor\")).append()),o.drawRect(b.round((f-u)*n+w),b.round(.1*t),b.round((h-f)*n),b.round(.8*t),r.get(\"boxLineColor\"),r.get(\"boxFillColor\")).append(),o.drawLine(b.round((a-u)*n+w),b.round(t/2),b.round((f-u)*n+w),b.round(t/2),r.get(\"lineColor\")).append(),o.drawLine(b.round((a-u)*n+w),b.round(t/4),b.round((a-u)*n+w),b.round(t-t/4),r.get(\"whiskerColor\")).append(),o.drawLine(b.round((j-u)*n+w),b.round(t/2),b.round((h-u)*n+w),b.round(t/2),r.get(\"lineColor\")).append(),o.drawLine(b.round((j-u)*n+w),b.round(t/4),b.round((j-u)*n+w),b.round(t-t/4),r.get(\"whiskerColor\")).append(),o.drawLine(b.round((g-u)*n+w),b.round(.1*t),b.round((g-u)*n+w),b.round(.9*t),r.get(\"medianColor\")).append(),r.get(\"target\")&&(m=b.ceil(r.get(\"spotRadius\")),o.drawLine(b.round((r.get(\"target\")-u)*n+w),b.round(t/2-m),b.round((r.get(\"target\")-u)*n+w),b.round(t/2+m),r.get(\"targetColor\")).append(),o.drawLine(b.round((r.get(\"target\")-u)*n+w-m),b.round(t/2),b.round((r.get(\"target\")-u)*n+w+m),b.round(t/2),r.get(\"targetColor\")).append()),o.render()}}}),F=f({init:function(a,b,c,d){this.target=a,this.id=b,this.type=c,this.args=d},append:function(){return this.target.appendShape(this),this}}),G=f({_pxregex:/(\\d+)(px)?\\s*$/i,init:function(a,b,c){a&&(this.width=a,this.height=b,this.target=c,this.lastShapeId=null,c[0]&&(c=c[0]),d.data(c,\"_jqs_vcanvas\",this))},drawLine:function(a,b,c,d,e,f){return this.drawShape([[a,b],[c,d]],e,f)},drawShape:function(a,b,c,d){return this._genShape(\"Shape\",[a,b,c,d])},drawCircle:function(a,b,c,d,e,f){return this._genShape(\"Circle\",[a,b,c,d,e,f])},drawPieSlice:function(a,b,c,d,e,f,g){return this._genShape(\"PieSlice\",[a,b,c,d,e,f,g])},drawRect:function(a,b,c,d,e,f){return this._genShape(\"Rect\",[a,b,c,d,e,f])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert(\"reset not implemented\")},_insert:function(a,b){d(b).html(a)},_calculatePixelDims:function(a,b,c){var e;e=this._pxregex.exec(b),this.pixelHeight=e?e[1]:d(c).height(),e=this._pxregex.exec(a),this.pixelWidth=e?e[1]:d(c).width()},_genShape:function(a,b){var c=L++;return b.unshift(c),new F(this,c,a,b)},appendShape:function(){alert(\"appendShape not implemented\")},replaceWithShape:function(){alert(\"replaceWithShape not implemented\")},insertAfterShape:function(){alert(\"insertAfterShape not implemented\")},removeShapeId:function(){alert(\"removeShapeId not implemented\")},getShapeAt:function(){alert(\"getShapeAt not implemented\")},render:function(){alert(\"render not implemented\")}}),H=f(G,{init:function(b,e,f,g){H._super.init.call(this,b,e,f),this.canvas=a.createElement(\"canvas\"),f[0]&&(f=f[0]),d.data(f,\"_jqs_vcanvas\",this),d(this.canvas).css({display:\"inline-block\",width:b,height:e,verticalAlign:\"top\"}),this._insert(this.canvas,f),this._calculatePixelDims(b,e,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,this.interact=g,this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c,d(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(a,b,d){var e=this.canvas.getContext(\"2d\");return a!==c&&(e.strokeStyle=a),e.lineWidth=d===c?1:d,b!==c&&(e.fillStyle=b),e},reset:function(){var a=this._getContext();a.clearRect(0,0,this.pixelWidth,this.pixelHeight),this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c},_drawShape:function(a,b,d,e,f){var g,h,i=this._getContext(d,e,f);for(i.beginPath(),i.moveTo(b[0][0]+.5,b[0][1]+.5),g=1,h=b.length;h>g;g++)i.lineTo(b[g][0]+.5,b[g][1]+.5);d!==c&&i.stroke(),e!==c&&i.fill(),this.targetX!==c&&this.targetY!==c&&i.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawCircle:function(a,d,e,f,g,h,i){var j=this._getContext(g,h,i);j.beginPath(),j.arc(d,e,f,0,2*b.PI,!1),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a),g!==c&&j.stroke(),h!==c&&j.fill()},_drawPieSlice:function(a,b,d,e,f,g,h,i){var j=this._getContext(h,i);j.beginPath(),j.moveTo(b,d),j.arc(b,d,e,f,g,!1),j.lineTo(b,d),j.closePath(),h!==c&&j.stroke(),i&&j.fill(),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b+d,c],[b+d,c+e],[b,c+e],[b,c]],f,g)},appendShape:function(a){return this.shapes[a.id]=a,this.shapeseq.push(a.id),this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c,d=this.shapeseq;for(this.shapes[b.id]=b,c=d.length;c--;)d[c]==a&&(d[c]=b.id);delete this.shapes[a]},replaceWithShapes:function(a,b){var c,d,e,f=this.shapeseq,g={};for(d=a.length;d--;)g[a[d]]=!0;for(d=f.length;d--;)c=f[d],g[c]&&(f.splice(d,1),delete this.shapes[c],e=d);for(d=b.length;d--;)f.splice(e,0,b[d].id),this.shapes[b[d].id]=b[d]},insertAfterShape:function(a,b){var c,d=this.shapeseq;for(c=d.length;c--;)if(d[c]===a)return d.splice(c+1,0,b.id),this.shapes[b.id]=b,void 0},removeShapeId:function(a){var b,c=this.shapeseq;for(b=c.length;b--;)if(c[b]===a){c.splice(b,1);break}delete this.shapes[a]},getShapeAt:function(a,b,c){return this.targetX=b,this.targetY=c,this.render(),this.currentTargetShapeId},render:function(){var a,b,c,d=this.shapeseq,e=this.shapes,f=d.length,g=this._getContext();for(g.clearRect(0,0,this.pixelWidth,this.pixelHeight),c=0;f>c;c++)a=d[c],b=e[a],this[\"_draw\"+b.type].apply(this,b.args);this.interact||(this.shapes={},this.shapeseq=[])}}),I=f(G,{init:function(b,c,e){var f;I._super.init.call(this,b,c,e),e[0]&&(e=e[0]),d.data(e,\"_jqs_vcanvas\",this),this.canvas=a.createElement(\"span\"),d(this.canvas).css({display:\"inline-block\",position:\"relative\",overflow:\"hidden\",width:b,height:c,margin:\"0px\",padding:\"0px\",verticalAlign:\"top\"}),this._insert(this.canvas,e),this._calculatePixelDims(b,c,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,f='<v:group coordorigin=\"0 0\" coordsize=\"'+this.pixelWidth+\" \"+this.pixelHeight+'\" style=\"position:absolute;top:0;left:0;width:'+this.pixelWidth+\"px;height=\"+this.pixelHeight+'px;\"></v:group>',this.canvas.insertAdjacentHTML(\"beforeEnd\",f),this.group=d(this.canvas).children()[0],this.rendered=!1,this.prerender=\"\"},_drawShape:function(a,b,d,e,f){var g,h,i,j,k,l,m,n=[];for(m=0,l=b.length;l>m;m++)n[m]=\"\"+b[m][0]+\",\"+b[m][1];return g=n.splice(0,1),f=f===c?1:f,h=d===c?' stroked=\"false\" ':' strokeWeight=\"'+f+'px\" strokeColor=\"'+d+'\" ',i=e===c?' filled=\"false\"':' fillColor=\"'+e+'\" filled=\"true\" ',j=n[0]===n[n.length-1]?\"x \":\"\",k='<v:shape coordorigin=\"0 0\" coordsize=\"'+this.pixelWidth+\" \"+this.pixelHeight+'\"  id=\"jqsshape'+a+'\" '+h+i+' style=\"position:absolute;left:0px;top:0px;height:'+this.pixelHeight+\"px;width:\"+this.pixelWidth+'px;padding:0px;margin:0px;\"  path=\"m '+g+\" l \"+n.join(\", \")+\" \"+j+'e\"> </v:shape>'},_drawCircle:function(a,b,d,e,f,g,h){var i,j,k;return b-=e,d-=e,i=f===c?' stroked=\"false\" ':' strokeWeight=\"'+h+'px\" strokeColor=\"'+f+'\" ',j=g===c?' filled=\"false\"':' fillColor=\"'+g+'\" filled=\"true\" ',k='<v:oval  id=\"jqsshape'+a+'\" '+i+j+' style=\"position:absolute;top:'+d+\"px; left:\"+b+\"px; width:\"+2*e+\"px; height:\"+2*e+'px\"></v:oval>'},_drawPieSlice:function(a,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r;if(g===h)return\"\";if(h-g===2*b.PI&&(g=0,h=2*b.PI),l=d+b.round(b.cos(g)*f),m=e+b.round(b.sin(g)*f),n=d+b.round(b.cos(h)*f),o=e+b.round(b.sin(h)*f),l===n&&m===o){if(h-g<b.PI)return\"\";l=n=d+f,m=o=e}return l===n&&m===o&&h-g<b.PI?\"\":(k=[d-f,e-f,d+f,e+f,l,m,n,o],p=i===c?' stroked=\"false\" ':' strokeWeight=\"1px\" strokeColor=\"'+i+'\" ',q=j===c?' filled=\"false\"':' fillColor=\"'+j+'\" filled=\"true\" ',r='<v:shape coordorigin=\"0 0\" coordsize=\"'+this.pixelWidth+\" \"+this.pixelHeight+'\"  id=\"jqsshape'+a+'\" '+p+q+' style=\"position:absolute;left:0px;top:0px;height:'+this.pixelHeight+\"px;width:\"+this.pixelWidth+'px;padding:0px;margin:0px;\"  path=\"m '+d+\",\"+e+\" wa \"+k.join(\", \")+' x e\"> </v:shape>')},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b,c+e],[b+d,c+e],[b+d,c],[b,c]],f,g)},reset:function(){this.group.innerHTML=\"\"},appendShape:function(a){var b=this[\"_draw\"+a.type].apply(this,a.args);return this.rendered?this.group.insertAdjacentHTML(\"beforeEnd\",b):this.prerender+=b,this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=d(\"#jqsshape\"+a),e=this[\"_draw\"+b.type].apply(this,b.args);c[0].outerHTML=e},replaceWithShapes:function(a,b){var c,e=d(\"#jqsshape\"+a[0]),f=\"\",g=b.length;for(c=0;g>c;c++)f+=this[\"_draw\"+b[c].type].apply(this,b[c].args);for(e[0].outerHTML=f,c=1;c<a.length;c++)d(\"#jqsshape\"+a[c]).remove()},insertAfterShape:function(a,b){var c=d(\"#jqsshape\"+a),e=this[\"_draw\"+b.type].apply(this,b.args);c[0].insertAdjacentHTML(\"afterEnd\",e)},removeShapeId:function(a){var b=d(\"#jqsshape\"+a);this.group.removeChild(b[0])},getShapeAt:function(a){var b=a.id.substr(8);return b},render:function(){this.rendered||(this.group.innerHTML=this.prerender,this.rendered=!0)}})})}(document,Math);"

/***/ },

/***/ 1316:
/***/ function(module, exports) {

module.exports = "<div id=\"content\">\n    <div class=\"row\">\n        <sa-big-breadcrumbs [items]=\"['Home']\" icon=\"home\"\n                            class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"well\">\n\n                <h1>SmartAdmin Angular 2 <i>blank</i></h1>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae corporis dignissimos\n                    doloremque eaque eum modi, quia reprehenderit unde voluptatem.</p>\n            </div>\n        </div>\n    </div>\n\n    <sa-widgets-grid>\n        <!-- row -->\n        <div class=\"row\">\n            <!-- NEW WIDGET START -->\n            <article class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                <!-- Widget ID (each widget will need unique ID)-->\n                <sa-widget>\n                    <!-- widget options:\n                        usage: <sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n                        [colorbutton]=\"false\"\n                        [editbutton]=\"false\"\n                        [togglebutton]=\"false\"\n                        [deletebutton]=\"false\"\n                        [fullscreenbutton]=\"false\"\n                        [custombutton]=\"false\"\n                        [collapsed]=\"true\"\n                        [sortable]=\"false\"\n                    -->\n                    <header>\n                        <h2><strong>Default</strong> <i>Widget</i></h2>\n                    </header>\n                    <!-- widget div-->\n                    <div>\n                        <!-- widget content -->\n                        <div class=\"widget-body\">\n                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto deserunt, eveniet officia officiis rem soluta! Alias id odit qui quis reprehenderit?</p>\n                        </div>\n                        <!-- end widget content -->\n                    </div>\n                    <!-- end widget div -->\n                </sa-widget>\n            </article>\n        </div>\n    </sa-widgets-grid>\n</div>"

/***/ },

/***/ 1317:
/***/ function(module, exports) {

module.exports = "<div class=\"onoffswitch-container\">\n  <span class=\"onoffswitch-title\">{{title}}<ng-content></ng-content></span>\n  <span class=\"onoffswitch\">\n    <input type=\"checkbox\" class=\"onoffswitch-checkbox\" [(ngModel)]=\"value\" [checked]=\"value\"\n           (ngModelChange)=\"onChange()\"\n           id=\"{{widgetId}}\"/>\n    <label class=\"onoffswitch-label\" htmlFor=\"{{widgetId}}\">\n      <span class=\"onoffswitch-inner\"  data-swchon-text=\"ON\"\n            data-swchoff-text=\"OFF\"></span>\n        <span class=\"onoffswitch-switch\"></span>\n    </label>\n  </span>\n</div>\n"

/***/ },

/***/ 1318:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-8\" saSparklineContainer>\n  <ul id=\"sparks\" class=\"\">\n    <li class=\"sparks-info\">\n      <h5> My Income <span class=\"txt-color-blue\">$47,171</span></h5>\n      <div class=\"sparkline txt-color-blue hidden-mobile hidden-md hidden-sm\">\n        1300, 1877, 2500, 2577, 2000, 2100, 3000, 2700, 3631, 2471, 2700, 3631, 2471\n      </div>\n    </li>\n    <li class=\"sparks-info\">\n      <h5> Site Traffic <span class=\"txt-color-purple\"><i class=\"fa fa-arrow-circle-up\"></i>&nbsp;45%</span></h5>\n      <div class=\"sparkline txt-color-purple hidden-mobile hidden-md hidden-sm\">\n        110,150,300,130,400,240,220,310,220,300, 270, 210\n      </div>\n    </li>\n    <li class=\"sparks-info\">\n      <h5> Site Orders <span class=\"txt-color-greenDark\"><i class=\"fa fa-shopping-cart\"></i>&nbsp;2447</span></h5>\n      <div class=\"sparkline txt-color-greenDark hidden-mobile hidden-md hidden-sm\">\n        110,150,300,130,400,240,220,310,220,300, 270, 210\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ },

/***/ 1320:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(1276)(__webpack_require__(1314)+"\n\n// SCRIPT-LOADER FOOTER\n//# sourceURL=script:///C:/wamp/www/smartadmin/SmartAdmin_1_8/DEVELOPER/AngularJS_2.x/seed-project/node_modules/smartadmin-plugins/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js")

/***/ },

/***/ 1321:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(1276)(__webpack_require__(1315)+"\n\n// SCRIPT-LOADER FOOTER\n//# sourceURL=script:///C:/wamp/www/smartadmin/SmartAdmin_1_8/DEVELOPER/AngularJS_2.x/seed-project/node_modules/smartadmin-plugins/bower_components/relayfoods-jquery.sparkline/dist/jquery.sparkline.min.js")

/***/ },

/***/ 1322:
/***/ function(module, exports) {

/*         ______________________________________
  ________|                                      |_______
  \       |             JarvisWidget             |      /
   \      |      Copyright © 2014 MyOrange       |     /
   /      |______________________________________|     \
  /__________)                                (_________\

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * =======================================================================
 * JarvisWidget is FULLY owned and LICENSED by MYORANGE INC.
 * This script may NOT be RESOLD or REDISTRUBUTED on its own under any
 * circumstances, and is only to be used with this purchased
 * copy of SmartAdmin Template.
 * =======================================================================
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * =======================================================================
 * original filename: jarvis.widget.js
 * filesize: 56.7 KB (58,158 bytes)
 * author: Sunny (@bootstraphunt)
 * email: info@myorange.ca
 */

(function ($, window, document, undefined) {

    //"use strict"; 

    var pluginName = 'jarvisWidgets';

	/**
	 * Check for touch support and set right click events.
	 **/
	var clickEvent = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch ? 
		'touchstart' : 'click') + '.' + pluginName;

    function Plugin(element, options) {
        /**
         * Variables.
         **/
        this.obj = $(element);
        this.o = $.extend({}, $.fn[pluginName].defaults, options);
        this.objId = this.obj.attr('id');
        this.pwCtrls = '.jarviswidget-ctrls';
        this.widget = this.obj.find(this.o.widgets);
        this.toggleClass = this.o.toggleClass.split('|');
        this.editClass = this.o.editClass.split('|');
        this.fullscreenClass = this.o.fullscreenClass.split('|');
        this.customClass = this.o.customClass.split('|');
		this.storage = {enabled: this.o.localStorage};
		this.initialized = false;

        this.init();
    }

    Plugin.prototype = {

        /**
         * Function for the indicator image.
         *
         * @param:
         **/
        _runLoaderWidget: function (elm) {
            var self = this;
            if (self.o.indicator === true) {
                elm.parents(self.o.widgets)
                    .find('.jarviswidget-loader:first')
                    .stop(true, true)
                    .fadeIn(100)
                    .delay(self.o.indicatorTime)
                    .fadeOut(100);
            }
        },

        /**
         * Create a fixed timestamp.
         *
         * @param: t | date | Current date.
         **/
        _getPastTimestamp: function (t) {

            var self = this;

            var da = new Date(t);
            

            /**
             * Get and set the date and time.
             **/
            var tsMonth = da.getMonth() + 1;
            // index based
            var tsDay = da.getDate();
            var tsYear = da.getFullYear();
            var tsHours = da.getHours();
            var tsMinutes = da.getMinutes();
            var tsSeconds = da.getUTCSeconds();

            /**
             * Checking for one digit values, if so add an zero.
             **/
            if (tsMonth < 10) {
                tsMonth = '0' + tsMonth;
            }
            if (tsDay < 10) {
                tsDay = '0' + tsDay;
            }
            if (tsHours < 10) {
                tsHours = '0' + tsHours;
            }
            if (tsMinutes < 10) {
                tsMinutes = '0' + tsMinutes;
            }
            if (tsSeconds < 10) {
                tsSeconds = '0' + tsSeconds;
            }

            /**
             * The output, how you want it.
             **/
            var format = self.o.timestampFormat.replace(/%d%/g, tsDay)
                .replace(/%m%/g, tsMonth)
                .replace(/%y%/g, tsYear)
                .replace(/%h%/g, tsHours)
                .replace(/%i%/g, tsMinutes)
                .replace(/%s%/g, tsSeconds);

            return format;
        },

        /**
         * AJAX load File, which get and shows the .
         *
         * @param: awidget | object  | The widget.
         * @param: file    | file    | The file thats beeing loaded.
         * @param: loader  | object  | The widget.
         **/
        _loadAjaxFile: function (awidget, file, loader) {

            var self = this;

            awidget.find('.widget-body')
                .load(file, function (response, status, xhr) {

                    var $this = $(this);

                    /**
                     * If action runs into an error display an error msg.
                     **/
                    if (status == "error") {
                        $this.html('<h4 class="alert alert-danger">' + self.o.labelError + '<b> ' +
                            xhr.status + " " + xhr.statusText + '</b></h4>');
                    }

                    /**
                     * Run if there are no errors.
                     **/
                    if (status == "success") {

                        /**
                         * Show a timestamp.
                         **/
                        var aPalceholder = awidget.find(self.o.timestampPlaceholder);

                        if (aPalceholder.length) {

                            aPalceholder.html(self._getPastTimestamp(new Date()));
                        }

                        /**
                         * Run the callback function.
                         **/
                        if (typeof self.o.afterLoad == 'function') {
                            self.o.afterLoad.call(this, awidget);
                        }
                    }

					self = null;
                });

            /**
             * Run function for the indicator image.
             **/
            this._runLoaderWidget(loader);

        },

		_loadKeys : function () {
			
			var self = this;

			//*****************************************************************//
            /////////////////////////// SET/GET KEYS ////////////////////////////
            //*****************************************************************//

            // TODO : Push state does not work on IE9, try to find a way to detect IE and use a seperate filter

			if (self.o.ajaxnav === true) {
				var widget_url = location.hash.replace(/^#/, '');
				self.storage.keySettings = 'Plugin_settings_' + widget_url + '_' + self.objId;
				self.storage.keyPosition = 'Plugin_position_' + widget_url + '_' + self.objId;
			} else if (self.initialized === false) {
				var widget_url = self.o.pageKey || location.pathname;
				self.storage.keySettings = 'jarvisWidgets_settings_' + widget_url + '_' + self.objId;
				self.storage.keyPosition = 'jarvisWidgets_position_' + widget_url + '_' + self.objId;
			}

		},
 
        /**
         * Save all settings to the localStorage.
         *
         * @param:
         **/
        _saveSettingsWidget: function () {

            var self = this;
			var storage = self.storage;

			self._loadKeys();

			var storeSettings = self.obj.find(self.o.widgets)
				.map(function () {
					var storeSettingsStr = {};
					storeSettingsStr.id = $(this)
						.attr('id');
					storeSettingsStr.style = $(this)
						.attr('data-widget-attstyle');
					storeSettingsStr.title = $(this)
						.children('header')
						.children('h2')
						.text();
					storeSettingsStr.hidden = ($(this)
						.css('display') == 'none' ? 1 : 0);
					storeSettingsStr.collapsed = ($(this)
						.hasClass('jarviswidget-collapsed') ? 1 : 0);
					return storeSettingsStr;
				}).get();

			var storeSettingsObj = JSON.stringify({
				'widget': storeSettings
			});

			/* Place it in the storage(only if needed) */
			if (storage.enabled && storage.getKeySettings != storeSettingsObj) {
				localStorage.setItem(storage.keySettings, storeSettingsObj);
				storage.getKeySettings = storeSettingsObj;
			}

            /**
             * Run the callback function.
             **/
            
            if (typeof self.o.onSave == 'function') {
                self.o.onSave.call(this, null, storeSettingsObj, storage.keySettings);
            }
        },

        /**
         * Save positions to the localStorage.
         *
         * @param:
         **/
        _savePositionWidget: function () {

            var self = this;
			var storage = self.storage;

			self._loadKeys();

			var mainArr = self.obj.find(self.o.grid + '.sortable-grid')
				.map(function () {
					var subArr = $(this)
						.children(self.o.widgets)
						.map(function () {
							return {
								'id': $(this).attr('id')
							};
						}).get();
					return {
						'section': subArr
					};
				}).get();

			var storePositionObj = JSON.stringify({
				'grid': mainArr
			});

			/* Place it in the storage(only if needed) */
			if (storage.enabled && storage.getKeyPosition != storePositionObj) {
				localStorage.setItem(storage.keyPosition, storePositionObj);
				storage.getKeyPosition = storePositionObj
			}

            /**
             * Run the callback function.
             **/
            if (typeof self.o.onSave == 'function') {
                self.o.onSave.call(this, storePositionObj, storage.keyPosition);
            }
        },

        /**
         * Code that we run at the start.
         *
         * @param:
         **/
        init: function () {

            var self = this;
			
			if (self.initialized) return;

            self._initStorage(self.storage);

            /**
             * Force users to use an id(it's needed for the local storage).
             **/
            if (!$('#' + self.objId)
                .length) {
                alert('It looks like your using a class instead of an ID, dont do that!');
            }

            /**
             * Add RTL support.
             **/
            if (self.o.rtl === true) {
                $('body')
                    .addClass('rtl');
            }

            /**
             * This will add an extra class that we use to store the
             * widgets in the right order.(savety)
             **/

            $(self.o.grid)
                .each(function () {
                    if ($(this)
                        .find(self.o.widgets)
                        .length) {
                        $(this)
                            .addClass('sortable-grid');
                    }
                });

            //*****************************************************************//
            //////////////////////// SET POSITION WIDGET ////////////////////////
            //*****************************************************************//

            /**
             * Run if data is present.
             **/
            if (self.storage.enabled && self.storage.getKeyPosition) {

                var jsonPosition = JSON.parse(self.storage.getKeyPosition);

                /**
                 * Loop the data, and put every widget on the right place.
                 **/
                for (var key in jsonPosition.grid) {
                    var changeOrder = self.obj.find(self.o.grid + '.sortable-grid')
                        .eq(key);
                    for (var key2 in jsonPosition.grid[key].section) {
                        changeOrder.append($('#' + jsonPosition.grid[key].section[key2].id));
                    }
                }

            }

            //*****************************************************************//
            /////////////////////// SET SETTINGS WIDGET /////////////////////////
            //*****************************************************************//

            /**
             * Run if data is present.
             **/
            if (self.storage.enabled && self.storage.getKeySettings) {

                var jsonSettings = JSON.parse(self.storage.getKeySettings);

                /**
                 * Loop the data and hide/show the widgets and set the inputs in
                 * panel to checked(if hidden) and add an indicator class to the div.
                 * Loop all labels and update the widget titles.
                 **/
                for (var key in jsonSettings.widget) {
                    var widgetId = $('#' + jsonSettings.widget[key].id);

                    /**
                     * Set a style(if present).
                     **/
                    if (jsonSettings.widget[key].style) {
                        //console.log("test");
                        widgetId.removeClassPrefix('jarviswidget-color-')
                            .addClass(jsonSettings.widget[key].style)
                            .attr('data-widget-attstyle', '' + jsonSettings.widget[key].style + '');
                    }

                    /**
                     * Hide/show widget.
                     **/
                    if (jsonSettings.widget[key].hidden == 1) {
                        widgetId.hide(1);
                    } else {
                        widgetId.show(1)
                            .removeAttr('data-widget-hidden');
                    }

                    /**
                     * Toggle content widget.
                     **/
                    if (jsonSettings.widget[key].collapsed == 1) {
                        widgetId.addClass('jarviswidget-collapsed')
                            .children('div')
                            .hide(1);
                    }

                    /**
                     * Update title widget (if needed).
                     **/
                    if (widgetId.children('header')
                        .children('h2')
                        .text() != jsonSettings.widget[key].title) {
                        widgetId.children('header')
                            .children('h2')
                            .text(jsonSettings.widget[key].title);
                    }
                }
            }

            //*****************************************************************//
            ////////////////////////// LOOP AL WIDGETS //////////////////////////
            //*****************************************************************//

            /**
             * This will add/edit/remove the settings to all widgets
             **/
            self.widget.each(function () {

                var tWidget = $(this),
                	thisHeader = $(this).children('header'),
                	customBtn,
                	deleteBtn,  
                	editBtn,  
                	fullscreenBtn,
                	widgetcolorBtn,
                	toggleBtn,
                	toggleSettings,
                  	refreshBtn;

                /**
                 * Dont double wrap(check).
                 **/
                if (!thisHeader.parent()
                    .attr('role')) {

                    /**
                     * Hide the widget if the dataset 'widget-hidden' is set to true.
                     **/
                    if (tWidget.data('widget-hidden') === true) {

                        tWidget.hide();
                    }

                    /**
					 * Hide the content of the widget if the dataset
					 * 'widget-collapsed' is set to true.

					 **/
                    if (tWidget.data('widget-collapsed') === true) {
                        tWidget.addClass('jarviswidget-collapsed')
                            .children('div')
                            .hide();
                    }

                    /**
                     * Check for the dataset 'widget-icon' if so get the icon
                     * and attach it to the widget header.
                     * NOTE: MOVED THIS TO PHYSICAL for more control
                     **/
                    //if(tWidget.data('widget-icon')){
                    //	thisHeader.prepend('<i class="jarviswidget-icon '+tWidget.data('widget-icon')+'"></i>');
                    //}

                    /**
                     * Add a delete button to the widget header (if set to true).
                     **/
                    if (self.o.customButton === true && tWidget.data('widget-custombutton') ===
                        undefined && self.customClass[0].length !== 0) {
                        customBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-custom-btn"><i class="' +
                            self.customClass[0] + '"></i></a>';
                    } else {
                        customBtn = '';
                    }

                    /**
                     * Add a delete button to the widget header (if set to true).
                     **/
                    if (self.o.deleteButton === true && tWidget.data('widget-deletebutton') ===
                        undefined) {
                        deleteBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-delete-btn" rel="tooltip" title="Delete" data-placement="bottom"><i class="' +
                            self.o.deleteClass + '"></i></a>';
                    } else {
                        deleteBtn = '';
                    }

                    /**
                     * Add a delete button to the widget header (if set to true).
                     **/
                    if (self.o.editButton === true && tWidget.data('widget-editbutton') === undefined) {
                        editBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-edit-btn" rel="tooltip" title="Edit" data-placement="bottom"><i class="' +
                            self.editClass[0] + '"></i></a>';
                    } else {
                        editBtn = '';
                    }

                    /**
                     * Add a delete button to the widget header (if set to true).
                     **/
                    if (self.o.fullscreenButton === true && tWidget.data('widget-fullscreenbutton') ===
                        undefined) {
                        fullscreenBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-fullscreen-btn" rel="tooltip" title="Fullscreen" data-placement="bottom"><i class="' +
                            self.fullscreenClass[0] + '"></i></a>';
                    } else {
                        fullscreenBtn = '';
                    }

                    /**
                     * Add a delete button to the widget header (if set to true).
                     **/
                    if (self.o.colorButton === true && tWidget.data('widget-colorbutton') ===
                        undefined) {
                        widgetcolorBtn =
                            '<a data-toggle="dropdown" class="dropdown-toggle color-box selector" href="javascript:void(0);"></a><ul class="dropdown-menu arrow-box-up-right color-select pull-right"><li><span class="bg-color-green" data-widget-setstyle="jarviswidget-color-green" rel="tooltip" data-placement="left" data-original-title="Green Grass"></span></li><li><span class="bg-color-greenDark" data-widget-setstyle="jarviswidget-color-greenDark" rel="tooltip" data-placement="top" data-original-title="Dark Green"></span></li><li><span class="bg-color-greenLight" data-widget-setstyle="jarviswidget-color-greenLight" rel="tooltip" data-placement="top" data-original-title="Light Green"></span></li><li><span class="bg-color-purple" data-widget-setstyle="jarviswidget-color-purple" rel="tooltip" data-placement="top" data-original-title="Purple"></span></li><li><span class="bg-color-magenta" data-widget-setstyle="jarviswidget-color-magenta" rel="tooltip" data-placement="top" data-original-title="Magenta"></span></li><li><span class="bg-color-pink" data-widget-setstyle="jarviswidget-color-pink" rel="tooltip" data-placement="right" data-original-title="Pink"></span></li><li><span class="bg-color-pinkDark" data-widget-setstyle="jarviswidget-color-pinkDark" rel="tooltip" data-placement="left" data-original-title="Fade Pink"></span></li><li><span class="bg-color-blueLight" data-widget-setstyle="jarviswidget-color-blueLight" rel="tooltip" data-placement="top" data-original-title="Light Blue"></span></li><li><span class="bg-color-teal" data-widget-setstyle="jarviswidget-color-teal" rel="tooltip" data-placement="top" data-original-title="Teal"></span></li><li><span class="bg-color-blue" data-widget-setstyle="jarviswidget-color-blue" rel="tooltip" data-placement="top" data-original-title="Ocean Blue"></span></li><li><span class="bg-color-blueDark" data-widget-setstyle="jarviswidget-color-blueDark" rel="tooltip" data-placement="top" data-original-title="Night Sky"></span></li><li><span class="bg-color-darken" data-widget-setstyle="jarviswidget-color-darken" rel="tooltip" data-placement="right" data-original-title="Night"></span></li><li><span class="bg-color-yellow" data-widget-setstyle="jarviswidget-color-yellow" rel="tooltip" data-placement="left" data-original-title="Day Light"></span></li><li><span class="bg-color-orange" data-widget-setstyle="jarviswidget-color-orange" rel="tooltip" data-placement="bottom" data-original-title="Orange"></span></li><li><span class="bg-color-orangeDark" data-widget-setstyle="jarviswidget-color-orangeDark" rel="tooltip" data-placement="bottom" data-original-title="Dark Orange"></span></li><li><span class="bg-color-red" data-widget-setstyle="jarviswidget-color-red" rel="tooltip" data-placement="bottom" data-original-title="Red Rose"></span></li><li><span class="bg-color-redLight" data-widget-setstyle="jarviswidget-color-redLight" rel="tooltip" data-placement="bottom" data-original-title="Light Red"></span></li><li><span class="bg-color-white" data-widget-setstyle="jarviswidget-color-white" rel="tooltip" data-placement="right" data-original-title="Purity"></span></li><li><a href="javascript:void(0);" class="jarviswidget-remove-colors" data-widget-setstyle="" rel="tooltip" data-placement="bottom" data-original-title="Reset widget color to default">Remove</a></li></ul>';
                        thisHeader.prepend('<div class="widget-toolbar">' + widgetcolorBtn + '</div>');

                    } else {
                        widgetcolorBtn = '';
                    }

                    /**
                     * Add a toggle button to the widget header (if set to true).
                     **/
                    if (self.o.toggleButton === true && tWidget.data('widget-togglebutton') ===
                        undefined) {
                        if (tWidget.data('widget-collapsed') === true || tWidget.hasClass(
                            'jarviswidget-collapsed')) {
                            toggleSettings = self.toggleClass[1];
                        } else {
                            toggleSettings = self.toggleClass[0];
                        }
                        toggleBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-toggle-btn" rel="tooltip" title="Collapse" data-placement="bottom"><i class="' +
                            toggleSettings + '"></i></a>';
                    } else {
                        toggleBtn = '';
                    }

                    /**
                     * Add a refresh button to the widget header (if set to true).
                     **/
                    if (self.o.refreshButton === true && tWidget.data('widget-refreshbutton') !==
                        false && tWidget.data('widget-load')) {
                        refreshBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-refresh-btn" data-loading-text="&nbsp;&nbsp;Loading...&nbsp;" rel="tooltip" title="Refresh" data-placement="bottom"><i class="' +
                            self.o.refreshButtonClass + '"></i></a>';
                    } else {
                        refreshBtn = '';
                    }

                    /**
                     * Set the buttons order.
                     **/
                    var formatButtons = self.o.buttonOrder.replace(/%refresh%/g, refreshBtn)
                        .replace(/%delete%/g, deleteBtn)
                        .replace(/%custom%/g, customBtn)
                        .replace(/%fullscreen%/g, fullscreenBtn)
                        .replace(/%edit%/g, editBtn)
                        .replace(/%toggle%/g, toggleBtn);

                    /**
                     * Add a button wrapper to the header.
                     **/
                    if (refreshBtn !== '' || deleteBtn !== '' || customBtn !== '' || fullscreenBtn !== '' ||
                        editBtn !== '' || toggleBtn !== '') {
                        thisHeader.prepend('<div class="jarviswidget-ctrls">' + formatButtons +
                            '</div>');
                    }

                    /**
                     * Adding a helper class to all sortable widgets, this will be
                     * used to find the widgets that are sortable, it will skip the widgets
                     * that have the dataset 'widget-sortable="false"' set to false.
                     **/
                    if (self.o.sortable === true && tWidget.data('widget-sortable') === undefined) {
                        tWidget.addClass('jarviswidget-sortable');
                    }

                    /**
                     * If the edit box is present copy the title to the input.
                     **/
                    if (tWidget.find(self.o.editPlaceholder)
                        .length) {
                        tWidget.find(self.o.editPlaceholder)
                            .find('input')
                            .val($.trim(thisHeader.children('h2')
                                .text()));
                    }

                    /**
                     * Prepend the image to the widget header.
                     **/
                    thisHeader.append(
                        '<span class="jarviswidget-loader"><i class="fa fa-refresh fa-spin"></i></span>'
                    );

                    /**
                     * Adding roles to some parts.
                     **/
                    tWidget.attr('role', 'widget')
                        .children('div')
                        .attr('role', 'content')
                        .prev('header')
                        .attr('role', 'heading')
                        .children('div')
                        .attr('role', 'menu');
                }
            });

            /**
             * Hide all buttons if option is set to true.
             **/
            if (self.o.buttonsHidden === true) {
                $(self.o.pwCtrls)
                    .hide();
            }

            /* activate all tooltips */
            // $(".jarviswidget header [rel=tooltip]")
            //     .tooltip();

            //******************************************************************//
            //////////////////////////////// AJAX ////////////////////////////////
            //******************************************************************//

            /**
             * Loop all ajax widgets.
             **/
            // $.intervalArr = new Array(); - decleared in app.js
            self.obj.find('[data-widget-load]')
                .each(function () {

                    /**
                     * Variables.
                     **/
                    var thisItem = $(this),
                        thisItemHeader = thisItem.children(),
                        pathToFile = thisItem.data('widget-load'),
                        reloadTime = thisItem.data('widget-refresh') * 1000,
                        ajaxLoader = thisItem.children();

                    if (!thisItem.find('.jarviswidget-ajax-placeholder')
                        .length) {

                        /**
                         * Append a AJAX placeholder.
                         **/
                        thisItem.children('widget-body')
                            .append('<div class="jarviswidget-ajax-placeholder">' + self.o.loadingLabel +
                                '</div>');

                        /**
                         * If widget has a reload time refresh the widget, if the value
                         * has been set to 0 dont reload.
                         **/
                        if (thisItem.data('widget-refresh') > 0) {

                            /**
                             * Load file on start.
                             **/
                            self._loadAjaxFile(thisItem, pathToFile, thisItemHeader);

                            /**
                             * Set an interval to reload the content every XXX seconds.
                             * intervalArr.push(setInterval(intervalOne, 2000)  );
                             **/
                            $.intervalArr.push( setInterval(function () {self._loadAjaxFile(thisItem, pathToFile, thisItemHeader)}, reloadTime) );
                            
                        } else {

                            /**
                             * Load the content just once.
                             **/
                            self._loadAjaxFile(thisItem, pathToFile, thisItemHeader);

                        }
                    }
                });

            //******************************************************************//
            ////////////////////////////// SORTABLE //////////////////////////////
            //******************************************************************//

            /**
             * jQuery UI soratble, this allows users to sort the widgets.
             * Notice that this part needs the jquery-ui core to work.
             **/
            if (self.o.sortable === true && jQuery.ui) {
                var sortItem = self.obj.find(self.o.grid + '.sortable-grid')
                    .not('[data-widget-excludegrid]');
                sortItem.sortable({
                    items: sortItem.find(self.o.widgets + '.jarviswidget-sortable'),
                    connectWith: sortItem,
                    placeholder: self.o.placeholderClass,
                    cursor: 'move',
                    revert: true,
                    opacity: self.o.opacity,
                    delay: 200,
                    cancel: '.button-icon, #jarviswidget-fullscreen-mode > div',
                    zIndex: 10000,
                    handle: self.o.dragHandle,
                    forcePlaceholderSize: true,
                    forceHelperSize: true,
                    update: function (event, ui) {
                        /* run pre-loader in the widget */
                        self._runLoaderWidget(ui.item.children());
                        /* store the positions of the plugins */
                        self._savePositionWidget();
                        /**
                         * Run the callback function.
                         **/
                        if (typeof self.o.onChange == 'function') {
                            self.o.onChange.call(this, ui.item);
                        }
                    }
                });
            }

            //*****************************************************************//
            ////////////////////////// BUTTONS VISIBLE //////////////////////////
            //*****************************************************************//

            /**
             * Show and hide the widget control buttons, the buttons will be
             * visible if the users hover over the widgets header. At default the
             * buttons are always visible.
             **/
            if (self.o.buttonsHidden === true) {

                /**
                 * Show and hide the buttons.
                 **/
                self.widget.children('header')
                    .on('mouseenter.' + pluginName, function () {
                        $(this)
                            .children(self.o.pwCtrls)
                            .stop(true, true)
                            .fadeTo(100, 1.0);
                    })
					.on('mouseleave.' + pluginName, function () {
                        $(this)
                            .children(self.o.pwCtrls)
                            .stop(true, true)
                            .fadeTo(100, 0.0);
                    });
            }

            //*****************************************************************//
            ///////////////////////// CLICKEVENTS //////////////////////////
            //*****************************************************************//

            self._clickEvents();

            //*****************************************************************//
            ///////////////////// DELETE LOCAL STORAGE KEYS /////////////////////
            //*****************************************************************//

			if (self.storage.enabled) {
				/**
				 * Delete the settings key.
				 **/
				$(self.o.deleteSettingsKey)
					.on(clickEvent, this, function (e) {
                        var cleared = confirm(self.o.settingsKeyLabel);
                        if (cleared) {
                            localStorage.removeItem(keySettings);
                        }
						e.preventDefault();
					});
				/**
				 * Delete the position key.
				 **/
				$(self.o.deletePositionKey)
					.on(clickEvent, this, function (e) {
                        var cleared = confirm(self.o.positionKeyLabel);
                        if (cleared) {
                            localStorage.removeItem(keyPosition);
                        }
						e.preventDefault();
					});
			}

			initialized = true;
        },

        /**
         * Initialize storage.
         *
         * @param:
         **/
        _initStorage: function (storage) {

            //*****************************************************************//
            //////////////////////// LOCALSTORAGE CHECK /////////////////////////
            //*****************************************************************//

            storage.enabled = storage.enabled && !! function () {
                var result, uid = +new Date();
                try {
                    localStorage.setItem(uid, uid);
                    result = localStorage.getItem(uid) == uid;
                    localStorage.removeItem(uid);
                    return result;
                } catch (e) {}
            }();

			this._loadKeys();

            if (storage.enabled) {

				storage.getKeySettings = localStorage.getItem(storage.keySettings);
				storage.getKeyPosition = localStorage.getItem(storage.keyPosition);
				
            } // end if

        },

        /**
         * All of the click events.
         *
         * @param:
         **/
        _clickEvents: function () {

            var self = this;

            var headers = self.widget.children('header');

            //*****************************************************************//
            /////////////////////////// TOGGLE WIDGETS //////////////////////////
            //*****************************************************************//

            /**
             * Allow users to toggle the content of the widgets.
             **/
            headers.on(clickEvent, '.jarviswidget-toggle-btn', function (e) {

                var tWidget = $(this);
                var pWidget = tWidget.parents(self.o.widgets);

                /**
                 * Run function for the indicator image.
                 **/
                self._runLoaderWidget(tWidget);

                /**
                 * Change the class and hide/show the widgets content.
                 **/
                if (pWidget.hasClass('jarviswidget-collapsed')) {
                    tWidget.children()
                        .removeClass(self.toggleClass[1])
                        .addClass(self.toggleClass[0])
                        .parents(self.o.widgets)
                        .removeClass('jarviswidget-collapsed')
                        .children('[role=content]')
                        .slideDown(self.o.toggleSpeed, function () {
                            self._saveSettingsWidget();
                        });
                } else {
                    tWidget.children()
                        .removeClass(self.toggleClass[0])
                        .addClass(self.toggleClass[1])
                        .parents(self.o.widgets)
                        .addClass('jarviswidget-collapsed')
                        .children('[role=content]')
                        .slideUp(self.o.toggleSpeed, function () {
                            self._saveSettingsWidget();
                        });
                }

                /**
                 * Run the callback function.
                 **/
                if (typeof self.o.onToggle == 'function') {
                    self.o.onToggle.call(this, pWidget);
                }

                e.preventDefault();
            });

            //*****************************************************************//
            ///////////////////////// FULLSCREEN WIDGETS ////////////////////////
            //*****************************************************************//

            /**
             * Set fullscreen height function.
             **/
            function heightFullscreen() {
                if ($('#jarviswidget-fullscreen-mode')
                    .length) {

                    /**
                     * Setting height variables.
                     **/
                    var heightWindow = $(window)
                        .height();
                    var heightHeader = $('#jarviswidget-fullscreen-mode')
                        .children(self.o.widgets)
                        .children('header')
                        .height();

                    /**
                     * Setting the height to the right widget.
                     **/
                    $('#jarviswidget-fullscreen-mode')
                        .children(self.o.widgets)
                        .children('div')
                        .height(heightWindow - heightHeader - 15);
                }
            }

            /**
             * On click go to fullscreen mode.
             **/
            headers.on(clickEvent, '.jarviswidget-fullscreen-btn', function (e) {

                var thisWidget = $(this)
                    .parents(self.o.widgets);
                var thisWidgetContent = thisWidget.children('div');

                /**
                 * Run function for the indicator image.
                 **/
                self._runLoaderWidget($(this));

                /**
                 * Wrap the widget and go fullsize.
                 **/
                if ($('#jarviswidget-fullscreen-mode')
                    .length) {

                    /**
                     * Remove class from the body.
                     **/
                    $('.nooverflow')
                        .removeClass('nooverflow');

                    /**
                     * Unwrap the widget, remove the height, set the right
                     * fulscreen button back, and show all other buttons.
                     **/
                    thisWidget.unwrap('<div>')
                        .children('div')
                        .removeAttr('style')
                        .end()
                        .find('.jarviswidget-fullscreen-btn:first')
                        .children()
                        .removeClass(self.fullscreenClass[1])
                        .addClass(self.fullscreenClass[0])
                        .parents(self.pwCtrls)
                        .children('a')
                        .show();

                    /**
                     * Reset collapsed widgets.
                     **/
                    if (thisWidgetContent.hasClass('jarviswidget-visible')) {
                        thisWidgetContent.hide()
                            .removeClass('jarviswidget-visible');
                    }

                } else {

                    /**
                     * Prevent the body from scrolling.
                     **/
                    $('body')
                        .addClass('nooverflow');

                    /**
					 * Wrap, append it to the body, show the right button

					 * and hide all other buttons.
					 **/
                    thisWidget.wrap('<div id="jarviswidget-fullscreen-mode"/>')
                        .parent()
                        .find('.jarviswidget-fullscreen-btn:first')
                        .children()
                        .removeClass(self.fullscreenClass[0])
                        .addClass(self.fullscreenClass[1])
                        .parents(self.pwCtrls)
                        .children('a:not(.jarviswidget-fullscreen-btn)')
                        .hide();

                    /**
                     * Show collapsed widgets.
                     **/
                    if (thisWidgetContent.is(':hidden')) {
                        thisWidgetContent.show()
                            .addClass('jarviswidget-visible');
                    }
                }

                /**
                 * Run the set height function.
                 **/
                heightFullscreen();

                /**
                 * Run the callback function.
                 **/
                if (typeof self.o.onFullscreen == 'function') {
                    self.o.onFullscreen.call(this, thisWidget);
                }

                e.preventDefault();
            });

            /**
             * Run the set fullscreen height function when the screen resizes.
             **/
            $(window)
                .on('resize.' + pluginName, function () {

                    /**
                     * Run the set height function.
                     **/
                    heightFullscreen();
                });

            //*****************************************************************//
            //////////////////////////// EDIT WIDGETS ///////////////////////////
            //*****************************************************************//

            /**
             * Allow users to show/hide a edit box.
             **/
            headers.on(clickEvent, '.jarviswidget-edit-btn', function (e) {

                var tWidget = $(this)
                    .parents(self.o.widgets);

                /**
                 * Run function for the indicator image.
                 **/
                self._runLoaderWidget($(this));

                /**
                 * Show/hide the edit box.
                 **/
                if (tWidget.find(self.o.editPlaceholder)
                    .is(':visible')) {
                    $(this)
                        .children()
                        .removeClass(self.editClass[1])
                        .addClass(self.editClass[0])
                        .parents(self.o.widgets)
                        .find(self.o.editPlaceholder)
                        .slideUp(self.o.editSpeed, function () {
                            self._saveSettingsWidget();
                        });
                } else {
                    $(this)
                        .children()
                        .removeClass(self.editClass[0])
                        .addClass(self.editClass[1])
                        .parents(self.o.widgets)
                        .find(self.o.editPlaceholder)
                        .slideDown(self.o.editSpeed);
                }

                /**
                 * Run the callback function.
                 **/
                if (typeof self.o.onEdit == 'function') {
                    self.o.onEdit.call(this, tWidget);
                }

                e.preventDefault();
            });

            /**
             * Update the widgets title by using the edit input.
             **/
            $(self.o.editPlaceholder)
                .find('input')
                .keyup(function () {
                    $(this)
                        .parents(self.o.widgets)
                        .children('header')
                        .children('h2')
                        .text($(this)
                            .val());
                });

            /**
             * Set a custom style.
             **/
            headers.on(clickEvent, '[data-widget-setstyle]', function (e) {

                var val = $(this)
                    .data('widget-setstyle');
                var styles = '';

                /**
                 * Get all other styles, in order to remove it.
                 **/
                $(this)
                    .parents(self.o.editPlaceholder)
                    .find('[data-widget-setstyle]')
                    .each(function () {
                        styles += $(this)
                            .data('widget-setstyle') + ' ';
                    });

                /**
                 * Set the new style.
                 **/
                $(this)
                    .parents(self.o.widgets)
                    .attr('data-widget-attstyle', '' + val + '')
                    .removeClassPrefix('jarviswidget-color-')
                    .addClass(val);

                /**
                 * Run function for the indicator image.
                 **/
                self._runLoaderWidget($(this));

                /**
                 * Lets save the setings.
                 **/
                self._saveSettingsWidget();

                e.preventDefault();
            });

            //*****************************************************************//
            /////////////////////////// CUSTOM ACTION ///////////////////////////
            //*****************************************************************//

            /**
             * Allow users to show/hide a edit box.
             **/
            headers.on(clickEvent, '.jarviswidget-custom-btn', function (e) {

                var w = $(this)
                    .parents(self.o.widgets);

                /**
                 * Run function for the indicator image.
                 **/
                self._runLoaderWidget($(this));

                /**
                 * Start and end custom action.
                 **/
                if ($(this)
                    .children('.' + self.customClass[0])
                    .length) {
                    $(this)
                        .children()
                        .removeClass(self.customClass[0])
                        .addClass(self.customClass[1]);

                    /**
                     * Run the callback function.
                     **/
                    if (typeof self.o.customStart == 'function') {
                        self.o.customStart.call(this, w);
                    }
                } else {
                    $(this)
                        .children()
                        .removeClass(self.customClass[1])
                        .addClass(self.customClass[0]);

                    /**
                     * Run the callback function.
                     **/
                    if (typeof self.o.customEnd == 'function') {
                        self.o.customEnd.call(this, w);
                    }
                }

                /**
                 * Lets save the setings.
                 **/
                self._saveSettingsWidget();

                e.preventDefault();
            });

            //*****************************************************************//
            /////////////////////////// DELETE WIDGETS //////////////////////////
            //*****************************************************************//

            /**
             * Allow users to delete the widgets.
             **/
            headers.on(clickEvent, '.jarviswidget-delete-btn', function (e) {

                var tWidget = $(this)
                    .parents(self.o.widgets);
                var removeId = tWidget.attr('id');
                var widTitle = tWidget.children('header')
                    .children('h2')
                    .text();

                /**
                 * Delete the widgets with a confirm popup.
                 **/
                
                if ($.SmartMessageBox) {
   
                   $.SmartMessageBox({
	                    title: "<i class='fa fa-times' style='color:#ed1c24'></i> " + self.o.labelDelete +
	                        ' "' + widTitle + '"',
	                    content: self.o.deleteMsg,
	                    buttons: '[No][Yes]'
	                }, function (ButtonPressed) {
	                    //console.log(ButtonPressed);
	                    if (ButtonPressed == "Yes") {
	                        /**
	                         * Run function for the indicator image.
	                         **/
	                        self._runLoaderWidget($(this));
	
	                        /**
	                         * Delete the right widget.
	                         **/
	                        $('#' + removeId)
	                            .fadeOut(self.o.deleteSpeed, function () {
	
	                                $(this)
	                                    .remove();
	
	                                /**
	                                 * Run the callback function.
	                                 **/
	                                if (typeof self.o.onDelete == 'function') {
	                                    self.o.onDelete.call(this, tWidget);
	                                }
	                            });
	                    }
	
	                });
	                	
                } else {
                	
                	/**
                     * Delete the right widget.
                     **/
                    $('#' + removeId)
                    .fadeOut(self.o.deleteSpeed, function () {

                        $(this)
                            .remove();

                        /**
                         * Run the callback function.
                         **/
                        if (typeof self.o.onDelete == 'function') {
                            self.o.onDelete.call(this, tWidget);
                        }
                    });
                	
                }

                e.preventDefault();
            });

            //******************************************************************//
            /////////////////////////// REFRESH BUTTON ///////////////////////////
            //******************************************************************//

            /**
             * Refresh ajax upon clicking refresh link.
             **/
            headers.on(clickEvent, '.jarviswidget-refresh-btn', function (e) {

                /**
                 * Variables.
                 **/
                var rItem = $(this)
                    .parents(self.o.widgets),
                    pathToFile = rItem.data('widget-load'),
                    ajaxLoader = rItem.children(),
                    btn = $(this);

                /**
                 * Run the ajax function.
                 **/
                btn.button('loading');
                ajaxLoader.addClass("widget-body-ajax-loading");
                setTimeout(function () {
                    btn.button('reset');
                    ajaxLoader.removeClass("widget-body-ajax-loading");
                    self._loadAjaxFile(rItem, pathToFile, ajaxLoader);

                }, 1000);

                e.preventDefault();
            });
			
			headers = null;
        },

        /**
         * Destroy.
         *
         * @param:
         **/
        destroy: function () {
            var self = this, 
            namespace = '.' + pluginName, 
            sortItem = self.obj.find(self.o.grid + '.sortable-grid').not('[data-widget-excludegrid]');
            
            sortItem.sortable('destroy');
            self.widget.children('header').off(namespace);
			$(self.o.deleteSettingsKey).off(namespace);
			$(self.o.deletePositionKey).off(namespace);
			$(window).off(namespace);
            self.obj.removeData(pluginName);
        }
    };

    $.fn[pluginName] = function (option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data(pluginName);
            if (!data) {
				var options = typeof option == 'object' && option;
                $this.data(pluginName, (data = new Plugin(this, options)));
            }
            if (typeof option == 'string') {
                data[option]();
            }
        });
    };

    /**
     * Default settings(dont change).
     * You can globally override these options
     * by using $.fn.pluginName.key = 'value';
     **/

    $.fn[pluginName].defaults = {
        grid: 'section',
        widgets: '.jarviswidget',
        localStorage: true,
        deleteSettingsKey: '',
        settingsKeyLabel: 'Reset settings?',
        deletePositionKey: '',
        positionKeyLabel: 'Reset position?',
        sortable: true,
        buttonsHidden: false,
        toggleButton: true,
        toggleClass: 'min-10 | plus-10',
        toggleSpeed: 200,
        onToggle: function () {},
        deleteButton: true,
        deleteMsg:'Warning: This action cannot be undone',
        deleteClass: 'trashcan-10',
        deleteSpeed: 200,
        onDelete: function () {},
        editButton: true,
        editPlaceholder: '.jarviswidget-editbox',
        editClass: 'pencil-10 | delete-10',
        editSpeed: 200,
        onEdit: function () {},
        colorButton: true,
        fullscreenButton: true,
        fullscreenClass: 'fullscreen-10 | normalscreen-10',
        fullscreenDiff: 3,
        onFullscreen: function () {},
        customButton: true,
        customClass: '',
        customStart: function () {},
        customEnd: function () {},
        buttonOrder: '%refresh% %delete% %custom% %edit% %fullscreen% %toggle%',
        opacity: 1.0,
        dragHandle: '> header',
        placeholderClass: 'jarviswidget-placeholder',
        indicator: true,
        indicatorTime: 600,
        ajax: true,
        loadingLabel: 'loading...',
        timestampPlaceholder: '.jarviswidget-timestamp',
        timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
        refreshButton: true,
        refreshButtonClass: 'refresh-10',
        labelError: 'Sorry but there was a error:',
        labelUpdated: 'Last Update:',
        labelRefresh: 'Refresh',
        labelDelete: 'Delete widget:',
        afterLoad: function () {},
        rtl: false,
        onChange: function () {},
        onSave: function () {},
        ajaxnav: true
    };

    /*
     * REMOVE CSS CLASS WITH PREFIX
     * Description: Remove classes that have given prefix. You have an element with classes
     * 				"widget widget-color-red"
     * Usage: $elem.removeClassPrefix('widget-color-');
     */

    $.fn.removeClassPrefix = function (prefix) {

        this.each(function (i, it) {
            var classes = it.className.split(" ")
                .map(function (item) {
                    return item.indexOf(prefix) === 0 ? "" : item;
                });
            //it.className = classes.join(" ");
            it.className = $.trim(classes.join(" "));

        });

        return this;
    };
})(jQuery, window, document);

/***/ },

/***/ 1323:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(1311);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }

});
//# sourceMappingURL=0.map