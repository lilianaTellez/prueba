var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_cabmun2kgw_1 = new ol.format.GeoJSON();
var features_cabmun2kgw_1 = format_cabmun2kgw_1.readFeatures(json_cabmun2kgw_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cabmun2kgw_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cabmun2kgw_1.addFeatures(features_cabmun2kgw_1);
var lyr_cabmun2kgw_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cabmun2kgw_1, 
                style: style_cabmun2kgw_1,
                popuplayertitle: 'cabmun2kgw',
                interactive: true,
                title: '<img src="styles/legend/cabmun2kgw_1.png" /> cabmun2kgw'
            });
var format_Mazahua_Domestico_2 = new ol.format.GeoJSON();
var features_Mazahua_Domestico_2 = format_Mazahua_Domestico_2.readFeatures(json_Mazahua_Domestico_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mazahua_Domestico_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mazahua_Domestico_2.addFeatures(features_Mazahua_Domestico_2);
var lyr_Mazahua_Domestico_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mazahua_Domestico_2, 
                style: style_Mazahua_Domestico_2,
                popuplayertitle: 'Mazahua_Domestico',
                interactive: true,
                title: '<img src="styles/legend/Mazahua_Domestico_2.png" /> Mazahua_Domestico'
            });
var format_Otomi_Domestico_01_3 = new ol.format.GeoJSON();
var features_Otomi_Domestico_01_3 = format_Otomi_Domestico_01_3.readFeatures(json_Otomi_Domestico_01_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Otomi_Domestico_01_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Otomi_Domestico_01_3.addFeatures(features_Otomi_Domestico_01_3);
var lyr_Otomi_Domestico_01_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Otomi_Domestico_01_3, 
                style: style_Otomi_Domestico_01_3,
                popuplayertitle: 'Otomi_Domestico_01',
                interactive: true,
                title: '<img src="styles/legend/Otomi_Domestico_01_3.png" /> Otomi_Domestico_01'
            });
var format_municipiosdentrodelCMO_4 = new ol.format.GeoJSON();
var features_municipiosdentrodelCMO_4 = format_municipiosdentrodelCMO_4.readFeatures(json_municipiosdentrodelCMO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipiosdentrodelCMO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipiosdentrodelCMO_4.addFeatures(features_municipiosdentrodelCMO_4);
var lyr_municipiosdentrodelCMO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipiosdentrodelCMO_4, 
                style: style_municipiosdentrodelCMO_4,
                popuplayertitle: 'municipios dentro del CMO',
                interactive: true,
                title: '<img src="styles/legend/municipiosdentrodelCMO_4.png" /> municipios dentro del CMO'
            });
var format_Spring_Mazahua_5 = new ol.format.GeoJSON();
var features_Spring_Mazahua_5 = format_Spring_Mazahua_5.readFeatures(json_Spring_Mazahua_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spring_Mazahua_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spring_Mazahua_5.addFeatures(features_Spring_Mazahua_5);
var lyr_Spring_Mazahua_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spring_Mazahua_5, 
                style: style_Spring_Mazahua_5,
                popuplayertitle: 'Spring_Mazahua',
                interactive: true,
                title: '<img src="styles/legend/Spring_Mazahua_5.png" /> Spring_Mazahua'
            });
var format_Spring_Otomi_6 = new ol.format.GeoJSON();
var features_Spring_Otomi_6 = format_Spring_Otomi_6.readFeatures(json_Spring_Otomi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spring_Otomi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spring_Otomi_6.addFeatures(features_Spring_Otomi_6);
var lyr_Spring_Otomi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spring_Otomi_6, 
                style: style_Spring_Otomi_6,
                popuplayertitle: 'Spring_Otomi',
                interactive: true,
                title: '<img src="styles/legend/Spring_Otomi_6.png" /> Spring_Otomi'
            });
var lyr_MapSomEdoMex_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'MapSom EdoMex',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/MapSomEdoMex_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11200198.057591, 2080543.606338, -10975750.134168, 2306922.542763]
                            })
                        });
var lyr_Mexico_r15m_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Mexico_r15m',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Mexico_r15m_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11200198.057619, 2080543.606328, -10975750.134127, 2306922.542803]
                            })
                        });
var format_RepMex_9 = new ol.format.GeoJSON();
var features_RepMex_9 = format_RepMex_9.readFeatures(json_RepMex_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RepMex_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RepMex_9.addFeatures(features_RepMex_9);
var lyr_RepMex_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RepMex_9, 
                style: style_RepMex_9,
                popuplayertitle: 'Rep Mex',
                interactive: true,
                title: '<img src="styles/legend/RepMex_9.png" /> Rep Mex'
            });
var format_EstadodeMexico_10 = new ol.format.GeoJSON();
var features_EstadodeMexico_10 = format_EstadodeMexico_10.readFeatures(json_EstadodeMexico_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstadodeMexico_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstadodeMexico_10.addFeatures(features_EstadodeMexico_10);
var lyr_EstadodeMexico_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstadodeMexico_10, 
                style: style_EstadodeMexico_10,
                popuplayertitle: 'Estado de Mexico',
                interactive: true,
                title: '<img src="styles/legend/EstadodeMexico_10.png" /> Estado de Mexico'
            });
var format_Zn_M_O_11 = new ol.format.GeoJSON();
var features_Zn_M_O_11 = format_Zn_M_O_11.readFeatures(json_Zn_M_O_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zn_M_O_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zn_M_O_11.addFeatures(features_Zn_M_O_11);
var lyr_Zn_M_O_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zn_M_O_11, 
                style: style_Zn_M_O_11,
                popuplayertitle: 'Zn_M_O',
                interactive: true,
                title: '<img src="styles/legend/Zn_M_O_11.png" /> Zn_M_O'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_cabmun2kgw_1.setVisible(true);lyr_Mazahua_Domestico_2.setVisible(true);lyr_Otomi_Domestico_01_3.setVisible(true);lyr_municipiosdentrodelCMO_4.setVisible(true);lyr_Spring_Mazahua_5.setVisible(true);lyr_Spring_Otomi_6.setVisible(true);lyr_MapSomEdoMex_7.setVisible(true);lyr_Mexico_r15m_8.setVisible(true);lyr_RepMex_9.setVisible(true);lyr_EstadodeMexico_10.setVisible(true);lyr_Zn_M_O_11.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_cabmun2kgw_1,lyr_Mazahua_Domestico_2,lyr_Otomi_Domestico_01_3,lyr_municipiosdentrodelCMO_4,lyr_Spring_Mazahua_5,lyr_Spring_Otomi_6,lyr_MapSomEdoMex_7,lyr_Mexico_r15m_8,lyr_RepMex_9,lyr_EstadodeMexico_10,lyr_Zn_M_O_11];
lyr_cabmun2kgw_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'ENT': 'ENT', 'NOMENT': 'NOMENT', 'MUN': 'MUN', 'NOMMUN': 'NOMMUN', 'LOC': 'LOC', 'CABECERA': 'CABECERA', 'ALTITUD': 'ALTITUD', 'LONG': 'LONG', 'LAT': 'LAT', 'CLAVE': 'CLAVE', 'POBTOTAL': 'POBTOTAL', });
lyr_Mazahua_Domestico_2.set('fieldAliases', {'id': 'id', });
lyr_Otomi_Domestico_01_3.set('fieldAliases', {'id': 'id', });
lyr_municipiosdentrodelCMO_4.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'NOM_ENT': 'NOM_ENT', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', });
lyr_Spring_Mazahua_5.set('fieldAliases', {'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Nombre del': 'Nombre del', 'Usuario': 'Usuario', 'Uso': 'Uso', 'lps': 'lps', 'X': 'X', 'Y': 'Y', 'Altitud': 'Altitud', });
lyr_Spring_Otomi_6.set('fieldAliases', {'id': 'id', });
lyr_RepMex_9.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'ENTIDAD': 'ENTIDAD', 'CAPITAL': 'CAPITAL', 'RASGO_GEOG': 'RASGO_GEOG', 'CVE_EDO': 'CVE_EDO', });
lyr_EstadodeMexico_10.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', 'CVE_CAP': 'CVE_CAP', 'NOM_CAP': 'NOM_CAP', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', });
lyr_Zn_M_O_11.set('fieldAliases', {'id': 'id', });
lyr_cabmun2kgw_1.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'COV_': '', 'COV_ID': '', 'ENT': '', 'NOMENT': '', 'MUN': '', 'NOMMUN': '', 'LOC': '', 'CABECERA': '', 'ALTITUD': '', 'LONG': '', 'LAT': '', 'CLAVE': '', 'POBTOTAL': '', });
lyr_Mazahua_Domestico_2.set('fieldImages', {'id': '', });
lyr_Otomi_Domestico_01_3.set('fieldImages', {'id': '', });
lyr_municipiosdentrodelCMO_4.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'NOM_ENT': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', });
lyr_Spring_Mazahua_5.set('fieldImages', {'Municipio': 'TextEdit', 'Localidad': 'TextEdit', 'Nombre del': 'TextEdit', 'Usuario': 'TextEdit', 'Uso': 'TextEdit', 'lps': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Altitud': 'TextEdit', });
lyr_Spring_Otomi_6.set('fieldImages', {'id': 'TextEdit', });
lyr_RepMex_9.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'CAPITAL': 'TextEdit', 'RASGO_GEOG': 'TextEdit', 'CVE_EDO': 'TextEdit', });
lyr_EstadodeMexico_10.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', 'CVE_CAP': 'TextEdit', 'NOM_CAP': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', });
lyr_Zn_M_O_11.set('fieldImages', {'id': 'TextEdit', });
lyr_cabmun2kgw_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'ENT': 'no label', 'NOMENT': 'inline label - visible with data', 'MUN': 'no label', 'NOMMUN': 'inline label - visible with data', 'LOC': 'no label', 'CABECERA': 'inline label - visible with data', 'ALTITUD': 'no label', 'LONG': 'no label', 'LAT': 'no label', 'CLAVE': 'no label', 'POBTOTAL': 'inline label - visible with data', });
lyr_Mazahua_Domestico_2.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_Otomi_Domestico_01_3.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_municipiosdentrodelCMO_4.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'inline label - visible with data', 'NOM_ENT': 'inline label - visible with data', 'COV_': 'no label', 'COV_ID': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'PERIMETER': 'no label', });
lyr_Spring_Mazahua_5.set('fieldLabels', {'Municipio': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'Nombre del': 'inline label - visible with data', 'Usuario': 'inline label - visible with data', 'Uso': 'inline label - visible with data', 'lps': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Altitud': 'inline label - visible with data', });
lyr_Spring_Otomi_6.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_RepMex_9.set('fieldLabels', {'AREA': 'inline label - visible with data', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'ENTIDAD': 'inline label - visible with data', 'CAPITAL': 'no label', 'RASGO_GEOG': 'inline label - visible with data', 'CVE_EDO': 'no label', });
lyr_EstadodeMexico_10.set('fieldLabels', {'CVEGEO': 'inline label - visible with data', 'CVE_ENT': 'inline label - visible with data', 'NOMGEO': 'inline label - visible with data', 'CVE_CAP': 'no label', 'NOM_CAP': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'AREA': 'inline label - visible with data', 'PERIMETER': 'inline label - visible with data', });
lyr_Zn_M_O_11.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_Zn_M_O_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});