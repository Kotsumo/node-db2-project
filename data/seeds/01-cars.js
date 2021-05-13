// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'supra',
        mileage: 10000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '2222222222222',
        make: 'honda',
        model: 'prelude',
        mileage: 15000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '3333333333333',
        make: 'nissan',
        model: 'skyline R34',
        mileage: 25000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '4444444444444',
        make: 'mazda',
        model: 'rx-7 fd3s',
        mileage: 2000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '5555555555555',
        make: 'toyota',
        model: '86',
        mileage: 5000,
        title: 'clean',
        transmission: 'manual',
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}