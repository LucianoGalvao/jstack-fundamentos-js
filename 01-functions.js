function minhaFunction() {
  // Keyword function cria o seu próprio this
  this.name = 'Luciano';

  const minhaArrowFuncion = () => {
    // Arrow function herda o this do contexto na qual foi criada
    this.lastName = 'Galvão';
  };

  minhaArrowFuncion();
}

console.log(new minhaFunction());
console.log(this);
