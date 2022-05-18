const carModels = [
    {
        'manufacturer': 'Toyota',
        'name': 'Avalon',
        'img_url': 'https://cdn.jdpower.com/JDPA_2020-Toyota-Avalon-XLE-Hybrid-Harbor-Gray-Front-Quarter.jpg',
        'person_capacity': 5,
        'trunk_capacity': 450,
        'avg_fuel_consumption': 7.5,
        'length': 4.98,
        'width': 1.85,
        'height': 1.44,
        'drive_cat': 'FWD'
    },
    {
        'manufacturer': 'Toyota',
        'name': 'Yaris',
        'img_url': 'https://img-optimize.toyota-europe.com/resize/ccis/680x680/zip/pl/product-token/29905d6b-5079-4648-a605-cea0f4cc21ef/vehicle/8718abb8-324e-41b9-b843-2ac7e6feb700/image-quality/70/hero-exterior-4_2rz.png',
        'person_capacity': 4,
        'trunk_capacity': 280,
        'avg_fuel_consumption': 7.0,
        'length': 4.42,
        'width': 1.73,
        'height': 1.49,
        'drive_cat': 'FWD'
    },
    {
        'manufacturer': 'Volkswagen',
        'name': 'Taos',
        'img_url': 'https://thumbor.forbes.com/thumbor/fit-in/960x/filters:format(jpg)/https://www.forbes.com/wheels/wp-content/uploads/2020/09/2021-volkswagen-Taos-compact-suv.png',
        'person_capacity': 5,
        'trunk_capacity': 800,
        'avg_fuel_consumption': 8.3,
        'length': 4.45,
        'width': 1.84,
        'height': 1.63,
        'drive_cat': 'AWD'
    }
]

const users = [
    {
        username: 'firstUser',
        full_name: 'first user',
        password: 'secret'
    },
    {
        username: 'secondUser',
        full_name: 'second user',
        password: 'secret'
    }
]

const rentals = [
    {
        city_en: "Warsaw",
        city_pl: "Warszawa",
        address: "Sample st., no 1"
    },
    {
        city_en: "Krakow",
        city_pl: "Krakow",
        address: "Sample st., no 2"
    }
]

module.exports = {
    carModels,
    rentals,
    users
}