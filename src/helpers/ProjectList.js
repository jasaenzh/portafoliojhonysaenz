import Renten1 from '..//assets/homeRentten1.png'
import Videogames1 from '..//assets/homeVideoGames1.png'

export const ProjecList = [

    {
        name: "Rentten",
        image: Renten1,
        description: "Esta aplicación se ha desarrollado en equipo con otras 5 personas utilizando SCRUM como nuestra metodología ágil. Es una aplicación de página única (SPA) que permite a los usuarios ver alojamientos en todo el mundo, filtrarlos según sus necesidades y alquilarlos. Cuenta con un sistema de inicio de sesión mediante Auth0 y una pasarela de pago de MercadoPago. Además, cuenta con un panel de administración que permite eliminar y editar casas y usuarios, así como un sistema de eliminación lógica que permite 'banear' a los usuarios sin eliminarlos por completo de la base de datos. En el front-end, se ha utilizado Angular junto con NgRx para administrar los estados globales, Bootstrap, CSS y Material para diseñar. También tiene un modo oscuro. En el back-end, se ha utilizado Node.js con Express para el enrutamiento y Sequelize como ORM (mapeo relacional de objetos) para interactuar con la base de datos en PostgreSQL. También se han utilizado bibliotecas como NodeMailer para enviar notificaciones a los usuarios y Cloudinary para cargar imágenes. En general, la aplicación proporciona una plataforma completa y fácil de usar para buscar, filtrar y alquilar alojamientos en todo el mundo.",
        skills: "Angular, Bootstrap, CSS, Express, HTML, NgRx, PostgreSQL, Sequelize JavaScripts, TypeScripts",
        linkGitHubBackEnd: "https://github.com/raulereno/rent-ten",
        linkGitFrontEnd: "https://github.com/raulereno/rent-ten",
        linkDeploy: "https://rent-ten.vercel.app/home"
    }, {
        name: "Videogames",
        image: Videogames1,
        description: "SPA para obtener detalle de los video juegos. Te permite Filtrar por Base de Datos de la API o Base de Datos creada, filtrar por Género, Ordenar A - Z (viceversa) y Por Clasificación. Tiene un botón para crear nuestro propio video juego a través de un formulario",
        skills: "React, Redux,NodeJs, Express, HTML,Sequilize, PostgreSQL, CSS y JavaScript",
        linkGitHubBackEnd: "https://github.com/jasaenzh/videogames-render",
        linkGitFrontEnd: "https://github.com/jasaenzh/videogames-render",
        linkDeploy: "https://videogames-front-swart.vercel.app/"
    },
]