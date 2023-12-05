1. Autenticazione e Autorizzazione:
   > Attori: Utente, Sistema
  - Casi d'Uso Positivi:
    - Registrazione dell'Utente:
      L'utente si registra con successo utilizzando l'account istituzionale.
    - Login dell'Utente:
      L'utente inserisce le credenziali corrette e accede all'applicazione.
  - Casi d'Uso Negativi:
    - Registrazione dell'Utente:
      L'utente inserisce informazioni incomplete e riceve un messaggio di errore.
      L'utente tenta di registrarsi con un account istituzionale già esistente.
    - Login dell'Utente:
      L'utente inserisce credenziali errate e riceve un messaggio di errore.

2. Creazione e Gestione delle Stanze:
   > Attori: Utente, Sistema.
  - Casi d'Uso Positivi:
    - Creazione di una Nuova Stanza:
      L'utente crea una nuova stanza specificando il nome della materia, il grado e l'host con successo.
    - Gestione della Stanza:
      Il proprietario rimuove un partecipante dalla stanza.
      Il proprietario elimina la stanza con successo.
  - Casi d'Uso Negativi:
    - Creazione di una Nuova Stanza:
      L'utente tenta di creare una stanza senza specificare tutti i campi obbligatori e riceve un messaggio di errore.
    - Gestione della Stanza:
      Un utente non autorizzato tenta di rimuovere un partecipante e riceve un messaggio di errore.
      Un utente non autorizzato tenta di eliminare una stanza e riceve un messaggio di errore.

3. Chat all'interno delle Stanze:
   > Attori: Utenti, Sistema.
  - Casi d'Uso Positivi:
    - Invio di Messaggi nella Chat:
      Gli utenti scambiano messaggi nella chat della stanza con successo.
    - Eliminazione dei Messaggi:
      Il mittente elimina con successo un proprio messaggio.
  - Casi d'Uso Negativi:
    - Invio di Messaggi nella Chat:
      Un utente tenta di inviare un messaggio in una stanza senza essere un partecipante e riceve un messaggio di errore.
    - Eliminazione dei Messaggi:
      Un utente tenta di eliminare il messaggio di un altro utente e riceve un messaggio di errore.

4. Condivisione di File:
   > Attori: Utente, Sistema.
  - Casi d'Uso Positivi:
    - Caricamento e Condivisione di File:
      L'utente carica un file nella stanza e gli altri utenti possono visualizzarlo e scaricarlo.
    - Eliminazione dei File Condivisi:
      Il mittente elimina con successo un file condiviso.
  - Casi d'Uso Negativi:
    - Caricamento e Condivisione di File:
      Un utente tenta di caricare un tipo di file non supportato e riceve un messaggio di errore.
    - Eliminazione dei File Condivisi:
      Un utente tenta di eliminare un file condiviso di un altro utente e riceve un messaggio di errore.

5. Gestione degli Utenti:
   > Attori: Proprietario della Stanza, Utente Espulso, Sistema.
  - Casi d'Uso Positivi:
    - Espulsione di un Partecipante:
      Il proprietario espelle un partecipante dalla stanza con successo.
    - Abbandono di una Stanza:
      Un utente abbandona volontariamente una stanza.
  - Casi d'Uso Negativi:
    - Espulsione di un Partecipante:
      Un utente non autorizzato tenta di espellere un partecipante e riceve un messaggio di errore.
    - Abbandono di una Stanza:
      Un utente tenta di abbandonare una stanza in cui è il proprietario e riceve un messaggio di errore.

6. Notifiche:
   > Attori: Utente, Sistema.
  - Casi d'Uso Positivi:
    - Ricezione di Notifiche:
      Gli utenti ricevono notifiche in tempo reale per nuovi messaggi e altre attività rilevanti.
  - Casi d'Uso Negativi:
    - Ricezione di Notifiche:
      Un utente disabilita le notifiche e non riceve avvisi per nuovi messaggi o attività nella chat delle stanze.
