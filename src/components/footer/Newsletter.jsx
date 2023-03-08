import React from "react";
import { GiLoveLetter } from "react-icons/gi";

export default function Newsletter() {
  return (
    <>
      <section className="newsletter ">
        <div className="container flex">
          <div className="flex">
            <GiLoveLetter className="icon" />
            <h2>
              Receba a nossa <span className="uppercase">newsletter</span>{" "}
            </h2>
          </div>
          <form>
            <div className="flex">
              <input type="text" placeholder="Digite seu nome" required />
              <input type="text" placeholder="Digite seu email" required />
              <button className="button">Enviar</button>
            </div>
            <div className="flex termos">
              <input type="checkbox" name="nlTermosPP" id="nlTermosPP" />
              <label htmlFor="nlTermosPP">
                Eu li e aceito os termos de uso da{" "}
                <span className="uppercase">política de privacidade</span>
              </label>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
