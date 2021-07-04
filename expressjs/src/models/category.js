const db = require('../configs/db');

const category = {};

category.getAllCategory = () => new Promise((resolve, reject) => {
  db.query('SELECT * FROM public.category ORDER BY update_at DESC')
    .then((res) => {
      resolve(res.rows);
    })
    .catch((err) => {
      reject(err.message);
    });
});

category.getCategoryById = (id) => new Promise((resolve, reject) => {
  db.query('SELECT * FROM public.category WHERE id=$1', [id])
    .then((res) => {
      resolve(res.rows);
    })
    .catch((err) => {
      reject(err.message);
    });
});

category.addCategory = (data) => new Promise((resolve, reject) => {
  const time = new Date();
  const { name, image } = data;
  //    console.log(name);
  db.query('INSERT INTO public.category (name, image, create_at, update_at) VALUES($1,$2,$3,$4)', [name, image, time, time])
    .then((res) => {
      resolve(res);
    })
    .catch((err) => {
      reject(err.message);
    });
});

category.updateCategory = (data) => new Promise((resolve, reject) => {
  const updateAt = new Date();
  const { name, image, id } = data;
  db.query('UPDATE public.category SET name=$1, image=$2, update_at=$3 WHERE id=$4',
    [name, image, updateAt, id])
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

category.deleteCategory = (key) => new Promise((resolve, reject) => {
  db.query('DELETE FROM public.category  WHERE id =$1', [key.id])
    .then((res) => {
      resolve(res.rows);
    })
    .catch((err) => {
      reject(err.message);
    });
});

module.exports = category;
