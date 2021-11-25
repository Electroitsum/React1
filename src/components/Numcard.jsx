function Numcard(props) {
  return (
    <div>
      <div className="carcon row gx-0">
        <span className="cardd gx-0 m-4 offset-2 col-8 col-md-3">
          <span className="num">01</span>
          <h2 className="cardh2">Find</h2>
          <p className="cardp">
            We will find clients in your area looking for your business services
            through our targeted marketing systems.
          </p>
        </span>
        <span className="cardd gx-0 m-4 offset-2 col-8 col-md-3">
          <span className="num">02</span>
          <h2 className="cardh2">Connect</h2>
          <p className="cardp">
            We will connect them real time to your business through multiple
            means.
          </p>
        </span>
        <span className="cardd gx-0 m-4 offset-2 col-8 col-md-3">
          <span className="num">03</span>
          <h2 className="cardh2">Grow</h2>
          <p className="cardp">
            We will grow your business by supporting your ever expanding
            customer base and helping you manage your business growth.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Numcard;
