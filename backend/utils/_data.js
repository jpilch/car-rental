const carModels = [
    {
        'manufacturer': 'Toyota',
        'name': 'Avalon',
        'img_url': 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'person_capacity': 5,
        price_3: 100,
        price_5: 150,
        price_9: 220,
        gearbox: 'Automatic',
        baggage_large: 1,
        baggage_small: 2
    },
    {
        'manufacturer': 'Toyota',
        'name': 'Yaris',
        'img_url': 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'person_capacity': 4,
        price_3: 100,
        price_5: 150,
        price_9: 220,
        gearbox: 'Manual',
        baggage_large: 1,
        baggage_small: 1
    },
    {
        'manufacturer': 'Volkswagen',
        'name': 'Taos',
        'img_url': 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'person_capacity': 5,
        price_3: 150,
        price_5: 200,
        price_9: 270,
        gearbox: 'Manual',
        baggage_large: 2,
        baggage_small: 2
    },
    {
        'manufacturer': 'Volkswagen',
        'name': 'Tiguan',
        'img_url': 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'person_capacity': 5,
        price_3: 200,
        price_5: 300,
        price_9: 340,
        gearbox: 'Automatic',
        baggage_large: 3,
        baggage_small: 2
    },
    {
        'manufacturer': 'Toyota',
        'name': 'Camry',
        'img_url': 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'person_capacity': 5,
        price_3: 120,
        price_5: 170,
        price_9: 230,
        gearbox: 'Automatic',
        baggage_large: 2,
        baggage_small: 2
    },
    {
        'manufacturer': 'Toyota',
        'name': 'Corolla',
        'img_url': 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'person_capacity': 5,
        price_3: 210,
        price_5: 280,
        price_9: 320,
        gearbox: 'Manual',
        baggage_large: 2,
        baggage_small: 1
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
        city_en: 'Warsaw',
        city_pl: 'Warszawa',
        address: 'Sample st., no 1'
    },
    {
        city_en: 'Krakow',
        city_pl: 'Krakow',
        address: 'Sample st., no 2'
    }
]

module.exports = {
    carModels,
    rentals,
    users
}
