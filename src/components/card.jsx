import React, { useState } from "react";
import "./card.css";

export default (props) => {
  const [number, setNumber] = useState("**** **** **** ****");
  const [name, setName] = useState("Nome Impresso");
  const [date, setDate] = useState("00/00");

  return (
    <>
      <div className="card edit card__master">
        <div className="flag">
          <button className="card__btn">Editar</button>
          <span className="flag__image master"></span>
        </div>

        <div>
          <span className="text">{number}</span>
        </div>

        <div className="card__info">
          <div className="card__info--name">
            <span className="title">Nome</span>
            <span className="text small">{name}</span>
          </div>

          <div className="card__info--date">
            <span className="title">Validade</span>
            <span className="text small">{date}</span>
          </div>
        </div>
      </div>

      <div className="form active">
        <div className="form__content">
          <h2 className="title">Edite seu cartão de credito</h2>
          <div className="form__control">
            <input
              type="tel"
              maxLength="16"
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Numero do cartão"
            />
          </div>

          <div className="form__control">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome impresso no cartão"
            />
          </div>
          <div className="form__group">
            <div className="form__control">
              <input
                type="text"
                maxLength="5"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form__control">
              <input type="number" placeholder="CVV" />
            </div>
          </div>
          <button className="btn">Salvar</button>
        </div>
      </div>
    </>
  );
};
