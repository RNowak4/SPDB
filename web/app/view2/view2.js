'use strict';

angular
    .module('myApp.view2', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl',
            controllerAs: 'ctrl'
        });
    }])
    .controller('View2Ctrl', function (pointsService, $rootScope) {
        const self = this;
        var map, heatmap;
        let infos = [];
        let points = [];
        let searched = false;
        self.selected = null;
        // pointsService.all()
        //     .then(newPoints => points = newPoints);
        // initMap();
        // self.stops = points;
        // self.selected = self.stops[0];
        self.select = stop => {
            closePreviousInfoWindow();
            self.selected = stop;
            const latLng = new google.maps.LatLng(stop.x, stop.y);
            map.panTo(latLng);
            let info = infos[stop.stopId];

            info.infowindow.open(map, info.marker);
        };
        // self.select(self.stops[0]);
        self.currentDelay = () => {
            if(self.selected == null) {
                return;
            }
            const seconds = parseInt((self.selected.delaySum / self.selected.stopCount) / 1000);
            const minutes = parseInt(seconds / 60);
            return `${minutes} m ${seconds % 60} s`;
        };
        self.show = () => {
            self.stops = [];
            points = pointsService.all(self.line, self.hour).then(function(data) {
                self.stops = data;
                points = data;
                initMap();
                searched = true;
            });
        };
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: {lat: 53.133908, lng: 23.161843},
                mapTypeId: 'satellite'
            });

            heatmap = new google.maps.visualization.HeatmapLayer({
                data: heatmapPoints(),
                map: map,
                radius: 40
            });

            points.forEach(stop => addMarker(stop));
        }

        function addMarker(stop) {

            const contentString = `<h2 id="firstHeading" class="firstHeading">${stop.stopName}</h2>`;

            const infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            // console.log({lat: parseFloat(stop.y), lng: parseFloat(stop.x)})
            const myLatLng = {lat: parseFloat(stop.x), lng: parseFloat(stop.y)};

            const marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Uluru (Ayers Rock)'
            });
            marker.addListener('click', function () {
                self.select(stop);
                $rootScope.$apply();
            });
            infos[stop.stopId] = {infowindow, marker};
        }

        function closePreviousInfoWindow() {
            if(self.selected == null) {
                return;
            }
            let info = infos[self.selected.stopId];
            info.infowindow.close();
        }

        function heatmapPoints() {
            return points.map(el => {
                return {
                    location: new google.maps.LatLng(el.x, el.y),
                    weight: el.delaySum > 0 ? el.delaySum / el.stopCount : 0
                }
            });
        }
    });