import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div>
      <div className="hero-div">
        <div className="right">
          <div className="text1">
            <img
              src="https://i.postimg.cc/vZ5bpD1j/orange-Dot.png"
              alt=""
              className="orange"
              style={{ width: "25px", height: "25px", marginTop: "4px" }}
            />
            <p>
              20 years delivering from Kabul · Afghanistan's enterprise
              technology partner
            </p>
          </div>

          <h1>
            Enterprise Odoo, custom software, and AI, <br />
            <span>engineered in Afghanistan.</span>
          </h1>
          <p className="text2">
            Afghanistan-based since 2005. We built the 500,000-employee Odoo HR
            and payroll system for the national government, and Jobs.af, the
            country's largest job-hunting platform. Senior teams in Kabul
            delivering for clients across Afghanistan, the GCC, India, and the
            US.
          </p>

          <div className="btns-div">
            <button className="call-btn">Book a 30-min discovery call↗</button>
            <button className="service-btn">Explore services</button>
          </div>

          <div className="info">
            <div className="card1">
              <h2>
                500K <span>+</span>
              </h2>
              <p>Employees · national-government Odoo HR rollou</p>
            </div>
            <div className="card1">
              <h2>
                20 <span>yrs</span>
              </h2>
              <p>Delivering enterprise software from Kabul</p>
            </div>
            <div className="card1">
              <h2>jobs.af</h2>
              <p>Afghanistan's largest job platform, built by NETLINKS</p>
            </div>
          </div>
        </div>
        <img
          src="https://netlinks.af/illustrations/home-hero-1280.webp"
          alt=""
        />
      </div>
    </div>
  );
}
