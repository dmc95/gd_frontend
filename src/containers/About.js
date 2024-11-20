import React from 'react'
import Schema from "../containers/assets/images/architecture_projet.png"

const About = () => {
  return (
    <div className='my-[300px]'>
      <div className='lg:flex'>
        <div>
          <h1 className='text-center text-xl lg:text-4xl font-semibold my-10'>Mon projet</h1>
        <div className='backdrop-blur-sm bg-white/10 border rounded-lg w-11/12 mx-auto m-2 p-2 text-justify'>
          <p className='text-center text-xl my-16'>Dans le cadre de la validation du titre professionnel Concepteur
            développeur d’application, j’ai décidé de réaliser le site GD Investment. Ce projet
            est une application web développée à l'aide de la bibliothèque React pour le
            frontend et Node.js avec Express pour le backend.
            L'objectif principal de l'application est de permettre aux utilisateurs de
            suivre et d'analyser les données financières, notamment les performances
            boursières d'indices ETF (Exchange Traded Funds) et de valeurs spécifiques.</p>
            <img className='my-10 mx-auto ' src={Schema} alt='schema_architecture'/>
            <p className='my-16 text-xl text-center'>AWS a été utilisé pour créer une fonction Lambda écrite en python,
            un service de calcul sans serveur, qui interagit avec RapidAPI pour récupérer des
            données externes. Ces données sont ensuite transformées et stockées dans une
            RDS (Relational Database Service), une solution de base de données relationnelle
            entièrement gérée par AWS. Cette approche permet d'automatiser le processus
            de récupération, de transformation et de stockage des données de manière
            efficace et évolutive.</p>
        </div>
        </div>
        {/* <div>

        <h1 className='max-lg:mt-10 '>À propos de moi</h1>
        <div className='max-lg:mb-10 backdrop-blur-sm bg-white/10 border rounded-lg w-11/12 mx-auto m-2 p-2 text-justify'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet velit sed felis sollicitudin, et mattis ligula egestas. Aenean varius commodo leo eu ultrices. Cras fringilla neque vel justo ornare, nec gravida ex cursus. Curabitur hendrerit tempor odio vitae commodo. Ut efficitur lacus libero, vitae pellentesque sem eleifend ut. Praesent id iaculis nulla. Cras aliquam commodo risus, non ultrices lectus ultricies non. Cras porttitor quam sed velit vestibulum, sit amet sollicitudin justo volutpat. Fusce aliquet felis est, ut vehicula massa tristique non. Donec blandit cursus lorem, vel faucibus lorem. Ut porta, augue a sagittis hendrerit, leo justo tincidunt arcu, ut varius massa magna a tellus.</p>
        </div>
        </div> */}
      </div>
    </div>
  )
}

export default About