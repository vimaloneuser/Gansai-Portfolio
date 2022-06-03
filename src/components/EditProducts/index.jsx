import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref, set, remove } from "firebase/database";
import { firebaseConfig } from "../../config/firebase";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import toastr from "toastr";
import { route } from "../../common/constants";

const EditProduct = () => {
  const [products, setProducts] = useState({ sizes: [], catelogs: [] });
  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [id, setId] = useState({ name: "", size: "", url: "", id: 0 });
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(
    app,
    "https://gansai-tiles-default-rtdb.asia-southeast1.firebasedatabase.app"
  );
  const categoryId = localStorage.getItem("categoryId");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate(route.login);
    }
   
    const starCountRef = ref(db, "products/" + categoryId);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      var sizes = [];
      var cate = [];

      if (Array.isArray(data?.catelogs)) {
        data?.catelogs.map((item) => {
          cate.push(item);
          if (!sizes.includes(item?.size)) sizes.push(item?.size);
        });
      } else {
        for (let i in data?.catelogs) {
          cate.push(data?.catelogs[i]);
          if (!sizes.includes(data?.catelogs[i]?.size))
            sizes.push(data?.catelogs[i]?.size);
        }
      }
      setProducts({ ...data, catelogs: cate, sizes });
    });
  }, []);


  const editRow = (item) => {
    setEditModal(true);
    setId(item);
  };

  const editRowProcess = (event) => {
    event.preventDefault();
    const name = event.target.inputName.value,
      url = event.target.inputUrl.value,
      size = event.target.inputSize.value;

    set(ref(db, `products/${categoryId}/catelogs/` + id.id), {
      id: id.id,
      size,
      name,
      url,
      thumbNail: "",
    })
      .then(() => {
        toastr.success("Edited successfully.");
        setEditModal(false);
      })
      .catch(() => {
        toastr.error("Failed.");
      });

  };
  const addRowProcess = (event) => {
    event.preventDefault();
    const name = event.target.inputName.value,
      url = event.target.inputUrl.value,
      size = event.target.inputSize.value;

    set(
      ref(
        db,
        `products/${categoryId}/catelogs/${products.catelogs.length}`
      ),
      {
        id: products.catelogs.length,
        size,
        name,
        url,
        thumbNail: "",
      }
    )
      .then(() => {
        toastr.success("Added successfully.");
        setAddModal(false);
      })
      .catch(() => {
        toastr.error("Failed.");
      });
  };
  const deleteRow = (id) => {
    remove(ref(db, `products/${categoryId}/catelogs/${id}`))
      .then(() => {
        toastr.success("Removed successfully.");
        setAddModal(false);
      })
      .catch(() => {
        toastr.error("Failed.");
      });
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={editModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setEditModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="row g-3" onSubmit={editRowProcess}>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">
              Name
            </label>
            <input
              defaultValue={id.name}
              required
              type="text"
              className="form-control"
              id="inputName"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="inputPassword4" className="form-label">
              Url
            </label>
            <input
              defaultValue={id.url}
              required
              type="text"
              className="form-control"
              id="inputUrl"
            />
          </div>
          <div
            className="col-md-12"
            style={{
              paddingBottom: 20,
            }}
          >
            <label htmlFor="inputPassword4" className="form-label">
              Size
            </label>
            <input
              required
              defaultValue={id.size}
              type="text"
              className="form-control"
              id="inputSize"
            />
          </div>
          <br />
          <br />

          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        isOpen={addModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setAddModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="row g-3" onSubmit={addRowProcess}>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">
              Name
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="inputName"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="inputPassword4" className="form-label">
              Url
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="inputUrl"
            />
          </div>
          <div
            className="col-md-12"
            style={{
              paddingBottom: 20,
            }}
          >
            <label htmlFor="inputPassword4" className="form-label">
              Size
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="inputSize"
            />
          </div>
          <br />
          <br />

          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </Modal>

      <section id="our-products" className="hero-action-section">
        <div className="container ow-section">
          <h4 className="hero-action-title">
            <br />
            Products / {products?.name}
          </h4>
        </div>
      </section>

      <div
        style={{
          padding: 20,
        }}
      >
        <button onClick={() => setAddModal(true)} className="btn btn-primary">
          Add new
        </button>
        <table className="table table-responsive">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Size</th>
              <th scope="col">Url</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.catelogs.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.size}</td>
                <td>
                  <a href={item?.url} target="_blank" rel="noreferrer">
                    {item?.url}
                  </a>
                </td>
                <td>
                  <a
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => editRow({ ...item, id: index })}
                  >
                    Edit
                  </a>
                </td>
                <td>
                  <a
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => deleteRow(item.id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default EditProduct;
