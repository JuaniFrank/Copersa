interface BuildArticleProps {
    title?: String;
    description?: String;
    image?: String;
  }
  
  export default function BuildCard({
    title,
    description,
    image,
  }: BuildArticleProps) {
    return (
      <article className="build-card" style={{display: 'flex', flexDirection: 'column', gap: 20, padding: 20}}>
        <div style={{ display: "flex", flexDirection: "row"}}>
            <img
              // className={`background__billboard`}
              src={`${image}`}
              alt="Billboard background"
              style={{ height: 300, width: '100%', objectFit: 'cover' }}
              />
        </div>
        <h2 style={{fontSize: '1rem'}}>{title ? title : "Muelle terminal Zárate"}</h2>
      </article>
    );
  }
  