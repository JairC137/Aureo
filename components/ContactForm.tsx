import { useState } from "react"; 

export default function ContactForm() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = new FormData(form);
    const values = Object.fromEntries(data.entries()); // convierte FormData a objeto

    try {
      await fetch("https://script.google.com/macros/s/AKfycby-9qnzG4fcSfEN8LrDlToqZVYzoN-446uRvI3mqA9NkzI_XRFiF3qwiA89YOjfoQU7uA/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      setShowModal(true);
      form.reset();
    } catch (error) {
      alert("Ocurrió un error. Intenta más tarde.");
      console.error(error);
    }
  };

  return (
    <section id="contacto" className="bg-[#F8F5EC] scroll-mt-24 py-16 px-4 relative">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-[#f3ead4]">
        <h2 className="text-2xl font-bold text-[#691C1C] mb-6 text-center">Cotiza tu evento</h2>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="w-full border border-[#ddd] bg-white text-[#333] rounded-lg p-3 placeholder:text-[#888] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B58C38]"
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            className="w-full border border-[#ddd] bg-white text-[#333] rounded-lg p-3 placeholder:text-[#888] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B58C38]"
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            className="w-full border border-[#ddd] bg-white text-[#333] rounded-lg p-3 placeholder:text-[#888] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B58C38]"
            required
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            className="w-full border border-[#ddd] bg-white text-[#333] rounded-lg p-3 placeholder:text-[#888] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B58C38]"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#B58C38] text-white py-3 rounded-lg hover:bg-[#8a682a] transition transform hover:scale-105 font-semibold tracking-wide"
          >
            Enviar mensaje
          </button>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm">
            <h3 className="text-xl font-semibold mb-2 text-[#691C1C]">¡Gracias por contactarnos!</h3>
            <p className="text-gray-600">Tu mensaje fue enviado con éxito. Te responderemos pronto.</p>
            <button
              className="mt-4 px-5 py-2 bg-[#B58C38] text-white rounded-lg hover:bg-[#8a682a] transition"
              onClick={() => setShowModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <div className="mt-8 p-6 bg-white rounded-xl shadow-md text-center max-w-xl mx-auto">
        <h3 className="text-xl font-semibold text-[#691C1C] mb-4">¿Tienes dudas o prefieres atención directa?</h3>
        <p className="text-gray-700 mb-6">Contáctanos por WhatsApp y recibe asesoría inmediata de nuestro equipo.</p>
        <a
          href="https://wa.me/5219999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold rounded-full px-6 py-3 text-lg transition duration-300"
        >
          <svg className="w-6 h-6 mr-2 fill-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.4 2 7.7L.4 32l8.5-2.2c2.2 1.2 4.8 1.8 7.5 1.8 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.6c-2.4 0-4.8-.6-6.9-1.8l-.5-.3-5 1.3 1.3-4.9-.3-.5c-1.2-2-1.8-4.3-1.8-6.6 0-7.4 6.1-13.4 13.4-13.4s13.4 6.1 13.4 13.4-6.1 13.4-13.4 13.4zm7.5-10.3c-.4-.2-2.2-1.1-2.5-1.2s-.6-.2-.8.2-1 1.2-1.2 1.4-.4.3-.8.1c-2.2-1.1-3.6-3-4-3.5-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7s.3-.4.5-.6c.1-.2.1-.4 0-.6s-.8-2-1.1-2.8c-.3-.7-.6-.6-.8-.6h-.6c-.2 0-.5 0-.8.4s-1.1 1.1-1.1 2.6 1.1 3 1.2 3.2c.1.2 2.2 3.4 5.5 4.7.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.1-1.6s.3-1.5.2-1.6c-.1-.1-.4-.2-.9-.4z" />
          </svg>
          Contáctanos por WhatsApp
        </a>
      </div>
    </section>
  );
}
