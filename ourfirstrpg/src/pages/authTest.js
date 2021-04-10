import { useEffect, useState } from "react";

const AuthTest = () => {
  const [files, setFiles] = useState();
  useEffect(()=> {
    fetch('/getSaveFiles', {
      method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        console.log("REDIRECTING...");
        setTimeout(() => window.location.replace('/login'), 1000);
      } 
      data.files ? setFiles(data.files) : setFiles({});
    });

  },[])
  return (
    <div></div>
  );
}

export default AuthTest;