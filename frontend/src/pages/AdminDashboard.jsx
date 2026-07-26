import React, { useEffect, useState } from "react";
import API from "../../API/axios";

function AdminDashboard() {

  const [products, setProducts] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [editData, setEditData] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    rating: "",
  });
const [loading , setloading ] = useState(false)
  // -----------------------------
  // Fetch Products
  // -----------------------------

  const getProducts = async () => {
    try {

      const res = await API.get("/product");

      setProducts(res.data.products);

    } catch (err) {

      console.log(err);

    }
  };

  useEffect(() => {

    getProducts();

  }, []);

  // -----------------------------
  // Delete Product
  // -----------------------------

  const deleteProduct = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/product/${id}`);

      alert("Product Deleted");

      getProducts();

    } catch (err) {

      console.log(err);

      alert("Delete Failed");

    }

  };

  // -----------------------------
  // Edit Product
  // -----------------------------

  const editProduct = (product) => {

    setEditingId(product._id);

    setEditData({

      title: product.title,

      description: product.description,

      price: product.price,

      stock: product.stock,

      category: product.category,

      rating: product.rating,

    });

  };

  const handleChange = (e) => {

    const { name, value } = e.target;

    setEditData({

      ...editData,

      [name]: value,

    });

  };
  const updateProduct = async () => {

  try {

    await API.put(

      `/product/${editingId}`,

      editData

    );

    alert("Product Updated Successfully");

    setEditingId(null);

    setEditData({

      title: "",

      description: "",

      price: "",

      stock: "",

      category: "",

      rating: "",

    });

    getProducts();

  }

  catch (err) {

    console.log(err);

    alert("Update Failed");

  }

};

  return (

    <div className="min-h-screen bg-gray-950 text-white p-10">

      <h1 className="text-4xl font-bold text-center mb-10">

        Manage Products

      </h1>
      {editingId && (

  <div className="bg-gray-900 rounded-xl p-8 mb-10">

    <h2 className="text-3xl font-bold mb-6">
      Edit Product
    </h2>

    <div className="grid md:grid-cols-2 gap-5">

      <input
        type="text"
        name="title"
        value={editData.title}
        onChange={handleChange}
        placeholder="Title"
        className="border rounded-lg p-3 text-white"
      />

      <input
        type="text"
        name="description"
        value={editData.description}
        onChange={handleChange}
        placeholder="Description"
        className="border rounded-lg p-3 text-white"
      />

      <input
        type="number"
        name="price"
        value={editData.price}
        onChange={handleChange}
        placeholder="Price"
        className="border rounded-lg p-3 text-white"
      />

      <input
        type="number"
        name="stock"
        value={editData.stock}
        onChange={handleChange}
        placeholder="Stock"
        className="border rounded-lg p-3 text-white"
      />

      <input
        type="text"
        name="category"
        value={editData.category}
        onChange={handleChange}
        placeholder="Category"
        className="border rounded-lg p-3 text-white"
      />

      <input
        type="number"
        name="rating"
        value={editData.rating}
        onChange={handleChange}
        placeholder="Rating"
        className="border rounded-lg p-3 text-white"
      />

    </div>

    <div className="flex gap-5 mt-6">

      <button
        onClick={updateProduct}
        disabled={loading}
        className="bg-green-600 px-6 py-3 rounded-lg"
      >
        {loading ? "updating..." : "update completed"}
      </button>

      <button
        onClick={() => {

          setEditingId(null);

          setEditData({
            title: "",
            description: "",
            price: "",
            stock: "",
            category: "",
            rating: "",
          });

        }}
        className="bg-red-600 px-6 py-3 rounded-lg"
      >
        Cancel
      </button>

    </div>

  </div>

)}

      <div className="grid md:grid-cols-3 gap-8">

        {products.map((item) => (

          <div
            key={item._id}
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden"
          >

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold">

                {item.title}

              </h2>

              <p className="mt-2">

                ₹{item.price}

              </p>

              <p>

                {item.category}

              </p>

              <p>

                Stock : {item.stock}

              </p>

              <div className="flex gap-3 mt-5">

                <button

                  onClick={() => editProduct(item)}

                  className="bg-yellow-500 px-4 py-2 rounded-lg"

                >

                  Edit

                </button>

                <button

                  onClick={() => deleteProduct(item._id)}

                  className="bg-red-600 px-4 py-2 rounded-lg"

                >

                  Delete

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default AdminDashboard;