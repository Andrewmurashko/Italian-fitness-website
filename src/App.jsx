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
  return (
    <div className="App">
      <header class="header">
        <div class="wrapper header__wrapper">
          <img class="logo" src={logo} alt="logo" />
          <nav class="navigation">
            <ul class="navigation__list">
              <li class="navigation__item">Home</li>
              <li class="navigation__item">Why?</li>
              <li class="navigation__item">Price</li>
              <li class="navigation__item">About cource</li>
              <li class="navigation__item">Reviews</li>
            </ul>
          </nav>
          <span class="hamburger">
            <span class="hamburger__line"></span>
          </span>
        </div>
      </header>
      <section class="bikini">
        <div class="wrapper bikini__wrapper">
          <div class="bikini__content">
            <h1 class="bikini__title">Bikini Body</h1>
            <h2 class="bikini__authhor-title">Alena Valy</h2>
            <button class="button button__attantion">Su di me</button>
            <div class="bikini__text-block">
              <p class="bikini__text">
                Il Programma di allenamento con dei giorni
                <ul className="bikini__list">
                  <li className="bikini__item">•Fitness</li>
                  <li className="bikini__item">•Cardio</li>
                  <li className="bikini__item">•Yoga</li>
                </ul>
              </p>

              <p class="bikini__text">
                Ci vorrebbero soli 20 min al giorno,
                <br />5 giorni a settimana.
              </p>
            </div>
            <button class="button button__warning">TEST DRIVE</button>
          </div>
          <div class="bikini__photos">
            <img src={firstPhoto} alt="" />
            <div class="bikini__mini-photos">
              <img src={secondPhoto} alt="" />
              <img src={thirdPhoto} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="courses">
        <div class="wrapper courses__wrapper">
          <div className="courses__decription-block">
            <p class="courses__text text_light">
              Scopri come restare in forma ad ogni eta, come stare in SUPER forma senza sacrifici{' '}
              <br />
              inutili, trovare la motivazione quotivazione quotidiana per andare sempre avanti e non
              mollare mai!
            </p>
            <h3 class="courses__title">Scegliere</h3>
          </div>
          <div class="courses__price-block">
            {courseOptionsArray.map((el, index) => (
              <CourseCard onClickAccept={() => console.log(el)} data={el} key={index} />
            ))}
          </div>
        </div>
      </section>
      <section class="courses-description">
        <div class="wrapper courses-description__wrapper">
          <h3 class="courses-description__title">
            BENVENUTE NEL MIO PROGRAMMA <br />
            BIKINI BODY & MIND.
          </h3>
          <div class="courses-description__content-block">
            <p class="courses-description__content text_light">
              Il mio corso è adatto ad ogni stile di vita sopratutto per chi è veramente impegnata.
              Perché ti servono soli 20 min al giorno, 5 giorni a settimana da dedicare a te stessa,
              il tuo fantastico corpo e la mente.
            </p>
            <p class="courses-description__content text_light">
              Potresti usare questo programma in palestra, a casa oppure portare con te in vacanza
              ‘Bikini Mind & Body’ è un programma di 4 settimane però potresti allungare per 8 o più
              settimane. Potresti prendere i giorni o singoli allenamenti del programma che ti sn
              piaciuti di più e abbinarli con la tua futura training routine.
            </p>
            <p class="courses-description__content text_light">
              Ogni settimana conclude 3 allenamenti base: <br />⁃ giorno gambe <br />⁃ parte sopra{' '}
              <br />⁃ total body
            </p>
            <p class="courses-description__content text_light">
              Fa lavorare tutti i muscoli del tuo corpo. Sono mischiati con i giorni di Yoga Fitness
              Flow che migliorano la tua forza, equilibrio, stabilità, resistenza e il tono
              muscolare. Ogni efficace programma del allenamento dovrebbe includere attività
              aerobica.
            </p>
            <p class="courses-description__content text_light">
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
      <section class="about about-me">
        <div class="wrapper about__wrapper">
          <img class="about__img" src={authorPhoto} alt="" />
          <div class="about__content">
            <h3 class="about__title">Mi chiamo Alena Valy.</h3>
            <p class="about__subtitle">
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
      <section class="about about-inventory">
        <div class="wrapper about__wrapper">
          <img class="about__img" src={inventoryImage} alt="" />
          <div class="about__content">
            <h3 class="about__title">Cosa ti serve:</h3>
            <p class="about__subtitle">
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
        <div class="wrapper results__wrapper">
          <h4 className="results-title">I risultati dei miei clienti</h4>
          <Slider />
        </div>
      </section>
      <footer className="footer">
        <div class="wrapper footer__wrapper">
          <div className="footer__rights">AlenaFit.online © 2021. All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
