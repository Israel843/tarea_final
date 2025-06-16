import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const peliculas = [
  {
    titulo: 'CHACO',
    resumen: 'La película "Cementerio de Elefantes" trata sobre Juvenal, un hombre de 33 años que es alcohólico desde los 14 y decide pasar sus últimos días en un lugar conocido como el "Cementerio de los Elefantes" en La Paz, Bolivia, un lugar frecuentado por alcohólicos. La película explora la vida de Juvenal, sus recuerdos de la infancia y su descenso a la adicción, así como su relación con otros personajes marginados que también frecuentan el cementerio. ',
    imagen: 'https://www.bfdistribution.cl/wp-content/uploads/2023/06/Afiche-web_Chaco.jpg'
  },
  {
    titulo: 'Chuquiago',
    resumen: 'La vida personal del heroico piloto de rescate Raymond Gaines no va muy bien, con su matrimonio a punto de deshacerse y su hija yéndose a la universidad. En medio de esa situación, el sismólogo Lawrence Hayes descubre una peligrosa y desconocida falla, desencadenando un terremoto de magnitud 9 en California. Ante tal catástrofe, el piloto y su exesposa Emma viajan juntos para salvar a su hija, Blake.',
    imagen: 'https://boliviateca.com/wp-content/uploads/2024/09/chuquiago.webp'
  },
  {
    titulo: 'Muralla',
    resumen: 'La película "Muralla" narra la historia de Coco "Muralla" Rivera, un exfutbolista que en su juventud fue un héroe al atajar un penal decisivo. En el presente, es un conductor de minibús alcohólico en La Paz, atormentado por la enfermedad de su hijo y la necesidad de dinero para su tratamiento. Desesperado, comete un acto terrible: vende a una niña a una red de trata de personas. Después de la muerte de su hijo y atormentado por el fantasma de la niña, Muralla intenta redimirse recuperándola, incluso si eso significa su propia perdición. ',
    imagen: 'https://frombolivia.com/wp-content/uploads/2018/10/Muralla_2018.jpg'
  },
  {
    titulo: 'Juana Azurduy',
    resumen: 'La película "Juana Azurduy, Guerrillera de la Patria Grande" narra la historia de Juana Azurduy, una heroína de la independencia latinoamericana, que luchó contra el dominio español en el Alto Perú (actual Bolivia). La película muestra a Juana en su vejez, recibiendo en su humilde hogar en Chuquisaca a los libertadores Simón Bolívar y Antonio José de Sucre, quienes escuchan de sus labios su épica trayectoria de 16 años de combate y las historias de otros guerrilleros.',
    imagen: 'https://www.opinion.com.bo/media/opinion/images/2017/01/01/2016S10724.jpg'
  },
  {
    titulo: 'Cementerio de Elefantes  ',
    resumen: 'La película "Cementerio de Elefantes" trata sobre Juvenal, un hombre de 33 años que es alcohólico desde los 14 y decide pasar sus últimos días en un lugar conocido como el "Cementerio de los Elefantes" en La Paz, Bolivia, un lugar frecuentado por alcohólicos. La película explora la vida de Juvenal, sus recuerdos de la infancia y su descenso a la adicción, así como su relación con otros personajes marginados que también frecuentan el cementerio.  ',
    imagen: 'https://frombolivia.com/wp-content/uploads/2012/09/Ceneterio-de-los-elefefantes-2008.jpg'
  },
];

const Acordeon = () => {
  const [modal, setModal] = useState(false);
  const [peliculaActual, setPeliculaActual] = useState(null);

  const abrirModal = (pelicula) => {
    setPeliculaActual(pelicula);
    setModal(true);
  };

  const cerrarModal = () => {
    setModal(false);
    setPeliculaActual(null);
  };

  return (
    <div className="mt-5" id="peliculas">
      <h2>Películas</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
        {peliculas.map((p, index) => (
          <Button
            key={index}
            color="secondary"
            className="m-2"
            onClick={() => abrirModal(p)}
          >
            {p.titulo}
          </Button>
        ))}
      </div>

      <Modal isOpen={modal} toggle={cerrarModal}>
        <ModalHeader toggle={cerrarModal}>
          {peliculaActual?.titulo}
        </ModalHeader>
        <ModalBody>
          <img
            src={peliculaActual?.imagen}
            alt={peliculaActual?.titulo}
            style={{ width: '100%', borderRadius: '10px', marginBottom: '10px' }}
          />
          <p>{peliculaActual?.resumen}</p>
          <Button color="secondary" onClick={cerrarModal}>Cerrar</Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Acordeon;