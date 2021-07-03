const db = require("../configs/db")
const category = {}

category.getAllCategory = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM public.category ORDER BY update_at DESC")
            .then((res)=>{
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err.message)
            })
    })
}

category.getCategoryById = (id) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM public.category WHERE id=$1", [id])
            .then((res)=>{
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err.message)
            })
    })
}

category.addCategory = (data) => {
    return new Promise((resolve, reject) => {

        const time = new Date()
        const {name, image} = data
        console.log(name)
        db.query("INSERT INTO public.category (name, image, create_at, update_at) VALUES($1,$2,$3,$4)",[name, image, time, time])
            .then((res)=>{
                resolve(res)
            })
            .catch((err) => {
                reject(err.message)
            })
    })
}

category.deleteCategory = (key) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM public.category  WHERE id =$1",[key.id])
            .then((res)=>{
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err.message)
            })
    })
}


module.exports = category