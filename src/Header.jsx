export default function Header() {
  return (
    <header>
      <nav
        class="navbar navbar-expand-lg fixed-top navbar-light bg-white"
        id="header"
      >
        <div class="container-fluid">
          <div class="col-md-2 navbar-brand ps-4 row" id="top-fixed-1">
            <p class="col-7">
              <a href="/">
                <img src="/images/name.jpg" alt="多田設計事務所" />
              </a>
            </p>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse pe-5" id="navbarToggler">
            <ul class="col-md-9 navbar-nav justify-content-end header-menu">
              <li class="menu-list nav-item">
                <a class="nav-link" href="/philosophy">
                  理念
                </a>
              </li>
              <li class="menu-list nav-item">
                <a class="nav-link" href="/work">
                  作品
                </a>
              </li>
              <li class="menu-list nav-item">
                <a class="nav-link" href="/magazine">
                  雑誌掲載
                </a>
              </li>
              <li class="menu-list nav-item">
                <a class="nav-link" href="/profile">
                  プロフィール
                </a>
              </li>
              <li class="menu-list nav-item">
                <a class="nav-link" href="/overview">
                  事務所概要
                </a>
              </li>
              <li class="menu-list nav-item">
                <a class="nav-link" href="/flow">
                  設計の流れ
                </a>
              </li>
            </ul>
            <div class="col-md-3 header-box">
              <p>TEL : 0466-42-1793</p>
              <p>E-mail :sekkei@arttada.com</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
