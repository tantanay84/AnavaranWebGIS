var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_All_Points_10_1_1 = new ol.format.GeoJSON();
var features_All_Points_10_1_1 = format_All_Points_10_1_1.readFeatures(json_All_Points_10_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_All_Points_10_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_All_Points_10_1_1.addFeatures(features_All_Points_10_1_1);
var lyr_All_Points_10_1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_All_Points_10_1_1, 
                style: style_All_Points_10_1_1,
                interactive: true,
    title: 'All_Points_10_1<br />\
    <img src="styles/legend/All_Points_10_1_1_0.png" /> ANDHRA PRADESH<br />\
    <img src="styles/legend/All_Points_10_1_1_1.png" /> ARUNACHAL PRADESH<br />\
    <img src="styles/legend/All_Points_10_1_1_2.png" /> ASSAM<br />\
    <img src="styles/legend/All_Points_10_1_1_3.png" /> CHANDIGARH<br />\
    <img src="styles/legend/All_Points_10_1_1_4.png" /> DADRA AND NAGAR HAVELI AND DAMAN AND DIU<br />\
    <img src="styles/legend/All_Points_10_1_1_5.png" /> GUJARAT<br />\
    <img src="styles/legend/All_Points_10_1_1_6.png" /> HARYANA<br />\
    <img src="styles/legend/All_Points_10_1_1_7.png" /> HIMACHAL PRADESH<br />\
    <img src="styles/legend/All_Points_10_1_1_8.png" /> JAMMU AND KASHMIR<br />\
    <img src="styles/legend/All_Points_10_1_1_9.png" /> KERALA<br />\
    <img src="styles/legend/All_Points_10_1_1_10.png" /> MADHYA PRADESH<br />\
    <img src="styles/legend/All_Points_10_1_1_11.png" /> MANIPUR<br />\
    <img src="styles/legend/All_Points_10_1_1_12.png" /> MEGHALAYA<br />\
    <img src="styles/legend/All_Points_10_1_1_13.png" /> MIZORAM<br />\
    <img src="styles/legend/All_Points_10_1_1_14.png" /> NAGALAND<br />\
    <img src="styles/legend/All_Points_10_1_1_15.png" /> PUNJAB<br />\
    <img src="styles/legend/All_Points_10_1_1_16.png" /> TAMIL NADU<br />\
    <img src="styles/legend/All_Points_10_1_1_17.png" /> TELANGANA<br />\
    <img src="styles/legend/All_Points_10_1_1_18.png" /> TRIPURA<br />\
    <img src="styles/legend/All_Points_10_1_1_19.png" /> UTTAR PRADESH<br />\
    <img src="styles/legend/All_Points_10_1_1_20.png" /> UTTARAKHAND<br />\
    <img src="styles/legend/All_Points_10_1_1_21.png" /> WEST BENGAL<br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_All_Points_10_1_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_All_Points_10_1_1];
lyr_All_Points_10_1_1.set('fieldAliases', {'PATCH_ID': 'PATCH_ID', 'LAT': 'LAT', 'LONG': 'LONG', 'DATE': 'DATE', 'STATE': 'STATE', 'DISTRICT': 'DISTRICT', 'CIRCLE': 'CIRCLE', 'DIVISION': 'DIVISION', 'RANGE': 'RANGE', 'BLOCK': 'BLOCK', 'BEAT': 'BEAT', 'COMPT_NO': 'COMPT_NO', 'Feedback F': 'Feedback F', });
lyr_All_Points_10_1_1.set('fieldImages', {'PATCH_ID': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'DATE': 'TextEdit', 'STATE': 'TextEdit', 'DISTRICT': 'TextEdit', 'CIRCLE': 'TextEdit', 'DIVISION': 'TextEdit', 'RANGE': 'TextEdit', 'BLOCK': 'TextEdit', 'BEAT': 'TextEdit', 'COMPT_NO': 'TextEdit', 'Feedback F': 'TextEdit', });
lyr_All_Points_10_1_1.set('fieldLabels', {'PATCH_ID': 'header label', 'LAT': 'inline label', 'LONG': 'inline label', 'DATE': 'inline label', 'STATE': 'inline label', 'DISTRICT': 'inline label', 'CIRCLE': 'inline label', 'DIVISION': 'inline label', 'RANGE': 'inline label', 'BLOCK': 'header label', 'BEAT': 'inline label', 'COMPT_NO': 'inline label', 'Feedback F': 'no label', });
lyr_All_Points_10_1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});