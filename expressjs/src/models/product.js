const db = require("../configs/db")
const product = {}

product.getAllProduct = () => {
    return new Promise((resolve, reject) => {
        //"SELECT public.product.*, public.category.name FROM public.product INNER JOIN public.category ON public.product.category_id = public.category.id  ORDER BY update_at DESC"
        db.query("SELECT public.product.*, public.category.name AS category_name FROM public.product INNER JOIN public.category ON public.product.category_id = public.category.id  ORDER BY update_at DESC")
            .then((res)=>{
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err.message)
            })
    })
}

product.getProductById = (id) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT public.product.*, public.category.name AS category_name FROM public.product INNER JOIN public.category ON public.product.category_id = public.category.id WHERE public.product.id=$1", [id])
            .then((res)=>{
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err.message)
            })
    })
}

product.addProduct = (data) => {
    return new Promise((resolve, reject) => {

        const time = new Date()
        const {title, category, price, store, review, star, image} = data
        db.query("INSERT INTO public.product (title, category_id, price, store, review, star, image, create_at, update_at) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)",
        [title, category, price, store, review, star, image, time, time])
            .then((res)=>{
                if(res.rowCount){
                    resolve({message : `Data Berhasil ditambahkan`})
                }else{
                    resolve({message : `Data gagal ditambahkan!`})
                }
            })
            .catch((err) => {
                reject(err.message)
            })
    })
}

product.updateProduct = (data) => {
    return new Promise((resolve, reject) => {

        const time = new Date()
        const {title, category, price, store, review, star, image, id} = data
        db.query("UPDATE public.product SET title=$1, category_id=$2, price=$3, store=$4, review=$5, star=$6, image=$7, update_at=$8 WHERE id=$9",
        [title, category, price, store, review, star, image, time, id])
            .then((res)=>{
                if(res.rowCount){
                    resolve({message : `Data Berhasil diubah`})
                }else{
                    resolve({message : `Data gagal diubah!`})
                }
            })
            .catch((err) => {
                reject(err.message)
            })
    })
}

product.deleteProduct = (key) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM public.product  WHERE id =$1",[key.id])
            .then((res)=>{
                if(res.rowCount){
                    resolve({message : `Data dengan id: ${key.id} Berhasil dihapus`})
                }else{
                    resolve({message : `Data gagal dihapus!`})
                }
            })
            .catch((err) => {
                reject(err.message)
            })
    })
}


module.exports = product