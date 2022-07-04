function initMap() {
    const valencia = {"lat":39.46971,"lng":-0.37634}
        const tokyo = {"lat":35.68474,"lng":139.74394}
        const glyndyfrdwy = {"lat":52.97524,"lng":-3.26713};
    
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: glyndyfrdwy,
        });
        const marker1 = new google.maps.Marker({
            position: glyndyfrdwy,
            map,
            title: "Glyndyfrdwy"
        });
        const marker2 = new google.maps.Marker({
            position: valencia,
            map,
            title: "Valencia"
        });
        const marker3 = new google.maps.Marker({
            position: tokyo,
            map,
            title: "Tokyo"
        })
    }
    window.initMap = initMap;