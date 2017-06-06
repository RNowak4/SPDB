angular
    .module('myApp.view2')
    .service('pointsService', PointsService);

function PointsService($http) {
    const self = this;

    self.all = (line, hour) => {
        return $http.get(`http://localhost:9098/delay?line=${line}&hour=${hour}`)
            .then(function(response) {
                return response.data;
            });
    };
}