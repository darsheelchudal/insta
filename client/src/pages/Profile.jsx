import React from "react";
import { useState, useEffect, Navigate } from "react";
import instagramLogo from "../assets/images/Logo-Instagram.png";
import aditi from "../assets/images/aditi.jpg";
import { Link } from "react-router-dom";

function Profile() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setIsAuthenticated(false);
    }
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  });
  return (
    <>
      <div className="flex">
        <div className="sidebar border-2 p-10 h-[950px] sticky top-0">
          <div className="logo">
            <img src={instagramLogo} alt="" srcset="" className="w-[120px]" />
          </div>
          <div className="flex flex-col gap-y-10 my-10">
            <Link to="/home">
              <div className="item-1">Home</div>
            </Link>
            <div className="item-1">Search</div>

            <div className="item-1">Explore</div>

            <div className="item-1">Reels</div>

            <div className="item-1">Messages</div>

            <div className="item-1">Notifications</div>
            <div className="item-1">Create</div>
            <Link to="/profile">
              <div className="item-1">Profile</div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="profile border-2 px-40 py-10 w-[960px]">
            <div>
              <div className="upper flex gap-x-6    ">
                <div className="photo">
                  <img src={aditi} className="h-40 w-40 rounded-full" />
                </div>
                <div className="my-4 flex gap-x-6 justify-center">
                  <div className="username">
                    <h1 className="text-2xl">username</h1>
                  </div>
                  <div className="editprofile">
                    <h1 className="text-2xl">edit profile</h1>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 my-4 font-semibold">
                <div>
                  <h1>12 posts</h1>
                </div>
                <div>
                  <h1>259 followers</h1>
                </div>
                <div>
                  <h1>190 following</h1>
                </div>
              </div>
              <div className="">
                <h1>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam explicabo accusamus consectetur natus ab quae
                  reiciendis nobis illum culpa sint ad voluptates voluptas
                  inventore itaque tempore, maxime, quis magni fugiat?
                </h1>
              </div>
            </div>
            <div className="highlights space-x-10 flex">
              <div className="w-[100px] my-10">
                <img
                  src={aditi}
                  className="h-[100px] w-[100px] rounded-full"
                  alt=""
                />
                <p className="text-center my-2">Highlights</p>
              </div>
              <div className="w-[100px] my-10">
                <img
                  src={aditi}
                  className="h-[100px] w-[100px] rounded-full"
                  alt=""
                />
                <p className="text-center my-2">Highlights</p>
              </div>
              <div className="w-[100px] my-10">
                <img
                  src={aditi}
                  className="h-[100px] w-[100px] rounded-full"
                  alt=""
                />
                <p className="text-center my-2">Highlights</p>
              </div>
            </div>
            <hr />
            <div className="header">
              <h1 className="text-center font-semibold">Posts</h1>
            </div>
            <div className="main">
              <div className="card flex gap-x-3 flex-wrap my-7">
                <div className="img">
                  <img src={aditi} className="w-[200px]" alt="" />
                </div>
                <div className="img">
                  <img src={aditi} className="w-[200px]" alt="" />
                </div>
                <div className="img">
                  <img src={aditi} className="w-[200px]" alt="" />
                </div>

                <div className="img">
                  <img src={aditi} className="w-[200px]" alt="" />
                </div>
                <div className="img">
                  <img src={aditi} className="w-[200px]" alt="" />
                </div>
                <div className="img">
                  <img src={aditi} className="w-[200px]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
