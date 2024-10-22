"use client"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { showMsg } from "../redux/appSlice";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";



function HomeText() {
  async function getText(page = 1) {
    try {
      const resp = await fetch(
        `http://localhost:3001/api/sections?page=${page}`
      );
      const data = await resp.json();
      setPosts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  function confirmDelete(post) {
    setSelectedPost(post);
    setDialog(true);
  }

  async function deleteText() {
    try {
      setDialog(false);
      const response = await fetch(
        `http://localhost:3001/api/sections/${selectedPost._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSelectedPost({});
      const data = await response.json();
      dispatch(
        showMsg({ msgText: `Se ha eliminado Text${data.data.titulo}` })
      );
      getText();
    } catch (err) {
      console.log(err);
    }
  }

  const [posts, setPosts] = useState({ items: [] });
  const [dialog, setDialog] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    getText();
  }, []);

  return (
    <>
      <Modal
        show={dialog}
        onHide={() => setDialog(false)}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Eliminar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Esta seguro de eliminar este modulo de Texto?
          <p>{selectedPost.titulo}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDialog(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={deleteText}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="d-flex flex-wrap justify-content-center" >
      <Button
                  variant="primary"
                  onClick={() =>
                    router.push(`/pages/AdmText/AdmTextPost`)
                  }
                >
                  Nuevo texto/Estudio
                </Button>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {posts.items.map((post) => (
          <Card className="my-2 mx-2" style={{ width: "18rem" }} key={post._id}>
            <Card.Body>
              <Card.Title>{post.titulo}</Card.Title>
              <Card.Text>
                {moment(post.updatedAt).format("YYYY-MM-DD hh:mm")}
              </Card.Text>
              <Card.Text>{post.texto}</Card.Text>
              
              <div className="d-flex justify-content-between mt-3">
                <Button
                  variant="primary"
                  onClick={() =>
                    router.push(`/pages/AdmText/AdmTextPost/${post._id}`)
                  }
                >
                  Editar
                </Button>
                <Button variant="danger" onClick={() => confirmDelete(post)}>
                  Eliminar
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className="d-flex justify-content-center my-4">
        <Button
          variant="primary"
          className="mx-2"
          disabled={posts.page <= 1}
          onClick={() => getText(posts.prev)}
        >
          Anterior
        </Button>
        <span>{posts.page}</span>
        <Button
          variant="primary"
          className="mx-2"
          onClick={() => getText(posts.next)}
        >
          Siguiente
        </Button>
      </div>
    </>
  );
}

export default HomeText;