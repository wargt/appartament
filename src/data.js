const amenities = [
    {
        name: 'Popular amenities',
        items: [
            {name: 'Air conditioner', key: 'k1'},
            {name: 'Computer', key: 'k2'},
            {name: 'Elevator', key: 'k3'},
            {name: 'Free Transportation', key: 'k4'},
            {name: 'Free wireless internet', key: 'k5'},
            {name: 'Guarded parking', key: 'k6'},
            {name: 'Hair dryer', hidden: true, key: 'k7'},
            {name: 'Washing machine', hidden: true, key: 'k8'},
            {name: 'Vacuum cleaner', hidden: true, key: 'k9'},
            {name: 'Wireless internet', hidden: true, key: 'k10'},
            {name: 'TV (local channels only)', hidden: true, key: 'k11'}
        ]
    }, {
        name: 'Apartment',
        items: [
            {name: 'Balcony', key: 'k12'},
            {name: 'Fireplace', key: 'k13'},
            {name: 'Floor heating', key: 'k14'},
            {name: 'Game room', key: 'k15'},
            {name: 'Terrace', key: 'k16'},
        ]
    }, {
        name: 'Kitchen',
        items: [
            {name: 'Blender', key: 'k17'},
            {name: 'Coffee maker', key: 'k18'},
            {name: 'Cooking hob', key: 'k19'},
            {name: 'Dishwasher', key: 'k20'},
            {name: 'Freezer', key: 'k21'},
            {name: 'Fridge', key: 'k22'},
            {name: 'Blender', hidden: true, key: 'k23'},
            {name: 'Coffee maker', hidden: true, key: 'k24'},
            {name: 'Cooking hob', hidden: true, key: 'k25'},
            {name: 'Dishwasher', hidden: true, key: 'k26'},
            {name: 'Freezer', hidden: true, key: 'k27'},
            {name: 'Fridge', hidden: true, key: 'k28'},
        ]
    }
]

const offers = [
    {
        name: 'Stylish apartment in el born',
        img: '1.png',
        price: '85',
        amenities: ['k6', 'k12', 'k20', 'k26', 'k27', 'k21'],
        coords: [41.393592, 2.162570]
    }, {
        name: 'A cozy flat near Las Ramblas',
        img: '2.png',
        price: '70',
        amenities: ['k5', 'k13'],
        coords: [41.394195, 2.164844]
    }, {
        name: 'Apartment in the classic Barcelona center',
        img: '3.png',
        price: '60',
        amenities: ['k1', 'k3', 'k16', 'k17', 'k23', 'k22', 'k28'],
        coords: [41.393732, 2.165551]
    }, {
        name: 'Classic Example place for rent',
        img: '4.png',
        price: '75',
        amenities: ['k4', 'k6', 'k15'],
        coords: [41.392794, 2.164888]
    }, {
        name: 'Atlantida Beach',
        img: '5.png',
        price: '90',
        amenities: ['k19', 'k25'],
        coords: [41.392876, 2.163260]
    }, {
        name: 'Elegant place in Example',
        img: '6.jpg',
        price: '150',
        amenities: ['k1', 'k2', 'k5', 'k15', 'k16', 'k22', 'k28'],
        coords: [41.394479, 2.163797]
    }
]

export default { amenities, offers }
