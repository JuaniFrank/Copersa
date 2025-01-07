import {APIProvider, Map} from '@vis.gl/react-google-maps';


export default function Contacto() {
  return (
    <>
      <header style={{ justifyContent: "center", alignContent: "center" }}>
        <img
          className={`background__billboard-contacto`}
          src={"/header.jpg"}
          alt="Billboard background"
        />
        <div className="header-text-container-contacto">
          <h1 className="copersa-title-text-header">Contactanos</h1>
          <p className="copersa-description-text-header">
            COPERSA SA.
          </p>
        </div>
      </header>
      <section style={{ marginTop: 150 }}>
        <h1>Contacto</h1>
      </section>
    </>
  );
}
