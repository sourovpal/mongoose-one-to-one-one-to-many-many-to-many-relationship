const mongoose = require("mongoose")

const Owner = new mongoose.Schema({
    name: String
})

const houseSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zip: String,
    owner: Owner
})

const House = mongoose.model("House", houseSchema)
// Create a new house
House.create({
    street: "Dhaka Nickonj",
    city: "Dhaka",
    state: "Dhaka Bangladesh",
    zip: "123",
    owner: {name: "Sourov Pal"}
})

House.find({})

// ===========================================================================

const mongoose = require("mongoose")

const ownerSchema = new mongoose.Schema({
    name: String
})

const Owner = mongoose.model("Owner", ownerSchema)

const houseSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zip: String,
    owner: {type: mongoose.Types.ObjectId, ref: "Owner"}
})

const House = mongoose.model("House", houseSchema)

// Create a Owner
const alex = await Owner.create({name: "Alex Merced"})

// Create a new house
House.create({
    street: "Dhaka Nickonj",
    city: "Dhaka",
    state: "Dhaka Bangladesh",
    zip: "123",
    owner: {name: "Sourov Pal"}
})

House.find({}).populate("owner")

// =============================================================


const mongoose = require("mongoose")

const ownerSchema = new mongoose.Schema({
    name: String
})

const Owner = mongoose.model("Owner", ownerSchema)

const houseSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zip: String
})

const House = mongoose.model("House", houseSchema)

const houseOwnerSchema = {
    owner: {type: mongoose.Types.ObjectId, ref: "Owner"},
    house: {type: mongoose.Types.ObjectId, ref: "House"}
}

const HouseOwner = mongoose.model("HouseOwner", houseOwnerSchema)

// Create a Owner
const alex = await Owner.create({name: "Sourov Pal"})

// Create a new house
const mapleStreet = await House.create({
    street: "100 Maple Street",
    city: "Fort Townville,
    state: "New West Virgota",
    zip: "77777",
    owner: alex
})


HouseOwner.create({owner: alex, house: mapleStreet})

HouseOwner.find({owner: alex}).populate("house")

HoseOwner.find({house: mapleStreet}).populate("owner")
















