// Bird urls

const goldfinch_url= "/api/American_Goldfinch";
const robin_url = "/api/American_Robin";
const barn_url = "/api/Barn_Swallow";
const jay_url = "/api/Blue_Jay";
const grey_url = "/api/Blue-grey_Gnatcatcher";
const chick_url = "/api/Carolina_Chickadee";
const wren_url = "/api/Carolina_Wren";
const cedar_url = "/api/Cedar_Waxwing";
const cardinal_url = "/api/Northern_Cardinal";
const ruby_ulr = "/api/Ruby-crowned_Kinglet";


var url_Array = [goldfinch_url, robin_url, barn_url, grey_url, jay_url, chick_url,wren_url,cedar_url,cardinal_url, ruby_ulr];


// Map layers
// Street
var streetMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Dark
var darkMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Satellite
var satelliteMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/satellite-streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

var mapLayers = [streetMap, darkMap, satelliteMap];
var center = [38, -100];
var myMap = L.map("mapa", {layers: mapLayers}).setView(center,4);

var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

function drawMap(feat_1, feat_2, feat_3, feat_4, feat_5, feat_6, feat_7,feat_8, feat_9, feat_10) {
    let overlayMaps = {
        "<span style='color:BlueViolet'>American Goldfinch</span>": feat_1,
        "<span style='color:Chocolate'>American Robin</span>": feat_2,
        "<span style='color:CadetBlue'>Barn Swallow</span>": feat_3,
        "<span style='color:DarkGray'>Blue-grey Gnatcatcher</span>": feat_4,
        "<span style='color:Darkblue'>Blue Jay</span>": feat_5,
        "<span style='color:Black'>Carolina Chickadee</span>": feat_6,
        "<span style='color:DarkGoldenRod'>Carolina Wren</span>": feat_7,
        "<span style='color:Coral'>Cedar Waxwing</span>": feat_8,
        "<span style='color:DarkRed'>Northern Cardinal</span>": feat_9,
        "<span style='color:DarkSlateGray'>Ruby-crowned Kinglet</span>": feat_10




    };
    let baseMaps = {
        "Street": streetMap,
        "Dark": darkMap,
        "Satellite": satelliteMap
    };   
    L.control.layers(baseMaps, overlayMaps, {collapsed: true}).addTo(myMap);
    

}

// function drawMap1(feat) {
//     let overlayMaps = {
//         "bird": feat
//     };
//     L.control.layers({"bird": feat}, {collapsed: true}).addTo(myMap);

// }

// function baseMaps(mapLayers){
//     let baseMaps = {
//         "Street": mapLayers[0],
//         "Dark": mapLayers[1],
//         "Satellite": mapLayers[2]
//     }; 
//     L.control.layers(baseMaps).addTo(myMap);

// }


var myStyle = {
    "color": "red"
};

function birdFeatures(features) {
    function onEachBird(feature, layer) {
        let country = feature.properties.cnt;
        let timeStamp = new Date(feature.properties.time);
        let bname = feature.properties.en;
        let place = feature.properties.loc;
        let genus = feature.properties.gen;
        let species = feature.properties.sp;
        let file = feature.properties.file;
        let audio_url = "http:"+file;

        layer.bindPopup("<h6>"+ bname + "</h6><hr><br />Scientific Name:&nbsp" + genus + "&nbsp" + species+"<br />Recording time:&nbsp"+ timeStamp +"<br />Location:&nbsp"+ place + "<br />Audio Clip:&nbsphttp:" + file +"<br>");

        // layer.bindPopup("<h6>"+ bname + "</h6><hr><br />Scientific Name:&nbsp" + genus + "&nbsp" + species+"<br />Recording time:&nbsp"+ timeStamp +"<br />Location:&nbsp"+ place + "<br />Audio:<audio src="+audio_url+"> controls ></audio><br>");
    }    
        
    let bird = L.geoJSON(features, {

        onEachFeature: onEachBird
    }).addTo(myMap);

    return bird;

}



function theBirds(bird_Array) {
    d3.json(bird_Array[0], function(b) {
        let bird1=birdFeatures(b.features);
        d3.json(bird_Array[1], function(b) {
            let bird2 = birdFeatures(b.features);
            d3.json(bird_Array[2], function(b) {
                let bird3 = birdFeatures(b.features);
                d3.json(bird_Array[3], function(b) {
                    let bird4 = birdFeatures(b.features);
                    d3.json(bird_Array[4], function(b) {
                        let bird5 = birdFeatures(b.features);
                        d3.json(bird_Array[5], function(b){
                            let bird6 = birdFeatures(b.features);
                            d3.json(bird_Array[6], function(b){
                                let bird7 = birdFeatures(b.features);
                                d3.json(bird_Array[7], function(b){
                                    let bird8 = birdFeatures(b.features);
                                    d3.json(bird_Array[8], function(b){
                                        let bird9 = birdFeatures(b.features);
                                        d3.json(bird_Array[9], function(b){
                                            let bird10 = birdFeatures(b.features);
                                            drawMap(bird1, bird2, bird3, bird4, bird5, bird6, bird7, bird8, bird9, bird10);
                                        });
                                    });
                                });
                            });
                                          
                        });
                        

                    });
                });
               

            });
            
        });
    });
}


theBirds(url_Array);
