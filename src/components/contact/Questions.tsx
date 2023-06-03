import React from "react";

function Questions() {
  return (
    <section className="pt-24">
      <div>
        <h2 className="text-4xl text-center">Preguntas Frecuentes</h2>
        <div className="bg-black bg-opacity-25 w-4/6 m-auto mt-20 rounded-xl p-10">
          <div>
            <dl>
              <dt>¿Es de código abierto?</dt>
              <dd>
                Si, ElectronPlayer es de código abierto. Puedes ver el código
                dando clic en el enlace de abajo.
              </dd>
              <dd>
                <a href="#">Ver código</a>
              </dd>
            </dl>
          </div>
          <br />
          <div>
            <dl>
              <dt>
                ¿Qué formatos de archivo de música son compatibles con la
                aplicación?
              </dt>
              <dd>
                ElectronPlayer lee y muestras archivos en formato
                &quot;.MP3&quot; que esten dentro de la carpeta
                &quot;Music&quot; o &quot;Musica&quot; dependiendo el idioma del
                sistema en el que se ejecute.
              </dd>
            </dl>
          </div>
          <br />
          <div>
            <dl>
              <dt>
                ¿La aplicación permite descargar música para escuchar sin
                conexión?
              </dt>
              <dd>
                Si, ElectronPlayer permite la descarga de musica para escucharla
                sin conexion. Las musicas descargadas se guardaran
                automaticamente en la carpeta &quot;Music&quot; o
                &quot;Musica&quot;.
              </dd>
            </dl>
          </div>
          <br />
          <div>
            <dl>
              <dt>¿Cuál es el modelo de precios de ElectronPlayer?</dt>
              <dd>
                ElectronPlayer es completamente gratuito y de uso libre. Puedes
                disfrutar de todas sus funciones sin tener que pagar ninguna
                tarifa.
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
