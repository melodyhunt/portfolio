import "./formulario.scss";
import emailjs from "@emailjs/browser";
const Formulario = () => {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_1i18msk",
        "template_3g1yqdl",
        event.target,
        "7AiOHqzbPNZtfSulY"
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
          <ul>
            <li className="half">
              <input
                name="nombre"
                type="text"
                placeholder="Nombre"
                required
              ></input>
            </li>
            <li className="half">
              {" "}
              <input
                name="Apellido"
                type="text"
                placeholder="Asunto"
                required
              ></input>
            </li>
          </ul>
          <ul className="emamen">
            <li className="email">
              {" "}
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
              ></input>
            </li>
            <li className="mensaje">
              <textarea
                placeholder="Mensaje"
                name="mensaje"
                required
              ></textarea>
            </li>
          </ul>
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
