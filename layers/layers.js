ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5367").setExtent([330091.669172, 1170600.550867, 359179.413978, 1182988.764884]);
var wms_layers = [];


        var lyr_googlesatellitehybrid_0 = new ol.layer.Tile({
            'title': 'google satellite hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LIBERTY_2 = new ol.format.GeoJSON();
var features_LIBERTY_2 = format_LIBERTY_2.readFeatures(json_LIBERTY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_LIBERTY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIBERTY_2.addFeatures(features_LIBERTY_2);
var lyr_LIBERTY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIBERTY_2, 
                style: style_LIBERTY_2,
                popuplayertitle: "LIBERTY",
                interactive: true,
                title: '<img src="styles/legend/LIBERTY_2.png" /> LIBERTY'
            });
var format_ICE_3 = new ol.format.GeoJSON();
var features_ICE_3 = format_ICE_3.readFeatures(json_ICE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_ICE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICE_3.addFeatures(features_ICE_3);
var lyr_ICE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ICE_3, 
                style: style_ICE_3,
                popuplayertitle: "ICE",
                interactive: true,
                title: '<img src="styles/legend/ICE_3.png" /> ICE'
            });
var format_CLARO_4 = new ol.format.GeoJSON();
var features_CLARO_4 = format_CLARO_4.readFeatures(json_CLARO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_CLARO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLARO_4.addFeatures(features_CLARO_4);
var lyr_CLARO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLARO_4, 
                style: style_CLARO_4,
                popuplayertitle: "CLARO",
                interactive: true,
                title: '<img src="styles/legend/CLARO_4.png" /> CLARO'
            });
var format_Lineasdetransmision_5 = new ol.format.GeoJSON();
var features_Lineasdetransmision_5 = format_Lineasdetransmision_5.readFeatures(json_Lineasdetransmision_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_Lineasdetransmision_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lineasdetransmision_5.addFeatures(features_Lineasdetransmision_5);
var lyr_Lineasdetransmision_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lineasdetransmision_5, 
                style: style_Lineasdetransmision_5,
                popuplayertitle: "Lineas de transmision",
                interactive: true,
                title: '<img src="styles/legend/Lineasdetransmision_5.png" /> Lineas de transmision'
            });
var format_Subestaciones_6 = new ol.format.GeoJSON();
var features_Subestaciones_6 = format_Subestaciones_6.readFeatures(json_Subestaciones_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_Subestaciones_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subestaciones_6.addFeatures(features_Subestaciones_6);
var lyr_Subestaciones_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Subestaciones_6, 
                style: style_Subestaciones_6,
                popuplayertitle: "Subestaciones",
                interactive: true,
                title: '<img src="styles/legend/Subestaciones_6.png" /> Subestaciones'
            });
var group_Sistemaelectrico = new ol.layer.Group({
                                layers: [lyr_Lineasdetransmision_5,lyr_Subestaciones_6,],
                                fold: "open",
                                title: "Sistema electrico"});
var group_Torrescelulares = new ol.layer.Group({
                                layers: [lyr_LIBERTY_2,lyr_ICE_3,lyr_CLARO_4,],
                                fold: "open",
                                title: "Torres celulares"});

lyr_googlesatellitehybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_LIBERTY_2.setVisible(true);lyr_ICE_3.setVisible(true);lyr_CLARO_4.setVisible(true);lyr_Lineasdetransmision_5.setVisible(true);lyr_Subestaciones_6.setVisible(true);
var layersList = [lyr_googlesatellitehybrid_0,lyr_OpenStreetMap_1,group_Torrescelulares,group_Sistemaelectrico];
lyr_LIBERTY_2.set('fieldAliases', {'Sitio': 'Sitio', 'ID': 'ID', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'X_CRTM05': 'X_CRTM05', 'Y_CRTM05': 'Y_CRTM05', 'Cod_Provincia': 'Cod_Provincia', 'Provincia': 'Provincia', 'Cod_Canton': 'Cod_Canton', 'Canton': 'Canton', 'Cod_Distrito': 'Cod_Distrito', 'Distrito': 'Distrito', 'Codigo': 'Codigo', 'Altura_total__m_': 'Altura_total__m_', 'Altura_de_elementos_radiantes__': 'Altura_de_elementos_radiantes__', 'Tipo_de_elemento': 'Tipo_de_elemento', 'Tipo_de_ubicacion': 'Tipo_de_ubicacion', 'Propietario': 'Propietario', 'Año_de_Instalacion': 'Año_de_Instalacion', 'Bandas_de_frecuencia__MHz_': 'Bandas_de_frecuencia__MHz_', 'Tecnologia': 'Tecnologia', });
lyr_ICE_3.set('fieldAliases', {'Sitio': 'Sitio', 'ID': 'ID', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'X_CRTM05': 'X_CRTM05', 'Y_CRTM05': 'Y_CRTM05', 'Cod_Provincia': 'Cod_Provincia', 'Provincia': 'Provincia', 'Cod_Canton': 'Cod_Canton', 'Canton': 'Canton', 'Cod_Distrito': 'Cod_Distrito', 'Distrito': 'Distrito', 'Codigo': 'Codigo', 'Altura_total__m_': 'Altura_total__m_', 'Altura_de_elementos_radiantes__': 'Altura_de_elementos_radiantes__', 'Tipo_de_elemento': 'Tipo_de_elemento', 'Tipo_de_ubicacion': 'Tipo_de_ubicacion', 'Propietario': 'Propietario', 'Año_de_Instalacion': 'Año_de_Instalacion', 'Bandas_de_frecuencia__MHz_': 'Bandas_de_frecuencia__MHz_', 'Tecnología': 'Tecnología', });
lyr_CLARO_4.set('fieldAliases', {'Sitio': 'Sitio', 'ID': 'ID', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'X_CRTM05': 'X_CRTM05', 'Y_CRTM05': 'Y_CRTM05', 'Cod_Provincia': 'Cod_Provincia', 'Provincia': 'Provincia', 'Cod_Canton': 'Cod_Canton', 'Canton': 'Canton', 'Cod_Distrito': 'Cod_Distrito', 'Distrito': 'Distrito', 'Codigo': 'Codigo', 'Altura_total__m_': 'Altura_total__m_', 'Altura_de_elementos_radiantes__': 'Altura_de_elementos_radiantes__', 'Tipo_de_elemento': 'Tipo_de_elemento', 'Tipo_de_ubicacion': 'Tipo_de_ubicacion', 'Propietario': 'Propietario', 'Año_de_Instalacion': 'Año_de_Instalacion', 'Bandas_de_frecuencia__MHz_': 'Bandas_de_frecuencia__MHz_', 'Tecnologia': 'Tecnologia', });
lyr_Lineasdetransmision_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Subestaciones_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_LIBERTY_2.set('fieldImages', {'Sitio': 'TextEdit', 'ID': 'Range', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'X_CRTM05': 'TextEdit', 'Y_CRTM05': 'TextEdit', 'Cod_Provincia': 'Range', 'Provincia': 'TextEdit', 'Cod_Canton': 'Range', 'Canton': 'TextEdit', 'Cod_Distrito': 'Range', 'Distrito': 'TextEdit', 'Codigo': 'Range', 'Altura_total__m_': 'Range', 'Altura_de_elementos_radiantes__': 'TextEdit', 'Tipo_de_elemento': 'TextEdit', 'Tipo_de_ubicacion': 'TextEdit', 'Propietario': 'TextEdit', 'Año_de_Instalacion': 'Range', 'Bandas_de_frecuencia__MHz_': 'TextEdit', 'Tecnologia': 'TextEdit', });
lyr_ICE_3.set('fieldImages', {'Sitio': 'TextEdit', 'ID': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'X_CRTM05': 'TextEdit', 'Y_CRTM05': 'TextEdit', 'Cod_Provincia': 'Range', 'Provincia': 'TextEdit', 'Cod_Canton': 'Range', 'Canton': 'TextEdit', 'Cod_Distrito': 'Range', 'Distrito': 'TextEdit', 'Codigo': 'Range', 'Altura_total__m_': 'Range', 'Altura_de_elementos_radiantes__': 'TextEdit', 'Tipo_de_elemento': 'TextEdit', 'Tipo_de_ubicacion': 'TextEdit', 'Propietario': 'TextEdit', 'Año_de_Instalacion': 'Range', 'Bandas_de_frecuencia__MHz_': 'TextEdit', 'Tecnología': 'TextEdit', });
lyr_CLARO_4.set('fieldImages', {'Sitio': 'TextEdit', 'ID': 'Range', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'X_CRTM05': 'TextEdit', 'Y_CRTM05': 'TextEdit', 'Cod_Provincia': 'Range', 'Provincia': 'TextEdit', 'Cod_Canton': 'Range', 'Canton': 'TextEdit', 'Cod_Distrito': 'Range', 'Distrito': 'TextEdit', 'Codigo': 'Range', 'Altura_total__m_': 'TextEdit', 'Altura_de_elementos_radiantes__': 'TextEdit', 'Tipo_de_elemento': 'TextEdit', 'Tipo_de_ubicacion': 'TextEdit', 'Propietario': 'TextEdit', 'Año_de_Instalacion': 'Range', 'Bandas_de_frecuencia__MHz_': 'TextEdit', 'Tecnologia': 'TextEdit', });
lyr_Lineasdetransmision_5.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', });
lyr_Subestaciones_6.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', });
lyr_LIBERTY_2.set('fieldLabels', {'Sitio': 'no label', 'ID': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', 'X_CRTM05': 'no label', 'Y_CRTM05': 'no label', 'Cod_Provincia': 'no label', 'Provincia': 'no label', 'Cod_Canton': 'no label', 'Canton': 'no label', 'Cod_Distrito': 'no label', 'Distrito': 'no label', 'Codigo': 'no label', 'Altura_total__m_': 'no label', 'Altura_de_elementos_radiantes__': 'no label', 'Tipo_de_elemento': 'no label', 'Tipo_de_ubicacion': 'no label', 'Propietario': 'no label', 'Año_de_Instalacion': 'no label', 'Bandas_de_frecuencia__MHz_': 'no label', 'Tecnologia': 'no label', });
lyr_ICE_3.set('fieldLabels', {'Sitio': 'no label', 'ID': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', 'X_CRTM05': 'no label', 'Y_CRTM05': 'no label', 'Cod_Provincia': 'no label', 'Provincia': 'no label', 'Cod_Canton': 'no label', 'Canton': 'no label', 'Cod_Distrito': 'no label', 'Distrito': 'no label', 'Codigo': 'no label', 'Altura_total__m_': 'no label', 'Altura_de_elementos_radiantes__': 'no label', 'Tipo_de_elemento': 'no label', 'Tipo_de_ubicacion': 'no label', 'Propietario': 'no label', 'Año_de_Instalacion': 'no label', 'Bandas_de_frecuencia__MHz_': 'no label', 'Tecnología': 'no label', });
lyr_CLARO_4.set('fieldLabels', {'Sitio': 'header label - visible with data', 'ID': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', 'X_CRTM05': 'no label', 'Y_CRTM05': 'no label', 'Cod_Provincia': 'no label', 'Provincia': 'no label', 'Cod_Canton': 'no label', 'Canton': 'no label', 'Cod_Distrito': 'no label', 'Distrito': 'no label', 'Codigo': 'no label', 'Altura_total__m_': 'no label', 'Altura_de_elementos_radiantes__': 'no label', 'Tipo_de_elemento': 'no label', 'Tipo_de_ubicacion': 'no label', 'Propietario': 'no label', 'Año_de_Instalacion': 'no label', 'Bandas_de_frecuencia__MHz_': 'no label', 'Tecnologia': 'no label', });
lyr_Lineasdetransmision_5.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Subestaciones_6.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Subestaciones_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});