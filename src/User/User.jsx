import React from "react";
import "./User.css";
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import data from "./userData";
import { useState } from "react";

const User = () => {
  const [search, setSearch] = useState("");
  const box = document.getElementsByClassName("box");
  const comps = document.getElementsByClassName('comps')
  const bar = document.getElementsByClassName('bar')
  const xmark = document.getElementsByClassName('xmark')
  console.log(comps,bar,xmark)
  function addBtn() {
    alert("Cat Added");
  }
  function rejBtn() {
    box[0].style.display = "none";
  }
  function show(){
    bar[0].style.display = 'none'
    xmark[0].style.display = 'block'
    comps[0].style.display = 'block'
  }
  function hide(){
    bar[0].style.display = 'block'
    xmark[0].style.display = 'none'
    comps[0].style.display = 'none'
  }
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <h1>Cats</h1>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search Cats"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="search-icon">
              <FaSearch />
            </div>
          </div>
          <div className="icons">
            <div className="bar" onClick={show}><FaBars /></div>
            <div className="xmark" onClick={hide}><FaXmark /></div>
          </div>
          <div className="comps">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">User</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div className="body">
          {data
            .filter((usr) => {
              return search.toLowerCase() === ""
                ? usr
                : usr.name.toLowerCase().includes(search);
            })
            .map((user) => {
              return (
                <div className="box">
                  <div className="img">
                    <img src={user.image} alt="" />
                  </div>
                  <div className="info">
                    <div className="name">Name : {user.name}</div>
                    <div className="name">Age : {user.age}</div>
                    <div className="btns">
                      <div className="btn1">
                        <button className="add" onClick={addBtn}>
                          Add
                        </button>
                      </div>
                      <div className="btn2">
                        <button className="rej" onClick={rejBtn}>
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default User;
