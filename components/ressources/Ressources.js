import React from 'react';


const Ressources = ({ ressources }) => (
  <div className="ressources_block">
    <p className="text-ressources">
          Le numérique est aujourd’hui omniprésent dans nos vies,
      {' '}
          il impact fortement nos modes de vies, nos
      <br />
          sociétés, nos politiques, nos relations sociales professionnelles ou privées.
      {' '}
          Pour autant, il ne profite pas à
      <br />
          tous, nombreux sont celles et ceux qui le comprennent mal ou bien pire, en sont exclus !
    </p>
    <div className="ressources-container">
      {ressources.map((y) => {
        const flag = y.theme.substring(0, 1);
        return (
          <div className="ressources" key={y.id}>
              <div className="free-container">
                <div className="rectangle">
                <p className="ressources-is_free">{flag}</p>
                </div>
              </div>          
              <p className="ressources-theme-container">{y.theme}</p>
              <h1 className="ressources-title-container">{y.title}</h1>
              <div className="description-container">
                <p className="ressources-description-container">{y.description}</p>
                <div className="ressources-lien-container"><a className="ressources_lien" href={y.lien}>Voir l’étude à ce sujet></a></div>            
              </div>
          </div>
        );
      })}
    </div>
    <style jsx>
      {`
        .text-ressources{
          color: #1F2040;
          font-size: 2rem;
          margin: auto;
          padding: 5rem;
          text-align: center;
        }

        .ressources-container {
          display: flex;
          flex-wrap: wrap;
          border-radius: 10px;
        }

        .ressources{
          background-color: #1F2040;
          color: #fff;
          border-radius: 15px;
          margin: 1%;
          width: 34rem;
          height: 33rem;
          min-width: 26rem;
        }

        p.flag {
          margin: 2% 2% 2% 10%;
        }

        .rectangle {
          font-weight: bold;
          margin-left: 2rem;
          padding: 2.5rem 0 0.5rem 0;
          float: left;
          color: #1F2040;
          background-color: #fff;
          position: absolute;
          width: 27px;
          height: 4.5rem;
        }
          
        .rectangle:after {
          content: "";
          position: relative;
          top: 1.6rem;
          left: 13px;
          border-top: 11px solid #fff;
          border-left: 14px solid transparent;
        }
        

        p.ressources-is_free {
          color: #000;
          margin-top: -1rem;
          margin-left: 1rem;
        }
          
        .rectangle:before {
          content: "";
          position: relative;
          top: 3rem;
          border-top: 11px solid #fff;
          border-right: 14px solid transparent;
        }

        p.icon-ressources {
          margin: 3% -7% 0 30px;
        }

        .ressources-title-container {
          margin-bottom: 2rem;
          margin-top: 6rem;
          margin-left: 2rem;
          display: block;
          font-size: 3rem;
        }

        p.ressources-theme-container{
          display: block;
          margin-left: 7rem;
          margin-top: 1rem;
        }
        
        p.ressources-description-container {
          width: 52vw;
          height: 5vh;
          margin-left: 2rem;
          font-size: 1.6rem;
          text-align: left;
        }

        .description-container {
          width: 38vw;
          font-size: 12px;
        }

        .ressources-lien-container {
          margin-left: 7rem;
          margin-top: 4rem;
          margin-right: -11rem;
        }

        a.ressources_lien {
          color: #fff;
        }

        @media screen and (min-width: 768px){
          .ressources-container{
          }
          .ressources-lien-container{
            margin-right: -5rem;
          }
        }

        @media screen and (min-width: 1024px){
          .ressources{
            width: 34rem;
            height: 36rem;
          }
          p.ressources-theme-container.jsx-367270696 {
            font-size: 2rem;
          }
          .ressources-title-container.jsx-367270696 {
            font-size: 4rem;
          }
          .ressources-lien-container{
            margin-right: 4rem;
            margin-top: 2rem;
          }
          .ressources-container{
          
          }
        }
     `}
    </style>

  </div>
);


export default Ressources;
