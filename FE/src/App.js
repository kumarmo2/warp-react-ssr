import React from "react";
const Dummy = (props) => {
  const name = props?.user?.name;
  const list = [
    {
      title: "first title",
    },
    {
      title: "second title",
    },
    {
      title: "third title",
    },
  ];

  return (
    <div>
      <h1>This is heading</h1>
      <h2>Name: {name}</h2>
      <ul>
        {list.map((obj, index) => {
          return (
            <li key={index}>
              <Card title={obj.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Card = ({ title }) => {
  return <div>title: {title}</div>;
};

export default Dummy;
