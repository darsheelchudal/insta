import react from "react";

const Home = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="sidebar">
          <div className="logo">Insta</div>
          <div className="item-1">Search</div>
          <div className="item-1">Explore</div>

          <div className="item-1">Search</div>

          <div className="item-1">Search</div>

          <div className="item-1">Search</div>

          <div className="item-1">Search</div>
        </div>
        <div className="main-content ">
          <div className="stories flex space-x-2">
            <div className="golo">GOLO</div>
            <div className="golo">GOLO</div>

            <div className="golo">GOLO</div>

            <div className="golo">GOLO</div>

            <div className="golo">GOLO</div>
          </div>
          <div className="posts flex justify-center flex-col">
            <div className="">POST</div>
            <div className="">POST</div>

            <div className="">POST</div>
          </div>
        </div>
        <div className="profcard flex space-x-2">
          <div className="img">img</div>
          <div className="name">name</div>
        </div>
      </div>
    </>
  );
};

export default Home;
