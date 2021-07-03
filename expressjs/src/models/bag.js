const bag = {}
const db = require("../configs/db")

bag.getAllBag = () =>{
    return new Promise((resolve, reject)=>{
        db.query("SELECT public.bag.*, public.product.title, public.product.price, public.product.store, public.product.image FROM public.bag INNER JOIN public.product ON public.bag.product_id = public.product.id ORDER BY create_at DESC")
            .then((res)=>{
                resolve(res.rows)
            })
            .catch((err)=>{
                console.log(err)
                reject(err.message)
            })
    })
}

bag.addBag = (data) => {
    return new Promise((resolve, reject)=>{
        let {product_id, amount} = data
        const create_at = new Date()
        db.query("INSERT INTO public.bag (product_id, amount, create_at) VALUES($1,$2,$3)", 
        [product_id, amount, create_at])
        .then((res=>{
            console.log(res)
            resolve(res)
        }))
        .catch((err)=>{
            console.log(err)
            reject(err.message)
        })
    })
}

module.exports = bag