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


