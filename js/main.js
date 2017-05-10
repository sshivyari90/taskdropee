/* JS code for dataduration  */
function GetDays(){
    var dropdt = new Date(document.getElementById("drop_date").value);
    var pickdt = new Date(document.getElementById("pick_date").value);
    return parseInt((dropdt - pickdt) / (24 * 3600 * 1000));
	}
	function cal(){
   		if(document.getElementById("drop_date")){
    	document.getElementById("numdays2").value=GetDays();}  
	}
	/* ajax code for salesgraph  */
    FusionCharts.ready(function() {
        var revenueChart = new FusionCharts({
            type: 'column2d',
            renderAt: 'chart-container1',
            width: '550',
            height: '350',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Sale Spreadsheet",
                    "subCaption": "Region A",
                    "xAxisName": "Month",
                    "paletteColors": "#0075c2",
                    "bgColor": "#ffffff",
                    "borderAlpha": "20",
                    "canvasBorderAlpha": "0",
                    "usePlotGradientColor": "0",
                    "plotBorderAlpha": "10",
                    "placevaluesInside": "1",
                    "rotatevalues": "1",
                    "valueFontColor": "#ffffff",
                    "showXAxisLine": "1",
                    "xAxisLineColor": "#999999",
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "showAlternateHGridColor": "0",
                    "subcaptionFontBold": "0",
                    "subcaptionFontSize": "14"
                },
                "data": [{
                    "label": "Jan",
                    "value": "12000"
                }, {
                    "label": "Feb",
                    "value": "15356"
                }, {
                    "label": "Mar",
                    "value": "17834"
                }, {
                    "label": "Apr",
                    "value": "12980"
                }, {
                    "label": "May",
                    "value": "24567"
                }, {
                    "label": "Jun",
                    "value": "12000"
                }, {
                    "label": "Jul",
                    "value": "15356"
                }, {
                    "label": "Aug",
                    "value": "15888"
                }, {
                    "label": "Sep",
                    "value": "17834"
                }, {
                    "label": "Oct",
                    "value": "19890"
                }, {
                    "label": "Nov",
                    "value": "21789"
                }, {
                    "label": "Dec",
                    "value": "22789"
                }],
            }
        }).render();
    });

    FusionCharts.ready(function() {
        var revenueChart = new FusionCharts({
            type: 'column2d',
            renderAt: 'chart-container2',
            width: '550',
            height: '350',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Sale Spreadsheet",
                    "subCaption": "Region B",
                    "xAxisName": "Month",
                    "paletteColors": "#0075c2",
                    "bgColor": "#ffffff",
                    "borderAlpha": "20",
                    "canvasBorderAlpha": "0",
                    "usePlotGradientColor": "0",
                    "plotBorderAlpha": "10",
                    "placevaluesInside": "1",
                    "rotatevalues": "1",
                    "valueFontColor": "#ffffff",
                    "showXAxisLine": "1",
                    "xAxisLineColor": "#999999",
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "showAlternateHGridColor": "0",
                    "subcaptionFontBold": "0",
                    "subcaptionFontSize": "14"
                },
                "data": [{
                    "label": "Jan",
                    "value": "890"
                }, {
                    "label": "Feb",
                    "value": "367"
                }, {
                    "label": "Mar",
                    "value": "789"
                }, {
                    "label": "Apr",
                    "value": "567"
                }, {
                    "label": "May",
                    "value": "364"
                }, {
                    "label": "Jun",
                    "value": "867"
                }, {
                    "label": "Jul",
                    "value": "187"
                }, {
                    "label": "Aug",
                    "value": "890"
                }, {
                    "label": "Sep",
                    "value": "108"
                }, {
                    "label": "Oct",
                    "value": "897"
                }, {
                    "label": "Nov",
                    "value": "798"
                }, {
                    "label": "Dec",
                    "value": "245"
                }],
            }
        }).render();
    });

    FusionCharts.ready(function() {
        var revenueChart = new FusionCharts({
            type: 'column2d',
            renderAt: 'chart-container3',
            width: '550',
            height: '350',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Sale Spreadsheet",
                    "subCaption": "Region C",
                    "xAxisName": "Month",
                    "paletteColors": "#0075c2",
                    "bgColor": "#ffffff",
                    "borderAlpha": "20",
                    "canvasBorderAlpha": "0",
                    "usePlotGradientColor": "0",
                    "plotBorderAlpha": "10",
                    "placevaluesInside": "1",
                    "rotatevalues": "1",
                    "valueFontColor": "#ffffff",
                    "showXAxisLine": "1",
                    "xAxisLineColor": "#999999",
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "showAlternateHGridColor": "0",
                    "subcaptionFontBold": "0",
                    "subcaptionFontSize": "14"
                },
                "data": [{
                    "label": "Jan",
                    "value": "1234"
                }, {
                    "label": "Feb",
                    "value": "5672"
                }, {
                    "label": "Mar",
                    "value": "3456"
                }, {
                    "label": "Apr",
                    "value": "6543"
                }, {
                    "label": "May",
                    "value": "6753"
                }, {
                    "label": "Jun",
                    "value": "6573"
                }, {
                    "label": "Jul",
                    "value": "2534"
                }, {
                    "label": "Aug",
                    "value": "2672"
                }, {
                    "label": "Sep",
                    "value": "1753"
                }, {
                    "label": "Oct",
                    "value": "3752"
                }, {
                    "label": "Nov",
                    "value": "2863"
                }, {
                    "label": "Dec",
                    "value": "8162"
                }],
            }
        }).render();
    });
   