import { Container, Form } from "react-bootstrap";
import "./Blog.css";
import { useForm } from "react-hook-form";

export function Blog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <Container>
      <div className="blog-form">
        <h2 className="mt-5">Blog</h2>
        <hr />
        <form class="form-floating" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            class="form-control"
            id="floatingInputValue"
            placeholder="a"
            {...register("titulo", {
              required: "Titulo é obrigatório!",
              maxLength: { value: 16, message: "Limite de 16 caracteres!" },
              minLength: { value: 3, message: "Minimo de 3 caracteres!" },
            })}
          />
          <span className="Valid-Text-Form mt-1 ms-2">{errors.titulo?.message}</span>
          <label for="floatingInputValue">Titulo</label>
          <div class="form-floating">
            <textarea
              class="form-control text-Area-Form"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              {...register("postagem", {
                required: "Você precisa escrever algo...",
                maxLength: { value: 128, message: "Limite de 128 caracteres!" },
                minLength: { value: 4, message: "Minimo de 4 caracteres!" },
              })}
            ></textarea>
            <label for="floatingTextarea2">Texto de postagem.</label>
            <span className="Valid-Text-Form mt-1 ms-2">{errors.postagem?.message}</span>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-5">
            <button class="btn btn-success mt-1" type="submit">
              Postar
              <i class="bi bi-pencil ms-2"></i>
            </button>
          </div>
        </form>
      </div>
      <hr />
    </Container>
  );
}
