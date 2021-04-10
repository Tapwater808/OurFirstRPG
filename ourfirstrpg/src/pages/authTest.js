import { useEffect, useState } from "react";

const Engine = () => {
  const [files, setFiles] = useState();
  useEffect(()=> {
    fetch('/getSaveFiles', {
      method: 'POST'
    }).then(response => {
      if (response.error) {
        console.log("REDIRECTING...");
        setTimeout(() => window.location.replace(__dirname + '/login'), 1000);
      } 
      response.files ? setFiles(response.files) : setFiles({});
    });

  },[])
  return (
    <div></div>
  );
}

export default Engine;