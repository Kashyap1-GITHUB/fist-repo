import React from "react";

function Read(props) {
  console.log(props);

  const user = props.user;
  // const setuser = props.setuser

  let pro = user.map((Profile, index) => {
    console.log(Profile, index);
    return (
      <li key={index}>
        <span>
          Name : {Profile.Name}
          ,Age :{Profile.age}
        </span>
      </li>
    );
  });

  return (
    <div>
      <ol>{pro}</ol>
    </div>
  );
}
export default Read;
