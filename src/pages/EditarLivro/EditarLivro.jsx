import { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { getLivro, updateLivro, uploadCapaLivro } from "../../firebase/livros";

export function EditarLivro() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  function onSubmit(data) {
    const imagem = data.imagem[0];
    if (imagem) {
      const toastId = toast.loading("Upload da imagem...", {
        position: "top-right",
      });
      uploadCapaLivro(imagem).then((url) => {
        toast.dismiss(toastId);
        data.urlCapa = url;
        delete data.imagem;
        updateLivro(id, data).then(() => {
          toast.success("Livro editado com sucesso!", {
            duration: 2000,
            position: "bottom-right",
          });
          navigate("/livros");
        });
      });
    } else {
      delete data.imagem;
      updateLivro(id, data).then(() => {
        toast.success("Livro editado com sucesso!", {
          duration: 2000,
          position: "bottom-right",
        });
        navigate("/livros");
      });
    }
  }

  useEffect(() => {
    getLivro(id).then((livro) => {
      reset(livro);
    });
  }, [id, reset]);

  return (
    <div className="editar-livro">
      <Container>
        <h1>Editar livro</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              className={errors.titulo && "is-invalid"}
              {...register("titulo", {
                required: "Título é obrigatório!",
                maxLength: { value: 255, message: "Limite de 255 caracteres!" },
              })}
            />
            <Form.Text className="text-danger">
              {errors.titulo?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Autor</Form.Label>
            <Form.Control
              type="text"
              className={errors.autor && "is-invalid"}
              {...register("autor", {
                required: "Autor é obrigatório!",
                maxLength: { value: 255, message: "Limite de 255 caracteres!" },
              })}
            />
            <Form.Text className="text-danger">
              {errors.autor?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Categoria</Form.Label>
            <div className="row">
              <div className="col-md-4">
                <Form.Check
                  type="checkbox"
                  label="TERROR"
                  id="terror"
                  value="Terror"
                  {...register("categorias")}
                />
                <Form.Check
                  type="checkbox"
                  label="COMEDIA"
                  id="comedia"
                  value="Comédia"
                  {...register("categorias")}
                />
                <Form.Check
                  type="checkbox"
                  label="ROMANCE"
                  id="romance"
                  value="Romance"
                  {...register("categorias")}
                />
              </div>
              <div className="col-md-4">
                <Form.Check
                  type="checkbox"
                  label="AÇÃO"
                  id="acao"
                  value="Ação"
                  {...register("categorias")}
                />
                <Form.Check
                  type="checkbox"
                  label="DRAMA"
                  id="drama"
                  value="Drama"
                  {...register("categorias")}
                />
                <Form.Check
                  type="checkbox"
                  label="FICÇÃO"
                  id="ficcao"
                  value="Ficção"
                  {...register("categorias")}
                />
              </div>
              <div className="col-md-4">
                <Form.Check
                  type="checkbox"
                  label="ANIMAÇÃO"
                  id="animacao"
                  value="Animacao"
                  {...register("categorias")}
                />
                <Form.Check
                  type="checkbox"
                  label="DOCUMENTÁRIO"
                  id="documentario"
                  value="Documentário"
                  {...register("categorias")}
                />
                <Form.Check
                  type="checkbox"
                  label="SUSPENSE"
                  id="suspense"
                  value="Suspense"
                  {...register("categorias")}
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>ISBN</Form.Label>
            <Form.Control
              type="text"
              className={errors.isbn && "is-invalid"}
              {...register("isbn", {
                required: "ISBN é obrigatório!",
                maxLength: { value: 255, message: "Limite de 255 caracteres!" },
              })}
            />
            <Form.Text className="text-danger">
              {errors.isbn?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Imagem da capa</Form.Label>
            <Form.Control type="file" {...register("imagem")} />
          </Form.Group>
          <Button type="submit" variant="success">
            Editar
          </Button>
        </Form>
      </Container>
    </div>
  );
}
