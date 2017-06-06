angular
    .module('myApp.view2')
    .service('pointsService', PointsService);

function PointsService($http) {
    const self = this;

    const points = [
        {
            "stopId": "44",
            "stopName": "Sienkiewicza / Białówny",
            "x": "53.133908",
            "y": "23.161843",
            "delaySum": 6588000,
            "stopCount": 41
        },
        {
            "stopId": "45",
            "stopName": "Malmeda/Lipowa",
            "x": "53.133190",
            "y": "23.155845",
            "delaySum": 11804500,
            "stopCount": 39
        },
        {
            "stopId": "111",
            "stopName": "Rynek Kościuszki",
            "x": "53.131820",
            "y": "23.160740",
            "delaySum": 2807000,
            "stopCount": 35
        },
        {
            "stopId": "596",
            "stopName": "11 Listopada/Park",
            "x": "53.121547",
            "y": "23.161637",
            "delaySum": -397500,
            "stopCount": 41
        },
        {
            "stopId": "597",
            "stopName": "Skłodowskiej/Hortex",
            "x": "53.126532",
            "y": "23.161228",
            "delaySum": 83000,
            "stopCount": 38
        },
        {
            "stopId": "598",
            "stopName": "Plac Uniwersytecki",
            "x": "53.130842",
            "y": "23.154880",
            "delaySum": 10139000,
            "stopCount": 47
        },
        {
            "stopId": "599",
            "stopName": "Książnica Podlaska",
            "x": "53.127907",
            "y": "23.159178",
            "delaySum": 9222500,
            "stopCount": 54
        },
        {
            "stopId": "435",
            "stopName": "Składowa/Stacja Paliw",
            "x": "53.118135",
            "y": "23.126095",
            "delaySum": 5551500,
            "stopCount": 32
        },
        {
            "stopId": "436",
            "stopName": "Składowa/Tunel",
            "x": "53.122452",
            "y": "23.122487",
            "delaySum": 14837500,
            "stopCount": 43
        },
        {
            "stopId": "239",
            "stopName": "Towarowa/Parking",
            "x": "53.137145",
            "y": "23.190772",
            "delaySum": 6511500,
            "stopCount": 43
        },
        {
            "stopId": "679",
            "stopName": "Warszawska/Kościół Św.Wojciecha",
            "x": "53.130590",
            "y": "23.173983",
            "delaySum": 294500,
            "stopCount": 46
        },
        {
            "stopId": "11",
            "stopName": "Popiełuszki/Kościół Św.Jadwigi",
            "x": "53.126347",
            "y": "23.100272",
            "delaySum": 2293500,
            "stopCount": 38
        },
        {
            "stopId": "12",
            "stopName": "Popiełuszki/Słonecznikowa",
            "x": "53.125365",
            "y": "23.107592",
            "delaySum": 3673000,
            "stopCount": 40
        },
        {
            "stopId": "13",
            "stopName": "Gen.E.Fieldorfa \"Nila\"",
            "x": "53.124103",
            "y": "23.116315",
            "delaySum": 52500,
            "stopCount": 37
        },
        {
            "stopId": "481",
            "stopName": "Zwierzyniecka/Wiejska",
            "x": "53.120387",
            "y": "23.147253",
            "delaySum": 3826500,
            "stopCount": 53
        },
        {
            "stopId": "240",
            "stopName": "Piastowska/Os. Piasta",
            "x": "53.134870",
            "y": "23.195380",
            "delaySum": 3927500,
            "stopCount": 43
        },
        {
            "stopId": "482",
            "stopName": "Zwierzyniecka/Domy Studenta",
            "x": "53.119782",
            "y": "23.152173",
            "delaySum": 614000,
            "stopCount": 52
        },
        {
            "stopId": "680",
            "stopName": "Warszawska/Piastowska",
            "x": "53.127518",
            "y": "23.181298",
            "delaySum": 105000,
            "stopCount": 44
        },
        {
            "stopId": "241",
            "stopName": "Piastowska/Mieszka I",
            "x": "53.131972",
            "y": "23.192502",
            "delaySum": 5055500,
            "stopCount": 39
        },
        {
            "stopId": "483",
            "stopName": "Zwierzyniecka/Świerkowa",
            "x": "53.119415",
            "y": "23.155885",
            "delaySum": -388000,
            "stopCount": 41
        },
        {
            "stopId": "242",
            "stopName": "Piastowska/Chrobrego",
            "x": "53.128878",
            "y": "23.187967",
            "delaySum": 2532000,
            "stopCount": 42
        },
        {
            "stopId": "2",
            "stopName": "Popiełuszki/Hetmańska",
            "x": "53.124832",
            "y": "23.114172",
            "delaySum": 15361000,
            "stopCount": 47
        },
        {
            "stopId": "3",
            "stopName": "Popiełuszki/Upalna",
            "x": "53.125888",
            "y": "23.105895",
            "delaySum": 8335500,
            "stopCount": 41
        },
        {
            "stopId": "4",
            "stopName": "Popiełuszki/Os.Słoneczny Stok",
            "x": "53.126542",
            "y": "23.101432",
            "delaySum": 7062500,
            "stopCount": 36
        },
        {
            "stopId": "444",
            "stopName": "Składowa/Octowa",
            "x": "53.122705",
            "y": "23.121807",
            "delaySum": 1534500,
            "stopCount": 38
        },
        {
            "stopId": "445",
            "stopName": "Składowa/Hurtowa",
            "x": "53.117607",
            "y": "23.126200",
            "delaySum": 1730000,
            "stopCount": 50
        },
        {
            "stopId": "325",
            "stopName": "Pogodna/Żeromskiego",
            "x": "53.113853",
            "y": "23.130802",
            "delaySum": -1517000,
            "stopCount": 49
        },
        {
            "stopId": "688",
            "stopName": "Warszawska/Piastowska",
            "x": "53.127159",
            "y": "23.182342",
            "delaySum": 2747500,
            "stopCount": 40
        },
        {
            "stopId": "600",
            "stopName": "11 Listopada/Szpital",
            "x": "53.123297",
            "y": "23.163018",
            "delaySum": 5284500,
            "stopCount": 41
        },
        {
            "stopId": "446",
            "stopName": "Składowa P.K.",
            "x": "53.115472",
            "y": "23.127853",
            "delaySum": -293500,
            "stopCount": 51
        },
        {
            "stopId": "326",
            "stopName": "Pogodna/Garaże",
            "x": "53.116498",
            "y": "23.140077",
            "delaySum": 1381500,
            "stopCount": 46
        },
        {
            "stopId": "689",
            "stopName": "Warszawska/Uniwersytet",
            "x": "53.130181",
            "y": "23.174875",
            "delaySum": 1982000,
            "stopCount": 42
        },
        {
            "stopId": "601",
            "stopName": "11 Listopada/Stadion",
            "x": "53.120773",
            "y": "23.160847",
            "delaySum": 5355000,
            "stopCount": 42
        },
        {
            "stopId": "327",
            "stopName": "Wiejska/Pogodna",
            "x": "53.118253",
            "y": "23.144410",
            "delaySum": 5630500,
            "stopCount": 54
        },
        {
            "stopId": "61",
            "stopName": "Sienkiewicza/Rzeka Biała",
            "x": "53.135413",
            "y": "23.164630",
            "delaySum": -57000,
            "stopCount": 38
        },
        {
            "stopId": "62",
            "stopName": "Warszawska Bank",
            "x": "53.133764",
            "y": "23.169323",
            "delaySum": 1273500,
            "stopCount": 38
        },
        {
            "stopId": "493",
            "stopName": "Pałacowa/Hotel",
            "x": "53.132713",
            "y": "23.169540",
            "delaySum": 6015000,
            "stopCount": 40
        },
        {
            "stopId": "373",
            "stopName": "Wrocławska/Zielonogórska",
            "x": "53.124113",
            "y": "23.096653",
            "delaySum": 3116500,
            "stopCount": 40
        },
        {
            "stopId": "253",
            "stopName": "Piastowska/Nowowarszawska",
            "x": "53.126047",
            "y": "23.183545",
            "delaySum": 630000,
            "stopCount": 44
        },
        {
            "stopId": "254",
            "stopName": "Piastowska/Chrobrego",
            "x": "53.129630",
            "y": "23.190390",
            "delaySum": 2904500,
            "stopCount": 35
        },
        {
            "stopId": "255",
            "stopName": "Piastowska/Kościół",
            "x": "53.133277",
            "y": "23.194305",
            "delaySum": 3197000,
            "stopCount": 36
        },
        {
            "stopId": "256",
            "stopName": "Towarowa/Piastowska",
            "x": "53.135772",
            "y": "23.195150",
            "delaySum": 4959000,
            "stopCount": 36
        },
        {
            "stopId": "499",
            "stopName": "Zwierzyniecka/Wesoła",
            "x": "53.119792",
            "y": "23.154582",
            "delaySum": 4615000,
            "stopCount": 39
        },
        {
            "stopId": "257",
            "stopName": "Towarowa/Garaże",
            "x": "53.136733",
            "y": "23.192543",
            "delaySum": 4246500,
            "stopCount": 35
        },
        {
            "stopId": "455",
            "stopName": "Składowa/Urząd Miejski",
            "x": "53.114282",
            "y": "23.129467",
            "delaySum": 4975500,
            "stopCount": 33
        },
        {
            "stopId": "336",
            "stopName": "Wiejska/Kopernika",
            "x": "53.120235",
            "y": "23.144973",
            "delaySum": 6005500,
            "stopCount": 38
        },
        {
            "stopId": "337",
            "stopName": "Pogodna/Wiejska",
            "x": "53.117563",
            "y": "23.143395",
            "delaySum": 3973000,
            "stopCount": 36
        },
        {
            "stopId": "338",
            "stopName": "Pogodna/Gen.J.Bema",
            "x": "53.115877",
            "y": "23.137393",
            "delaySum": 4063000,
            "stopCount": 33
        },
        {
            "stopId": "385",
            "stopName": "Starosielce PKP",
            "x": "53.121890",
            "y": "23.086710",
            "delaySum": 1833500,
            "stopCount": 38
        },
        {
            "stopId": "860",
            "stopName": "Towarowa/Pętla",
            "x": "53.138308",
            "y": "23.186757",
            "delaySum": 4555500,
            "stopCount": 36
        },
        {
            "stopId": "500",
            "stopName": "Zwierzyniecka / Kaczorowskiego",
            "x": "53.120142",
            "y": "23.150863",
            "delaySum": 4107000,
            "stopCount": 35
        },
        {
            "stopId": "503",
            "stopName": "Galeria \"Zielone Wzgórze\"",
            "x": "53.126305",
            "y": "23.096950",
            "delaySum": 6157500,
            "stopCount": 35
        },
        {
            "stopId": "822",
            "stopName": "Wrocławska/Storczykowa",
            "x": "53.122647",
            "y": "23.092322",
            "delaySum": 2200500,
            "stopCount": 37
        },
        {
            "stopId": "827",
            "stopName": "Wrocławska/Rybnika",
            "x": "53.123367",
            "y": "23.094983",
            "delaySum": 6540000,
            "stopCount": 34
        },
        {
            "stopId": "828",
            "stopName": "Wrocławska/Miodowa",
            "x": "53.122485",
            "y": "23.091207",
            "delaySum": 6304000,
            "stopCount": 36
        }
    ];

    self.all = (line, hour) => {
        return $http.get(`http://localhost:9098/delay?line=${line}&hour=${hour}`)
            .then(function(response) {
                return response.data;
            });
    };
}