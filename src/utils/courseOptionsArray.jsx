import imgId1 from '../assets/img/1.png';
import imgId2 from '../assets/img/2.png';
import imgId3 from '../assets/img/3.png';

const courseOptionsArray = [
  {
    id: 1,
    name: 'Light',
    isRecommended: true,
    cost: '59',
    img: imgId1,
    optionContent: () => {
      return (
        <>
          <p>Test-Drive</p>
          <p>Contiene 4 settimane 3 allenamenti a settimana:</p>
          <ul className="unmarked">
            <li>- parte alta </li>
            <li>- ambe e glutei </li>
            <li>- total body</li>
          </ul>
          <p>Duratura 20 min ciascuno</p>
        </>
      );
    },
  },
  {
    id: 2,
    name: 'Efficace',
    isRecommended: false,
    cost: '79',
    img: imgId2,
    optionContent: () => {
      return (
        <>
          <p>Hai acceso senza limiti per sempre</p>
          <p>Contiene 4 settimane 5 allenamenti a settimana diversi</p>
          <p>
            Workout:
            <ul className="unmarked">
              <li>- parte alta</li>
              <li>- gambe e glutei</li>
              <li>- total body</li>
            </ul>
          </p>
          <p>Yoga Fitness Flow</p>
          <p>HIIT (cardio)</p>
          <p>Duratura 20 min ciascuno</p>
        </>
      );
    },
  },
  {
    id: 3,
    name: 'Premium',
    isRecommended: true,
    cost: '109',
    img: imgId3,
    optionContent: () => {
      return (
        <>
          <p>
            5 allenamenti da 20 min alla settimana con me (tutti gli allenamenti li facciamo
            insieme, con il mio sostegno e motivazione)
          </p>
          <ul className="unmarked">
            <li>
              ⁃ Workbook <br />
              È il tuo libretto sotto mano di Fitness con dei varie contenuti utili.
            </li>
            <p></p>
            <li>
              ⁃ Live chat con me e partecipanti<br />
                *potresti farmi qualsiasi tipo di domanda, condividere il tuo progresso o eventuali
                difficoltà, stiamo connessi{' '}
            </li>
          </ul>
          <p>
            Bonus: Q&A con me:
            <ul>
              <li>
                Parliamo dei tuoi limiti, cosa ti blocca e come riprogrammare il subconscio per
                raggiungere il risultato desiderato con successo.
              </li>
              <li>
                Condivido con te le mie tecniche speciali per raggiungere gli obbiettivi che uso
                ogni giorno
              </li>
              <li>Lavoriamo sul tuo atteggiamento mentale Mente sana Corpo sano</li>
            </ul>
          </p>
          <p>
            Bonus: Q&A con nutrizionista:
            <ul>
              <li>Riceverai tutta le informazioni sulla alimentazione corretta</li>
              <li>Potresti fare qualsiasi domanda</li>
              <li>
                {' '}
                Imparerai a costruire il tuo proprio menu alla base del cibo che ti piace per
                raggiungere il tuo fisico da sogno , mangiando bene e senza sacrifici inutili.
              </li>
            </ul>
          </p>
          <p>Bonus: la consulenza in chat con me</p>
        </>
      );
    },
  },
];

export default courseOptionsArray;
