import React from 'react';
import Slider from './components/Slider';
import logo from './assets/img/logo.png';
import firstPhoto from './assets/img/PHOTO-2021-03-29-17-07-37_1.png';
import secondPhoto from './assets/img/PHOTO-2021-03-29-17-07-37.png';
import thirdPhoto from './assets/img/PHOTO-2021-03-29-17-07-42.png';
import authorPhoto from './assets/img/PHOTO-2021-02-01-15-20-45_sm 1.png';
import inventoryImage from './assets/img/PHOTO-2021-02-01-15-39-38 1.png';

import CourseCard from './components/CourseCard';
import courseOptionsArray from './utils/courseOptionsArray.jsx';

function App() {
  // const [width, setWidth] = React.useState(null);
  const width = window.innerWidth;
  // React.useEffect(() => {
  //   setWidth(window.innerWidth)
  //   console.log(width)
  // }, [window.innerWidth])
  return (
    <div className="App">
      <header className="header">
        <div className="wrapper header__wrapper">
          <img className="logo" src={logo} alt="logo" />
          <nav className="navigation">
            <ul className="navigation__list">
              <li className="navigation__item">Home</li>
              <li className="navigation__item">Why?</li>
              <li className="navigation__item">Price</li>
              <li className="navigation__item">About cource</li>
              <li className="navigation__item">Reviews</li>
            </ul>
          </nav>
          <span className="hamburger">
            <span className="hamburger__line"></span>
          </span>
        </div>
      </header>
      <section className="bikini">
        <div className="wrapper bikini__wrapper">
          <div className="bikini__content">
            <h1 className="bikini__title">Bikini Body</h1>
            {width < 600 && (
              <div className="bikini__photos">
                <img className="first-photo" src={firstPhoto} alt="" />
                <div className="bikini__mini-photos">
                  <img src={secondPhoto} alt="" />
                  <img src={thirdPhoto} alt="" />
                </div>
              </div>
            )}
            <h2 className="bikini__authhor-title">Alena Valy</h2>
            <button className="button button__attantion">Su di me</button>
            <div className="bikini__text-block">
              <p className="bikini__text">
                Il Programma di allenamento con dei giorni
                <ul className="bikini__list">
                  <li className="bikini__item">•Fitness</li>
                  <li className="bikini__item">•Cardio</li>
                  <li className="bikini__item">•Yoga</li>
                </ul>
              </p>

              <p className="bikini__text">
                Ci vorrebbero soli 20 min al giorno,
                <br />5 giorni a settimana.
              </p>
            </div>
            <button className="button button__warning">TEST DRIVE</button>
          </div>
          {width >= 600 && (
            <div className="bikini__photos">
              <img className="first-photo" src={firstPhoto} alt="" />
              <div className="bikini__mini-photos">
                <img src={secondPhoto} alt="" />
                <img src={thirdPhoto} alt="" />
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="courses">
        <div className="wrapper courses__wrapper">
          <div className="courses__decription-block">
            <p className="courses__text text_light">
              Scopri come restare in forma ad ogni eta, come stare in SUPER forma senza sacrifici{' '}
              <br />
              inutili, trovare la motivazione quotivazione quotidiana per andare sempre avanti e non
              mollare mai!
            </p>
            <h3 className="courses__title">Scegliere</h3>
          </div>
          <div className="courses__price-block">
            {courseOptionsArray.map((el, index) => (
              <CourseCard onClickAccept={() => console.log(el)} data={el} key={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="courses-description">
        <div className="wrapper courses-description__wrapper">
          <h3 className="courses-description__title">
            BENVENUTE NEL MIO PROGRAMMA <br />
            BIKINI BODY & MIND.
          </h3>
          <div className="courses-description__content-block">
            <p className="courses-description__content text_light">
              Il mio corso è adatto ad ogni stile di vita sopratutto per chi è veramente impegnata.
              Perché ti servono soli 20 min al giorno, 5 giorni a settimana da dedicare a te stessa,
              il tuo fantastico corpo e la mente.
            </p>
            <p className="courses-description__content text_light">
              Potresti usare questo programma in palestra, a casa oppure portare con te in vacanza
              ‘Bikini Mind & Body’ è un programma di 4 settimane però potresti allungare per 8 o più
              settimane. Potresti prendere i giorni o singoli allenamenti del programma che ti sn
              piaciuti di più e abbinarli con la tua futura training routine.
            </p>
            <p className="courses-description__content text_light">
              Ogni settimana conclude 3 allenamenti base: <br />⁃ giorno gambe <br />⁃ parte sopra{' '}
              <br />⁃ total body
            </p>
            <p className="courses-description__content text_light">
              Fa lavorare tutti i muscoli del tuo corpo. Sono mischiati con i giorni di Yoga Fitness
              Flow che migliorano la tua forza, equilibrio, stabilità, resistenza e il tono
              muscolare. Ogni efficace programma del allenamento dovrebbe includere attività
              aerobica.
            </p>
            <p className="courses-description__content text_light">
              Ho messo due giorni di HIIT per diversificare la tua cardio routine bruciando tante
              calorie in poco tempo. Quindi come potresti vedere il mio corso è “multitask”. Lo
              creato per soddisfare tutti i tuoi obbiettivi e richieste speciali. Il mio Programma è
              per chi sta appena iniziando il percorso verso benessere, è per chi si sta già
              allenando da tempo ma vorrebbe andare avanti e portare la sua routine al livello più
              alto, per chi con facilità perde motivazione e quindi sta cercando un programma con
              esercizi nuovi e efficaci e tecniche di allenamento diversi.
            </p>
          </div>
        </div>
      </section>
      <section className="about about-me">
        <div className="wrapper about__wrapper">
          <img className="about__img" src={authorPhoto} alt="" />
          <div className="about__content">
            <h3 className="about__title">Mi chiamo Alena Valy.</h3>
            <p className="about__subtitle">
              Sono atleta, fitness coach, insegnante di yoga, scrittrice e titolare di Fitness a
              Yoga Studio a Milano.
            </p>
            <ul>
              <li>Bulimia sconfitta e salute ripristinata</li>
              <li>Ha scritto il libro "Da Bulimica a Fitness</li>
              <li>Model" Autore di numerosi articoli su fitness, yoga e salute mentale</li>
              <li>Creato il programma Bikini Body & Mind, raccogliendo le tecniche più efficaci</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="about about-inventory">
        <div className="wrapper about__wrapper">
          <img className="about__img" src={inventoryImage} alt="" />
          <div className="about__content">
            <h3 className="about__title">Cosa ti serve:</h3>
            <p className="about__subtitle">
              <ul>
                <li>Manubri</li>
                <li>Il tappetino</li>
                <li>Elastici</li>
                <li>Mattoncini per Yoga</li>
              </ul>{' '}
            </p>
          </div>
        </div>
      </section>
      <section className="results">
        <div className="wrapper results__wrapper">
          <h4 className="results-title">I risultati dei miei clienti</h4>
          <Slider />
        </div>
      </section>
      <footer className="footer">
        <div className="wrapper footer__wrapper">
          <div className="footer__rights">AlenaFit.online © 2021. All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
