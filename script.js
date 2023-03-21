        mapboxgl.accessToken = 'pk.eyJ1Ijoic2F2ZXVyMSIsImEiOiJjbGY2dDU4bTgxcTNrM3luejd0N3Z6MWtvIn0.TcpH6XluEdVfkvlnj1cMFg';
        
        navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy:true});
        
        function successLocation(position){
           setupMap([position.coords.longitude, position.coords.latitude]);
        }
        function errorLocation(){
           setupMap([-1.9626008412357405, 30.064545849221208]);
        }
        function setupMap(center) {
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v12',
                center:center,
                zoom:14
            });
            const nav = new mapboxgl.NavigationControl();
            map.addControl(nav);
            
            var directions = new MapboxDirections({
                accessToken: mapboxgl.accessToken,
            });
            map.addControl(directions, 'top-left');
        }