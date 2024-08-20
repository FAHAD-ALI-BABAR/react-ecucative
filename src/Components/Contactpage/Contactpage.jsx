import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});
const Contactpage = () => {
  const position = [51.505, -0.09]; // Set initial map center [latitude, longitude]
  return (
    <>
    <section className="section bg-gray">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h2 className="section-title">Contact Us</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-7 mb-4 mb-lg-0">
        <form action="/contact.html" method="POST">
          <input 
            type="text" 
            className="form-control mb-3" 
            id="name" 
            name="name" 
            placeholder="Your Name" 
            required 
          />
          <input 
            type="email" 
            className="form-control mb-3" 
            id="mail" 
            name="mail" 
            placeholder="Your Email" 
            required 
          />
          <input 
            type="text" 
            className="form-control mb-3" 
            id="subject" 
            name="subject" 
            placeholder="Subject" 
            required 
          />
          <textarea 
            name="message" 
            id="message" 
            className="form-control mb-3" 
            placeholder="Your Message" 
            required 
          />
          <button 
            type="submit" 
            value="send" 
            className="btn btn-primary"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
      <div className="col-lg-5">
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit recusandae voluptates doloremque veniam temporibus porro culpa ipsa, nisi soluta minima saepe laboriosam debitis nesciunt. Dolore, labore. Accusamus nulla sed cum aliquid exercitationem debitis error harum porro maxime quo iusto aliquam dicta modi earum fugiat, vel possimus commodi, deleniti et veniam, fuga ipsum praesentium. Odit unde optio nulla ipsum quae obcaecati! Quod esse natus quibusdam asperiores quam vel, tempore itaque architecto ducimus expedita.
        </p>
        <a href="#" className="text-color h5 d-block">+880 20 5784 3248</a>
        <a href="#" className="mb-5 text-color h5 d-block">yourmail@email.com</a>
        <p>71 Shelton Street<br />London WC2H 9JQ England</p>
      </div>
    </div>
  </div>
</section>
<MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>

    </>
  )
}

export default Contactpage