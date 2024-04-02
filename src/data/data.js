const lista = [
  {
    felhasznalok: {
      elnevezes: "Felhasználók",
      apik: {
        indexUrl: "api/felhasznalok",
        showUrl: "api/felhasznalok/{id}",
        storeUrl: "api/felhasznalok",
        updateUrl: "api/felhasznalok/{id}",
        destroyUrl: "api/felhasznalok/{id}",
      },
      adatok: {
        id: {
          tipus: "number",
          modosithato: false,
          kotelezo: true,
          fejlec: "azon",
          lathato: true,
        },
        name: {
          tipus: "text",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          regex:
            "([A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+)s([A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+)s?([A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+)?",
          fejlec: "név",
          lathato: true,
        },
        telefonszam: {
          tipus: "text",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          regex: "[0-9]+",
          fejlec: "telefonszám",
          lathato: true,
        },
        cim: {
          tipus: "text",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          regex: "[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+",
          fejlec: "cím",
          lathato: true,
        },
        email: {
          tipus: "email",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          regex: "[a-z0-9]@[a-z0-9].[a-z]{2,3}",
          fejlec: "e-mail",
          lathato: true,
        },
        email_verified_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "e-mail megerősítve",
          lathato: true,
        },

        password: {
          tipus: "password",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          regex: ".+",
          fejlec: "jelszó",
          lathato: false,
        },
        megrendelo_tipus: {
          tipus: "text",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          regex: "^(C|M)$",
          fejlec: "megrendelő típus",
          lathato: true,
        },
        adoszam: {
          tipus: "text",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          regex: "[0-9]{13}",
          fejlec: "adószám",
          lathato: true,
        },
        admin_e: {
          tipus: "number",
          modosithato: true,
          kotelezo: true,
          alapertek: 0,
          fejlec: "admin-e",
          min: 0,
          max: 1,
          lathato: true,
        },
        created_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "létrehozva",
          lathato: true,
        },
        updated_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "módosítva",
          lathato: true,
        },
      },
      alapObj: {
        id: "",
        name: "",
        telefonszam: "",
        cim: "",
        email: "",
        password: "",
        megrendelo_tipus: "",
        adoszam: "",
        admin_e: 0,
      },
    },
  },
][0];

export default lista;
