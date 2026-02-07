# 🚗 AutoRent - Car Rental Website

Un sito web moderno e responsive per il noleggio di auto, costruito con React.js, Vite e TailwindCSS.



## ✨ Caratteristiche

- 🎨 **Design Moderno e Responsive** - Interfaccia pulita e ottimizzata per tutti i dispositivi
- 🚀 **Navigazione Fluida** - Routing con React Router DOM
- 💫 **Animazioni Eleganti** - Effetti di scroll reveal per un'esperienza utente coinvolgente
- 🎥 **Video Section** - Sezione video integrata con player modale
- 🔐 **Sistema di Autenticazione** - Pagine di login e registrazione
- 🌐 **Multi-page Application** - Architettura scalabile con componenti riutilizzabili
- 📱 **Mobile First** - Design completamente responsive

## 🛠️ Tecnologie Utilizzate

- **React.js** - Libreria JavaScript per costruire interfacce utente
- **Vite** - Build tool veloce per progetti moderni
- **TailwindCSS v4** - Framework CSS utility-first
- **React Router DOM** - Gestione del routing
- **Lucide React** - Icone moderne e personalizzabili
- **Material-UI** - Componenti UI per React
- **ScrollReveal** - Animazioni allo scroll

## 📋 Prerequisiti

Prima di iniziare, assicurati di avere installato:

- [Node.js](https://nodejs.org/) (versione 16 o superiore)
- npm o yarn

## 🚀 Installazione

1. **Clona il repository**
```bash
git clone https://github.com/tuo-username/autorent-website.git
cd autorent-website
```

2. **Installa le dipendenze**
```bash
npm install
```

3. **Installa TailwindCSS v4 e PostCSS**
```bash
npm install -D @tailwindcss/postcss
```

4. **Configura PostCSS**

Crea il file `postcss.config.js` nella root del progetto:
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

5. **Configura il CSS**

Il file `src/index.css` dovrebbe contenere:
```css
@import "tailwindcss";
```

6. **Avvia il server di sviluppo**
```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`

## 📁 Struttura del Progetto

```
autorent-website/
├── public/
├── src/
│   ├── assets/          # Immagini e risorse statiche
│   │   ├── bmw.jpg
│   │   ├── tesla.jpg
│   │   ├── audi.jpg
│   │   ├── toyota.jpg
│   │   ├── kia.jpg
│   │   ├── ford.jpg
│   │   └── video-img.jpg
│   ├── components/      # Componenti React
│   │   ├── FeaturedCars.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Home.jsx
│   │   ├── Layout.jsx
│   │   ├── Nav.jsx
│   │   └── VideoSection.jsx
│   ├── pages/           # Pagine
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── App.jsx          # Componente principale
│   ├── main.jsx         # Entry point
│   └── index.css        # Stili globali
├── postcss.config.js    # Configurazione PostCSS
├── package.json
└── vite.config.js       # Configurazione Vite
```

## 🎯 Funzionalità Principali

### Homepage
- Hero section con form di ricerca auto
- Sezione auto in evidenza con filtri
- Video promozionale
- Caratteristiche del servizio
- Footer informativo

### Pagine di Autenticazione
- Login con email e password
- Registrazione nuovi utenti
- Integrazione social login (UI)

### Componenti
- Navbar responsive con menu mobile
- Card auto con dettagli completi
- Animazioni scroll reveal
- Modal video

## 🎨 Personalizzazione

### Colori
I colori principali sono definiti nelle classi Tailwind:
- Primary: `blue-500`, `blue-700`
- Accents: `yellow-400`, `green-500`
- Grays: `gray-100` - `gray-900`

### Immagini
Sostituisci le immagini nella cartella `src/assets/` con le tue.

## 📦 Build per Produzione

Per creare una build ottimizzata:

```bash
npm run build
```

I file saranno generati nella cartella `dist/`

## 🌐 Deploy

### Deploy su Vercel

1. Connetti il tuo repository GitHub a Vercel
2. Vercel rileverà automaticamente la configurazione Vite
3. Il sito verrà deployato automaticamente ad ogni push

### Deploy Manuale

```bash
npm run build
# Carica il contenuto della cartella dist/ sul tuo server
```

## 🐛 Risoluzione Problemi

### TailwindCSS non funziona
Assicurati di:
- Aver installato `@tailwindcss/postcss`
- Il file `postcss.config.js` sia configurato correttamente
- Il file `index.css` contenga `@import "tailwindcss";`

### Errori di importazione
Se riscontri errori tipo "Cannot resolve module":
- Verifica che i nomi delle cartelle corrispondano (case-sensitive)
- Controlla che tutte le dipendenze siano installate
- Cancella `node_modules` e reinstalla: `rm -rf node_modules && npm install`

## 🤝 Contribuire

I contributi sono benvenuti! Per contribuire:

1. Fai fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Committa le tue modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Pusha il branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📝 License

Questo progetto è rilasciato sotto licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.

## 👨‍💻 Autore

**Il Tuo Nome**
- GitHub: [@tuo-username]([https://github.com/tuo-username](https://github.com/mansourlahham14))
- Vercel Link: https://car-rent-web-site.vercel.app/

## 🙏 Ringraziamenti

- [Lucide Icons](https://lucide.dev/) per le icone
- [TailwindCSS](https://tailwindcss.com/) per il framework CSS
- [React](https://react.dev/) per la libreria UI
- [Vite](https://vitejs.dev/) per il build tool

---

⭐ Se questo progetto ti è stato utile, lascia una stella su GitHub!
