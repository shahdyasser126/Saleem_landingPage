export default function Logo() {
  return (
    <a className="brand" href="#home" aria-label="Saleem home">
      <svg className="brand-mark" viewBox="0 0 64 72" role="img" aria-label="Saleem mark">
        <path d="M32 3C21 3 10 7 5 12v16c0 19 12 33 27 41 15-8 27-22 27-41V12C54 7 43 3 32 3Z" fill="#18283F"/>
        <path d="M32 3C42 3 51 6 57 12v16c0 19-11 33-25 41L25 55c12-8 20-19 20-34V13C40 8 36 5 32 3Z" fill="#397A78"/>
        <path d="M32 14c-7 0-13 2-17 5v9c0 10 6 19 17 27 10-8 16-17 16-27v-9c-4-3-10-5-16-5Z" fill="#F6F2EA"/>
      </svg>
      <span>Saleem</span>
    </a>
  );
}
