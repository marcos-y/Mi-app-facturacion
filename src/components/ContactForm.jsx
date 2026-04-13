import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Formulario enviado:", data);
    // Aquí puedes conectar tu API de envío de mensajes
    reset(); // limpia el formulario después de enviar
  };

  return (
    <div className="contact-form-container" style={{ maxWidth: "500px"}}>
      <h2>Contáctanos</h2>
      <p>Estamos aquí para ayudarte. Llena el formulario y te responderemos pronto.</p>

      {isSubmitSuccessful && (
        <p style={{ color: "green", fontWeight: "bold" }}>¡Mensaje enviado correctamente!</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {/* Nombre */}
        <input
          type="text"
          placeholder="Nombre"
          {...register("name", { required: "El nombre es obligatorio" })}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}

        {/* Email */}
        <input
          type="email"
          placeholder="Correo electrónico"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email inválido",
            },
          })}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}

        {/* Asunto */}
        <input
          type="text"
          placeholder="Asunto"
          {...register("subject")}
        />

        {/* Mensaje */}
        <textarea
          placeholder="Mensaje"
          rows={5}
          {...register("message", { required: "El mensaje es obligatorio" })}
        ></textarea>
        {errors.message && <span style={{ color: "red" }}>{errors.message.message}</span>}

        <button type="submit" style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}>
          Enviar mensaje
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h3>O contáctanos directamente:</h3>
        <p>📧 soporte@factupro.com</p>
        <p>📞 +1 234 567 890</p>
        <p>🏢 Calle Ejemplo 123, Ciudad, País</p>
      </div>
    </div>
  );
};

export default ContactForm;