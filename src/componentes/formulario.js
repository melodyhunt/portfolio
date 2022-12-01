import "./formulario.scss";
import emailjs from "@emailjs/browser";
const Formulario = () => {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_qoy3v0t",
        "template_ihr9lxu",
        event.target,
        "fpN7QwfpNqOh-wjLR"
      )
      .then((response) => {
        alert("Mensaje enviado con exito!");
      })
      .catch((error) => {
        alert("No pudimos enviar el mensaje, intentelo de nuevo");
      });
    event.target.reset();
  };
  return (
    <div className="pagina">
      <div className="formulario-contacto">
        <form id="form" onSubmit={sendEmail} action="">
          <div className="form">
            <input
              className="nombre"
              name="nombre"
              type="text"
              placeholder="Nombre"
              required
            ></input>

            <input
              className="nombre"
              name="apellido"
              type="text"
              placeholder="apellido"
              required
            ></input>

            <input
              className="email"
              name="email"
              type="email"
              placeholder="Email"
              required
            ></input>

            <textarea placeholder="Mensaje" name="mensaje" required></textarea>
          </div>
          <input
            type="submit"
            id="boton"
            value="enviar"
            className="boton"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
