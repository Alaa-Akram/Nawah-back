// const productModel = require("../models/product")
const productModel = require ("../Models/product.js")

async function get_Image_for_product(file){
    let pathLink = "http://localhost:3500/"+file.filename;
    return pathLink;
}