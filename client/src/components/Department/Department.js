import React, { useState, useEffect } from "react";
import View from "./View";
import Search from "../Search";
import Add from "../Department/Add";
import axios from "axios";

const Department = () => {
  const [data , setData ] = useState()
  const [sort , setSort ] = useState()
  const [none , setNone ] = useState(0)

  const onOptionChange = event =>
  {
    if(event.target.name !== 'sort' && event.target.value !== 'Select')
    {
      console.log(event.target.name)
      console.log(event.target.value)
 
      setSort({cat : event.target.name, name : event.target.value})
      axios.get('api/departments')
    .then(({data}) => setData(data))
    .catch(err => console.error(err))
    }

    if(event.target.value === 'None')
    {
      setNone(none + 1)
      setSort()
    }

  }

  useEffect(()=>
  {
    axios.get('api/departments')
    .then(({data}) => setData(data))
    .catch(err => console.error(err))

  },[none])


  return (
    <div>
      <a
        className="back"
        onClick={() => { props.handleMenu("Menu");
        }}>
        Back
      </a>
      <div className="department">
        <Search onOptionChange={onOptionChange} />
        <View data={data} sort={sort} />
      </div>
    </div>
  );
}

export default Department