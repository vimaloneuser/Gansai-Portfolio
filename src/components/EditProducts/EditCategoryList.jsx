import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref, remove, set } from "firebase/database";
import { firebaseConfig } from "../../config/firebase";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { route } from "../../common/constants";
import toastr from "toastr";
import Modal from "react-modal";

const EditCategoryListing = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [id, setId] = useState({ name: "", id: 0 });
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(
    app,
    "https://gansai-tiles-default-rtdb.asia-southeast1.firebasedatabase.app"
  );

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate(route.login);
    }

    const starCountRef = ref(db, "products");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      var cate = [];
      if (data) {
        if (Array.isArray(data)) {
          data.map((i) => {
            cate.push(i);
          });
        } else {
          for (let i in data) {
            cate.push(data[i]);
          }
        }
      }
      setCategory(cate);
    });
  }, []);

  const addRowProcess = (event) => {
    event.preventDefault();
    const name = event.target.inputName.value;

    set(ref(db, "products/" + category.length), {
      id: category.length,
      name: name,
      catelogs: [],
    })
      .then(() => {
        toastr.success("Added successfully.");
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

  const editRow = (item) => {
    setEditModal(true);
    setId(item);
  };

  const editRowProcess = (event) => {
    event.preventDefault();
    const name = event.target.inputName.value;

    set(ref(db, `products/${id.id}`), {
      ...id,
      name,
    })
      .then(() => {
        toastr.success("Edited successfully.");
        setEditModal(false);
      })
      .catch(() => {
        toastr.error("Failed.");
      });
  };

  const deleteRow = (id) => {
    remove(ref(db, `products/${id}`))
      .then(() => {
        toastr.success("Removed successfully.");
        setAddModal(false);
      })
      .catch(() => {
        toastr.error("Failed.");
      });
  };

  return (
    <React.Fragment>
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
          <br />
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
          <br />
          <br />
          <br />

          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </Modal>
      <section>
        <div className="container">
          <div className="section-header">
            <br />
            <h2 className="section-title wow fadeInDown">Edit categories</h2>
          </div>

          <div className="row" style={{ margin: 10 }}>
            <button
              onClick={() => setAddModal(true)}
              className="btn btn-primary"
            >
              Add new
            </button>

            <div className="features">
              {category &&
                category.map((item, index) => (
                  <div
                    key={index}
                    className="col-md-4 col-lg-3 col-sm-3 wow fadeInUp"
                    data-wow-duration="300ms"
                    data-wow-delay="0ms"
                  >
                    <div className="media service-box  card">
                      <div className="media-body card">
                        <a
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            localStorage.setItem("categoryId", item.id);
                            navigate(route.editProduct);
                          }}
                        >
                          <h4 className="media-heading">{item.name}</h4>
                        </a>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => editRow(item)}
                        >
                          Edit
                        </a>{" "}
                        -{" "}
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteRow(item.id)}
                        >
                          Delete
                        </a>
                        {item?.description != null &&
                          item.description != "" && <p>{item.description}</p>}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default EditCategoryListing;
