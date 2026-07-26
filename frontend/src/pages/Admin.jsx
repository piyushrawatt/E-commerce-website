import React, { useRef, useState } from "react";
import API from "../../API/axios";
import { Link } from "react-router-dom";

function Admin() {
  const fileRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    rating: "",
    image: null,
  });

  const saveData = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setData({
        ...data,
        image: files[0],
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      !data.title ||
      !data.description ||
      !data.price ||
      !data.stock ||
      !data.category ||
      !data.rating ||
      !data.image
    ) {
      return alert("Please fill all fields");
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("stock", data.stock);
      formData.append("category", data.category);
      formData.append("rating", data.rating);
      formData.append("image", data.image);

      await API.post("/api/product", formData);

      alert("Product Uploaded Successfully");

      setData({
        title: "",
        description: "",
        price: "",
        stock: "",
        category: "",
        rating: "",
        image: null,
      });

      fileRef.current.value = "";
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center">

      <div className="w-full flex justify-end p-5">
        <Link
          to="/admin/products"
          className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200"
        >
          Manage Products
        </Link>
      </div>

      <form
        onSubmit={onSubmit}
        className="w-[450px] bg-blue-900 text-white rounded-2xl p-8 shadow-2xl flex flex-col gap-5"
      >
        <h1 className="text-3xl font-bold text-center">
          Upload
          <span className="text-yellow-400 font-mono text-4xl">
            {" "}
            Product
          </span>
        </h1>

        <input
          type="text"
          placeholder="Title"
          name="title"
          value={data.title}
          onChange={saveData}
          className="border rounded-lg p-3"
        />

        <textarea
          placeholder="Description"
          name="description"
          value={data.description}
          onChange={saveData}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Price"
          name="price"
          value={data.price}
          onChange={saveData}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Stock"
          name="stock"
          value={data.stock}
          onChange={saveData}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Category"
          name="category"
          value={data.category}
          onChange={saveData}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Rating"
          min={0}
          max={5}
          name="rating"
          value={data.rating}
          onChange={saveData}
          className="border rounded-lg p-3"
        />

        <input
          ref={fileRef}
          type="file"
          name="image"
          onChange={saveData}
          className="border rounded-lg p-3 bg-white text-black"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-red-600 hover:bg-red-700 rounded-lg py-3 text-xl font-bold"
        >
          {loading ? "Uploading..." : "Upload Product"}
        </button>
      </form>
    </div>
  );
}

export default Admin;