Analisi del problema: Quale problema risolve la mia web app? Il problema che deve risolvere è quello di effettuare il progetto studio amico in modo troppo dispersivo (organizzazione, mantenere i contatti su diverse piattaforme), e l’obiettivo è proprio quello di favorire le informazioni in modo facile e veloce.

Specifica dei requisiti (SRS)
Elenco delle funzionalità:

1. Autenticazione e Autorizzazione: --- Requisito Funzionale ---
   - Registrazione degli utenti tramite l'account istituzionale.
   - Login e logout degli utenti.
   - Gestione delle autorizzazioni per garantire che solo gli utenti registrati possano accedere alle funzionalità dell'applicazione.
  

  
2. Creazione e Gestione delle Stanze: --- Requisito Funzionale ---
   - Creazione di una nuova stanza di studio.
   - Specifica di un host per la stanza.
   - Assegnazione di un nome univoco, materia scolastica, e classe alla stanza.
   - Rimozione di partecipanti dalla stanza se si è il proprietario.
   - Possibilità di eliminare una stanza se si è il proprietario.
  


3. Chat all'interno delle Stanze: --- Requisito Funzionale ---
   - Possibilità per i partecipanti di inviare messaggi nella chat della stanza.
   - Opzione di eliminare i messaggi inviati (possibilmente solo per il mittente o il proprietario).
   - Notifiche per i nuovi messaggi nella chat.


  
4. Condivisione di File: --- Requisito Funzionale ---
   - Caricamento e condivisione di file all'interno delle stanze.
   - Visualizzazione e download dei file condivisi.
   - Possibilità di eliminare i file condivisi (possibilmente solo per il mittente o il proprietario).



5. Gestione degli Utenti: --- Requisito Funzionale ---
   - Visualizzazione del profilo degli utenti, comprese le informazioni personali e le stanze a cui partecipano.
   - Possibilità per i proprietari di espellere i partecipanti da una stanza.
   - Possibilità per gli utenti di abbandonare una stanza.



6. Notifiche: --- Requisito Funzionale ---
   - Notifiche in tempo reale per nuovi messaggi, inviti alle stanze, e altre attività rilevanti.


     
7. Sicurezza: --- Requisito Non Funzionale ---
   - Sicurezza per proteggere i dati degli utenti e prevenire l'accesso non autorizzato.
   - Gestione delle sessioni utente e controllo degli accessi.



8. Interfaccia Utente Intuitiva: --- Requisito Non Funzionale ---
   - Creazione di un'interfaccia utente intuitiva e user-friendly per facilitare la navigazione e l'utilizzo dell'applicazione.
  

     
9. Ricerca e Filtri: --- Requisito Non Funzionale ---
    - Funzionalità di ricerca per trovare stanze di studio specifiche o utenti.
    - Filtri per ordinare o visualizzare le stanze in base a criteri come materia scolastica, classe, ecc.



11. Statistiche e Monitoraggio: --- Requisito Non Funzionale ---
    - Statistiche sulla frequenza e l'attività degli utenti nelle stanze.
    - Monitoraggio delle prestazioni del sistema per garantire una buona esperienza agli utenti.
   

      
11. Assistenza e Supporto: --- Requisito di Dominio ---
    - Meccanismi per fornire assistenza agli utenti, come la segnalazione di problemi o la richiesta di aiuto.

   
      
12. Privacy e Conformità: --- Requisito di Dominio ---
    - Gestione della privacy e conformità alle leggi sulla protezione dei dati, inclusa la gestione dei dati personali degli utenti.


13. Visualizzare la propria agenda/calendario --- Requisito Funzionale ---

- USE CASE DIAGRAM

<img src="https://yuml.me/diagram/scruffy/usecase/[Utente%20non%20autenticato]-(Registrazione),%20[Utente%20non%20autenticato]-(login),%20(Visualizzazione%20delle%20stanze)%3C(Joinare%20una%20stanza),[Utente%20autenticato]-(Visualizzare%20il%20proprio%20profilo),%20[Utente%20autenticato]-(Logout),%20[Amministratore%20(autenticato)]-(Creare%20stanze),%20(Visualizzare%20il%20proprio%20profilo)%20%3C(Modificare%20il%20proprio%20profilo),%20[Utente%20autenticato]-(Visualizzare%20il%20profilo%20degli%20altri%20utenti),%20[Amministratore%20(autenticato)]-(Visualizzare%20il%20profilo%20degli%20altri%20utenti),%20[Utente%20autenticato]-(Visualizzazione%20delle%20stanze),[Amministratore%20(autenticato)]-(Visualizzazione%20delle%20stanze),%20[Amministratore%20(autenticato)]-(Logout),%20[Amministratore%20(autenticato)]-(Visualizzare%20il%20proprio%20profilo),%20(Joinare%20una%20stanza)%20%3C(Chattare%20all'interno%20della%20stanza),%20(Joinare%20una%20stanza)%20%3C(Eliminare%20un%20messaggio),%20(Joinare%20una%20stanza)%20%3C(Uscire%20dalla%20stanza),%20(Joinare%20una%20stanza)%20%3C(Uploadare%20file%20nella%20stanza),%20(Joinare%20una%20stanza)%20%3C(Eliminare%20un%20file),%20(eliminare%20un%20file)%3E(Essere%20proprietario%20del%20file),%20(Eliminare%20un%20messaggio)%3E(Essere%20i%20proprietari%20del%20messaggio),%20(Joinare%20una%20stanza)%20%3C(Scaricare%20file%20presenti%20nella%20stanza),%20(Creare%20stanze)%20%3C(Espellere%20i%20partecipanti),%20(Creare%20stanze)%20%3C(Eliminare%20la%20stanza)">

- WBS
  
![image](https://github.com/MattiaFranchini1/Progetto_GEP/assets/101174838/a10ac143-8a41-409a-ad66-b80333418ca2)

- VALUE PROPOSITION

Studio Amico: Organizza, Collabora, Aiuta, Eccelli nello studio

Studio Amico è la soluzione ideale per semplificare il progetto studio e l'aiuto reciproco tra compagni e non. Si distingue dalla concorrenza per diversi motivi che rendono l'esperienza degli utenti più fluida e appagante. Innanzitutto, ci poniamo l'obiettivo di semplificare il progetto studio attraverso un'interfaccia utente intuitiva. Ciò significa che l'uso dell'app risulta facile e immediato, consentendo agli utenti di concentrarsi maggiormente sugli studi anziché sulla navigazione dell'applicazione.
Inoltre, ci differenziamo per la centralizzazione delle funzionalità. Mentre alcuni concorrenti frammentano le diverse caratteristiche su diverse piattaforme o schermate, Studio Amico integra chat, condivisione di file e altro ancora in un'unica piattaforma. Questo approccio unificato favorisce una maggiore efficienza e una migliore gestione delle informazioni.

![_868e1fb0-503f-4849-b636-634ed8423148](https://github.com/MattiaFranchini1/Progetto_GEP/assets/101174838/c523f2d5-b869-4587-aa2f-899ad0be90eb)


User stories per avviare il progetto utilizzando Scrum (cicli di 2 settimane)
Primo ciclo di Scrum (2 settimane) - Calcolando un lavoro di circa 40 ore per settimana - Priorità (alta - media - bassa)

1. Autenticazione e Autorizzazione (Priorità alta):
- Come utente, voglio poter registrare un account utilizzando l'account istituzionale. (10 ore)
- Come utente, voglio ricevere un messaggio di errore se la registrazione con un account istituzionale esistente fallisce. (4 ore)
- Come utente, voglio poter eseguire il login utilizzando le credenziali corrette. (6 ore)
- Come utente, voglio ricevere un messaggio di errore se il login con credenziali errate fallisce. (5 ore)

2. Creazione e Gestione delle Stanze (Priorità alta):
- Come utente, voglio poter creare una nuova stanza specificando nome, grado e host. (10 ore)
- Come proprietario, voglio poter rimuovere un partecipante dalla stanza. (8 ore)
- Come proprietario, voglio poter eliminare una stanza con successo. (6 ore)
- Come utente, voglio ricevere un messaggio di errore se tento di creare una stanza senza specificare tutti i campi obbligatori. (5 ore)

3. Chat all'interno delle Stanze (Priorità alta):
- Come utente, voglio poter inviare messaggi nella chat della stanza. (8 ore)
- Come utente, voglio poter eliminare con successo un mio messaggio. (6 ore)
- Come utente non partecipante, voglio ricevere un messaggio di errore se tento di inviare un messaggio nella chat di una stanza. (5 ore)
- Come utente, voglio ricevere un messaggio di errore se tento di eliminare il messaggio di un altro utente. (5 ore)

MODELLO DI BUSINESS

Modello di Abbonamento Istituzionale:
- Le istituzioni sottoscrivono un abbonamento per l'utilizzo di Studio Amico su larga scala.
- Il pagamento può essere basato su un canone mensile o annuale.

Licenza d'Uso Istituzionale:
- Le istituzioni acquistano licenze d'uso per Studio Amico, ottenendo il diritto permanente di utilizzare il software.
- Il pagamento si basa su una cifra periodica in base al numero di utenti o ad altri fattori concordati.



STARTUP PIVOT

Il mercato non ha reagito come ci eravamo aspettati quando abbiamo lanciato la nostra applicazione. 
Per questp motivo abbiamo deciso di aggiungere delle funzionalità aggiuntive che rendono la nostra applicazione "unica" e "differente" dalla concorrenza.
La maggiore funzionalità che abbiamo deciso di implementare è:

14. Poter visualizzare consigli personalizzati riguardo la lettura di libri riguardanti gli argomenti trattati da ogni utente e/o link a corsi online gratuiti --- Requisito Funzionale ---

Per fare si che questa funzionalità venga esaudita, ci avvaliamo di un software di AI da noi creato per "studiare i profili degli utenti" e dare consigli mirati e personalizzati.


Sempre per "migliorare" la nostra posizione all'interno del mercato, abbiamo deciso di accentuare il concetto di MULTITENANCY: la nostra web app, non è rivolta solo ad un instituto scolastico, ma è rivolta (potenzialmente) a tutte le scuole italiane e non solo, anche a quelle europee e di tutto il mondo. Il "software di base" (le funzionalità presenti) è lo stesso per tutte le scuole, ma ogni scuola ha una personalizzazione che riguarda, per esempio le materie, il piano di studi, i corsi, e tutte le eventuali richieste di personalizzazione che ci vengono fatte.
