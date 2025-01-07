import BuildCard from "@/componentes/BuildCard";


export default function NuestrasObras () {

    return (
<>
        <header style={{ justifyContent: "center", alignContent: "center" }}>
        <img
          className={`background__billboard`}
          src={"/header.jpg"}
          alt="Billboard background"
        />
        <div className="header-text-container">
          <h1 className="copersa-title-text-header">Nuestras Obras</h1>
        </div>
      </header>
        <section style={{marginTop: 150, gap: 50, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

            <h1 style={{display: 'block'}}>{`Todas nuestras ${"\n"} Obras`}</h1>

        <div style={{display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center', maxWidth: 1600, marginBottom: 100 }}>

            <BuildCard image={'/muelle-terminal-zarate1.png'}/>
            <BuildCard image={'/muelle-terminal-zarate1.png'}/>
            <BuildCard image={'/muelle-terminal-zarate1.png'}/>
            <BuildCard image={'/muelle-terminal-zarate1.png'}/>
            <BuildCard image={'/muelle-terminal-zarate1.png'}/>
            <BuildCard image={'/muelle-terminal-zarate1.png'}/>
            <BuildCard image={'/muelle-terminal-zarate1.png'}/>
            <BuildCard image={'/muelle-terminal-zarate1.png'}/>
            <BuildCard image={'/muelle-terminal-zarate1.png'}/>
            <BuildCard image={'/muelle-terminal-zarate1.png'}/>
            <BuildCard image={'/muelle-terminal-zarate1.png'}/>
            <BuildCard image={'/muelle-terminal-zarate1.png'}/>
        </div>
        </section>
        </>
    )
}