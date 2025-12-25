# MyCampus - Platforma wydarzeń studenckich

Nowoczesna platforma łącząca studentów poprzez wspólne pasje i zainteresowania.

## 🚀 Technologie

- **Vite** - Build tool
- **React** - Framework UI
- **TypeScript** - Typowanie
- **Tailwind CSS** - Stylowanie
- **Shadcn UI** - Komponenty UI
- **React Router** - Routing
- **React Query** - Data fetching

## 📦 Instalacja

```bash
# Zainstaluj zależności
npm install
# lub
bun install

# Uruchom serwer deweloperski
npm run dev
# lub
bun dev
```

## 🏗️ Build

```bash
npm run build
```

## 🌐 Wdrożenie

### Vercel (Aktualne)

Projekt jest już wdrożony na Vercel:
- **Production URL**: https://mycampus-page.vercel.app
- **Dashboard**: https://vercel.com/jakubs-projects-7bb06387/mycampus-page

Aby zaktualizować wdrożenie:
```bash
npx vercel --prod
```

### GitHub Repository

Aby utworzyć repozytorium GitHub i połączyć je z Vercel:

1. Utwórz nowe repozytorium na GitHub: https://github.com/new
   - Nazwa: `MyCampusPage`
   - Public lub Private

2. Dodaj remote i wypchnij kod:
```bash
git remote add origin https://github.com/TWOJA_NAZWA/MyCampusPage.git
git branch -M main
git push -u origin main
```

3. Połącz repozytorium z Vercel:
   - Przejdź do: https://vercel.com/jakubs-projects-7bb06387/mycampus-page/settings
   - W sekcji "Git" połącz swoje repozytorium GitHub

## 📝 Struktura projektu

```
src/
├── components/     # Komponenty React
│   ├── ui/        # Komponenty Shadcn UI
│   └── ...        # Komponenty strony
├── pages/         # Strony aplikacji
├── hooks/         # Custom hooks
├── lib/           # Utilities
└── assets/        # Obrazy i zasoby
```

## 🎨 Funkcje

- Responsywny design
- Tekstura papieru w tle
- Animacje i przejścia
- Komponenty Shadcn UI
- Routing z React Router

## 📄 Licencja

Private project
