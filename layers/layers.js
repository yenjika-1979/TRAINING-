var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_BingAerial_1 = new ol.layer.Tile({
            'title': 'Bing Aerial',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://ak.t0.tiles.virtualearth.net/tiles/a{q}.jpeg?n=z&g=5880'
            })
        });
var format_RegionMaritime_2 = new ol.format.GeoJSON();
var features_RegionMaritime_2 = format_RegionMaritime_2.readFeatures(json_RegionMaritime_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegionMaritime_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionMaritime_2.addFeatures(features_RegionMaritime_2);
var lyr_RegionMaritime_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegionMaritime_2, 
                style: style_RegionMaritime_2,
                popuplayertitle: 'Region Maritime',
                interactive: false,
                title: '<img src="styles/legend/RegionMaritime_2.png" /> Region Maritime'
            });
var format_Couverturesanitaire_3 = new ol.format.GeoJSON();
var features_Couverturesanitaire_3 = format_Couverturesanitaire_3.readFeatures(json_Couverturesanitaire_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Couverturesanitaire_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Couverturesanitaire_3.addFeatures(features_Couverturesanitaire_3);
var lyr_Couverturesanitaire_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Couverturesanitaire_3, 
                style: style_Couverturesanitaire_3,
                popuplayertitle: 'Couverture sanitaire',
                interactive: false,
                title: '<img src="styles/legend/Couverturesanitaire_3.png" /> Couverture sanitaire'
            });
var format_CentredeSant_4 = new ol.format.GeoJSON();
var features_CentredeSant_4 = format_CentredeSant_4.readFeatures(json_CentredeSant_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentredeSant_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentredeSant_4.addFeatures(features_CentredeSant_4);
var lyr_CentredeSant_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentredeSant_4, 
                style: style_CentredeSant_4,
                popuplayertitle: 'Centre de Santé',
                interactive: true,
    title: 'Centre de Santé<br />\
    <img src="styles/legend/CentredeSant_4_0.png" /> hospital<br />\
    <img src="styles/legend/CentredeSant_4_1.png" /> clinic<br />' });
var format_Localits_5 = new ol.format.GeoJSON();
var features_Localits_5 = format_Localits_5.readFeatures(json_Localits_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localits_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localits_5.addFeatures(features_Localits_5);
var lyr_Localits_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localits_5, 
                style: style_Localits_5,
                popuplayertitle: 'Localités',
                interactive: true,
    title: 'Localités<br />\
    <img src="styles/legend/Localits_5_0.png" /> national_capital<br />\
    <img src="styles/legend/Localits_5_1.png" /> city<br />\
    <img src="styles/legend/Localits_5_2.png" /> village<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_BingAerial_1.setVisible(true);lyr_RegionMaritime_2.setVisible(true);lyr_Couverturesanitaire_3.setVisible(true);lyr_CentredeSant_4.setVisible(true);lyr_Localits_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_BingAerial_1,lyr_RegionMaritime_2,lyr_Couverturesanitaire_3,lyr_CentredeSant_4,lyr_Localits_5];
lyr_RegionMaritime_2.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_Couverturesanitaire_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_CentredeSant_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Localits_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'name': 'name', });
lyr_RegionMaritime_2.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_Couverturesanitaire_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_CentredeSant_4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Localits_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'population': 'TextEdit', 'name': 'TextEdit', });
lyr_RegionMaritime_2.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_Couverturesanitaire_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_CentredeSant_4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_Localits_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'population': 'no label', 'name': 'inline label - always visible', });
lyr_Localits_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});