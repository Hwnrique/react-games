import { FaSpinner } from "react-icons/fa"

import classes from "./Loading.module.css"

const Loader = () => {
  return (
    <>
    <FaSpinner className={classes.loader}/>
    </>
  )
}

export default Loader