const bag = {};
const db = require('../configs/db');

bag.getAllBag = () => new Promise((resolve, reject) => {
  db.query('SELECT public.bag.*, public.product.title, public.product.price, public.product.store, public.product.image FROM public.bag INNER JOIN public.product ON public.bag.product_id = public.product.id ORDER BY create_at DESC')
    .then((res) => {
      resolve(res.rows);
    })
    .catch((err) => {
      // console.log(err);
      reject(err.message);
    });
});

bag.addBag = (data) => new Promise((resolve, reject) => {
  const { productId, amount } = data;
  const createAt = new Date();
  db.query('INSERT INTO public.bag (product_id, amount, create_at, update_at) VALUES($1,$2,$3,$4)',
    [productId, amount, createAt, createAt])
    .then(((res) => {
      if (res.rowCount) {
        resolve({ message: 'success add to bag' });
      } else {
        resolve({ message: 'gagal' });
      }
    }))
    .catch((err) => {
      // console.log(err);
      reject(err.message);
    });
});

bag.updateBag = (data) => new Promise((resolve, reject) => {
  const updateAt = new Date();
  const { amount, id } = data;
  db.query('UPDATE public.bag SET amount=$1, update_at=$2 WHERE id=$3',
    [amount, updateAt, id])
    .then((res) => {
      if (res.rowCount) {
        resolve({ message: 'Data Berhasil diubah' });
      } else {
        resolve({ message: 'Data gagal diubah!' });
      }
    })
    .catch((err) => {
      reject(err);
    });
});

bag.deleteBag = (key) => new Promise((resolve, reject) => {
  db.query('DELETE FROM public.bag WHERE id=$1', [key.id])
    .then((res) => {
      if (res.rowCount) {
        resolve({ message: 'Data Berhasil dihapus' });
      } else {
        resolve({ message: 'Data gagal dihapus!' });
      }
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports = bag;
