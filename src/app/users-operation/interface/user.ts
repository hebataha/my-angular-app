export interface User {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: string
    email: string
    phone: string
    username: string
    birthDate: string
    image: string
    height: number
    weight: number
    address: Address
    university: string
    company: Company
}

export interface Address {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    coordinates: Coordinates
    country: string
}

export interface Coordinates {
    lat: number
    lng: number
}

export interface Company {
    department: string
    name: string
    title: string
}


