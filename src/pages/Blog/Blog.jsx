import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addPost, getPost } from "../../firebase/postagens";
import { toast } from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Blog.css";

export function Blog() {
  const [post, setPost] = useState([]);
  function initializeTable() {
    getPost().then((resultados) => {
      setPost(resultados);
    });
  }
  useEffect(() => {
    initializeTable();
  }, [onSubmit]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const postData = { ...data, email: usuarioLogado?.email };
    addPost(postData).then(() => {
      toast.success(`Postado com sucesso!`, {
        position: "bottom-right",
        duration: 2500,
      });
      reset();
    });
  }
  const usuarioLogado = useContext(AuthContext);
  return (
    <Container>
      <div className="blog-form">
        <h2 className="mt-5">Olá, {usuarioLogado?.email}</h2>
        <hr />
        <form className="form-floating" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="form-control intp-Form-Blog-dark"
            id="floatingInputValue"
            placeholder="a"
            {...register("titulo", {
              required: "Titulo é obrigatório!",
              maxLength: { value: 16, message: "Limite de 16 caracteres!" },
              minLength: { value: 3, message: "Minimo de 3 caracteres!" },
            })}
          />
          <span className="Valid-Text-Form mt-1 ms-2">
            {errors.titulo?.message}
          </span>
          <label>Titulo</label>
          <div className="form-floating">
            <textarea
              className="form-control text-Area-Form intp-Form-Blog-dark"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              {...register("postagem", {
                required: "Você precisa escrever algo...",
                maxLength: { value: 128, message: "Limite de 128 caracteres!" },
                minLength: { value: 4, message: "Minimo de 4 caracteres!" },
              })}
            ></textarea>
            <label>Texto de postagem</label>
            <span className="Valid-Text-Form mt-1 ms-2">
              {errors.postagem?.message}
            </span>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-5">
            <button className="btn-Post mt-1" type="submit">
              Postar
              <i className="bi bi-pencil ms-2"></i>
            </button>
          </div>
        </form>
      </div>
      <hr />
      {post.map((post) => {
        return (
          <div className="p-3 m-2 borderPost" key={post.id}>
            <section className="card-postagens-section">
              <div className="card-postagens">
                <div className="blog-div-img mb-3 d-flex align-items-center">
                  <img
                    className="img-Blog"
                    src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png"
                    alt=""
                  />
                  <h4 className="user-name-blog ml-3 ms-3">{post.email}</h4>
                </div>
                <p>{post.titulo}</p>
                <h6>{post.postagem}</h6>
              </div>
              <div className="btn-Icons-Blog d-flex justify-content-between mb-3 mt-1">
                <i className="bi bi-chat icn-a"></i>
                <i className="bi bi-share icn-b"></i>
                <i className="bi bi-heart icn-c"></i>
                <i className="bi bi-arrow-bar-up icn-d"></i>
              </div>
              <hr />
            </section>
          </div>
        );
      })}
    </Container>
  );
}
