// STRETCH
const cars = [
    {
        vin: '11111111111111111',
        make: 'toyota',
        model: 'supra',
        mileage: 10000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '22222222222222222',
        make: 'honda',
        model: 'prelude',
        mileage: 15000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '33333333333333333',
        make: 'nissan',
        model: 'skyline R34',
        mileage: 25000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '44444444444444444',
        make: 'mazda',
        model: 'rx-7 fd3s',
        mileage: 2000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '55555555555555555',
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