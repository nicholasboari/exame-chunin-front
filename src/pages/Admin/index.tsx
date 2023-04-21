import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../../util/requests";
import { Routes, useNavigate } from "react-router-dom";

export function Admin() {
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const params: AxiosRequestConfig = {
  //     url: "/vehicles/admin",
  //     withCredentials: true,
  //   };

  //   requestBackend(params)
  //     .then((response) => {
  //       setHasError(false);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       setHasError(true);
  //       navigate("/");
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div>
      <div>
        <Navbar />
        <h1>aaaaaaaaa</h1>
      </div>
    </div>
  );
}
