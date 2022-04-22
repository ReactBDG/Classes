
// const a = {
//     b: true,
//     c: 'String',
//     d: 'Number',
// };


// const a = [1, 2, 3, 4];


// const [arajin, ...takyInchMnacela] = a;
//     console.log(arajin , ...takyInchMnacela);


const Character = function ( props ) {
    const {characterName, houseName, characterImageFull} = props;
  return (
    <div className="character">
      <img alt={characterName} src={characterImageFull} />
      <span className="name">{characterName}</span>
      <span>{houseName}</span>
    </div>
  );
};

export { Character };
