import React from "react";

interface CatInterface {
  name: string;
  word: string;
  path: string;
}

export function Cat({ name, word, path }: CatInterface) {
  return (
    <div>
      <h2>{name}</h2>
      <>
        <img src={path} alt={name + "" + word} width="600" height="300" />
      </>
    </div>
  );
}
