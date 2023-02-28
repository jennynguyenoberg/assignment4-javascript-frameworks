import flash from './assets/hp-flash.svg';

export default ({ image, name, house, actor, species, gender }) => {

  return <div className="main-container">
    <div className="left-container">
      <a className="asset_img"><img src={image} alt="item image" /></a>
      <div className="bottom-left-left-container">
        <p>Code by Jenny Nguyen Öberg.</p>
        <p>Design by <a href="http://www.nrly.co/">Nathan Riley</a>.</p>
      </div>
    </div>

    <div className="right-container">
      <div className="bottom-left">&#169;2023</div>
      <div className="top-left">surreal<br />visual<br />collection</div>
      <div className="top-right">lockdown<br />twenty/20</div>
      <div class="icon">
        <img src={flash} />
      </div>
      <div className="row">
        <div className="subhead">(Isolation)</div>
        <div className="h1">{name}</div>
        <div className="column1">
          <p className="title">summary</p>
          <p className="text">a conceptual image series reflecting on the simple experiences that we might miss during the period of lockdown.</p>
        </div>
        <div className="column2">
          <p className="title">house</p>
          <p className="text">{house}</p>
        </div>
        <div className="column3">
          <p className="title">actor</p>
          <p className="text">{actor}</p>
        </div>
        <div className="column4">
          <p className="title">Species</p>
          <p className="text">{species}</p>
        </div>
        <div className="column5">
          <p className="title">gender</p>
          <p className="text">{gender}</p>
        </div>
      </div>
    </div>
  </div>
}

