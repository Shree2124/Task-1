import React, { useState } from "react";
import "./Home.css";
import { SubNavbar, PostComponent, Followers } from "../index.js";

const Home = () => {
  const [join, setJoin] = useState(true)
  return (
    <>
      <div className="container-fluid p-0 position-relative custom-bg-container background">
        <div className="position-absolute overly"></div>
        <div class="container d-flex flex-column h-100 background-text-home">
          <div class="d-flex d-lg-none justify-content-between mt-3">
            <button class="btn">
              <img
                style={{
                  position: "relative",
                  zIndex: "30",
                }}
                src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%207H3.83L9.42%201.41L8%200L0%208L8%2016L9.41%2014.59L3.83%209H16V7Z'%20fill='white'/%3e%3c/svg%3e"
                alt="back"
              />
            </button>
            <button onClick={()=>{setJoin((prev)=>!prev)}} class="btn join-group" style={{ zIndex: "30" }}>
              { join ? ("Leave Group") : ("Join Group")}
            </button>
          </div>
          <div
            style={{ zIndex: "30" }}
            className="margin-right position-relative"
          >
            <h1 class="text-white">Computer Engineering</h1>
            <p class="text-white mb-5">
              142,765 Computer Engineers follow this
            </p>
          </div>
        </div>
      </div>
        <SubNavbar />
        <hr class="mx-auto mt-0" style={{maxWidth: "1040px"}}></hr>
      <div className="mx-auto d-flex gap-5 justify-content-between pb-5" style={{
        maxWidth: "1040px"
      }}>
        <PostComponent/>
        <Followers/>
      </div>
    </>
  );
};

export default Home;
