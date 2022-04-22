import { Character } from "./Charecter";
import data from "./data";

export const Container = () => {
  return (
    <div className="container">
      {data.map((el) => (
        <>
          {el.royal ? (
            <Character
              characterName={el.characterName}
              houseName={el.houseName}
              characterImageFull={el.characterImageFull}
            />
          ) : <span>Bastard</span>}
        </>
      ))}
    </div>
  );
};
