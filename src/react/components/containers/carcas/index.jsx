"use client"

import Header from "./header";
import useGlobal from "@/store";
import s from "./carcas.module.scss";
import { useEffect, useLayoutEffect } from "react";
import auth from "@/service/auth.js";

const Carcas = ({

  children

}) => {



  return (

    <div className = {`${ s.carcas } relative`}>

      <Header/>

      { children }

    </div>

  )

}

export default Carcas;