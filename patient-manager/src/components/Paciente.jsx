import React from "react";

function Paciente() {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-2 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Lilo</span>
      </p>

      <p className="font-bold mb-2 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Kakaroto</span>
      </p>

      <p className="font-bold mb-2 text-gray-700 uppercase">
        E-mail: {""}
        <span className="font-normal normal-case">kakroto@gmail.com</span>
      </p>

      <p className="font-bold mb-2 text-gray-700 uppercase">
        Fecha de Alta: {""}
        <span className="font-normal normal-case">
          24 de diciembre del 2021
        </span>
      </p>

      <p className="font-bold mb-2 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          mollitia consectetur blanditiis sed molestias, dignissimos nobis
          obcaecati quasi ullam voluptatibus deleniti explicabo cum, quam
          aperiam fuga expedita hic cupiditate cumque.
        </span>
      </p>
    </div>
  );
}

export default Paciente;
