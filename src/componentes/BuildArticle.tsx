interface BuildArticleProps {
  title?: string;
  description?: string;
  images?: string[];
}

export default function BuildArticle({
  title,
  description,
  images,
}: BuildArticleProps) {
  return (
    <article className="build-article">
      <h2 style={{fontSize: 32}}>{title ? title : "Muelle terminal Zárate"}</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          {images?.map((imageUrl) => {
            return (
              <img
              key={`${imageUrl}`}
            src={`${imageUrl}`}
            alt="Billboard background"
            height={600}
          />
            )
          })}

          
        </div>
      </div>
      <div>
        <p>
          {description
            ? description
            : "Todas las obras que le hemos realizado al Comitente fueron llave en mano. La obra básica consistió en la construcción de un muelle de 200m, más adelante se ejecutó su ampliación en 45m para poder operar con buques Full Container (este trabajo se realizó sin afectar el funcionamiento de la obra básica) y finalmente se ejecutó un muelle de atraque de 30m. Las obras se completaron con la construcción de las torres de amarre, dolfines, torres de iluminación, se colocaron las defensas elásticas, bolardos, escaleras y se realizaron todas las instalaciones necesarias para su operación. Finalmente se ejecutó la losa de HºAº, la carpeta de rodamiento y la colocación de rieles para circulación de grúas Panamax."}
        </p>
      </div>
    </article>
  );
}
