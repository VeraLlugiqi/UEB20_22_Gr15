function createHeader(){
    return `
  
    <div class="Pjesa1">
    <img src="/foto/Logoja111.png" class="Fotoja1">
    <a class="st">Studentë n'Qendër</a>
</div>

<nav class="navbar navbar-expand-lg bg-body-tertiary" >
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#"></a>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="FaqjaKryesore.html">Ballina</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="lajmet.html">Lajme</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="menza.html">Sherbime</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="Konviktet.html">Konviktet</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="projektiWeb.html">Aktivitete</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#footer-container">Kontakti</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="LogIn_Form.html">Log In</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="Ankesat.html">Ankesat</a>
      </li>
    </ul>
    <form class="d-flex" role="search" onsubmit="search()">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-primary" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>

  `
};

const headerContainer = document.querySelector("#header-container");
headerContainer.innerHTML = createHeader();
