const bag = {}
const model = require("../models/bag")
const product = require("../models/product")

bag.getAllBag = async (req, res) => {

    try{
        const bag = await model.getAllBag()
        let json = bag.map((bag)=>{
            total_price = bag.amount*bag.price
            let object = {
                id : bag.id,
                product_id : bag.product_id,
                product_title : bag.title,
                product_store : bag.store,
                product_price : bag.price,
                amount : bag.amount,
                total_price : total_price,
                create_at : bag.create_at
            }
            return object
        })
        res.send(json)
    }
    catch(error){
        res.send(error)
    }

}

bag.addBag = async (req, res) => {
    try{
        const bag = await model.addBag(req.body)
        if(!bag[0]){
            res.send({message : "success add to bag"})
        }else{
            res.send({message : "gagal"})
        }
    }catch(error){
        res.send(error)
    }
}


module.exports = bag