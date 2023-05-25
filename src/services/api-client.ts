import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params:{
    key: "8c4d9b515620427bb5df593c9cd76167"
  }
})