import Lottie from "lottie-react";
import dashAnim from "../../assets/Animation - 1721253197193.json";


const AdminWelcome = () => {
  return (
    <>
      <div>
        <Lottie
          className=" w-[40vw] 
       flex justify-center items-center mx-auto"
          animationData={dashAnim}></Lottie>
        <h1 className=" text-5xl font-extrabold uppercase text-center">
          WELCOME TO ADMIN PANAL
        </h1>
        <p className=" text-center text-gray-500">
          Manage users effortlessly with full control over accounts and
          permissions.
        </p>
      </div>
    </>
  );
};

export default AdminWelcome;
