export default function Header() {
    return (
        <header>
            {/* <p><a href="/"><img src="images/name.jpg" alt="多田設計事務所"/></a></p>
            <nav>
                <ul className="header-menu">
                    <li class="menu-list"><a href="philosophy">理念</a></li>
                    <li class="menu-list"><a href="work">作品</a></li>
                    <li class="menu-list"><a href="magazine">雑誌掲載</a></li>
                    <li class="menu-list"><a href="profile">プロフィール</a></li>
                    <li class="menu-list"><a href="overview">事務所概要</a></li>
                    <li class="menu-list"><a href="flow">設計の流れ</a></li>
                </ul>
            </nav>
            <div className="header-box">
                <a href=""><img src="images/form.png" alt="お問い合わせフォーム"/></a>
                <p>TEL : 0466-42-1793</p>
                <p>E-mail :sekkei@arttada.com</p>
            </div> */}
            <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white" id="header">
                <div class="container-fluid">
                    <div class="col-md-2 navbar-brand ps-4 row" id="top-fixed-1">
                        <p class="col-7"><a href="/"><img src="images/name.jpg" alt="多田設計事務所"/></a></p>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                        aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse pe-5" id="navbarToggler">
                        <ul class="col-md-9 navbar-nav justify-content-end header-menu">
                            <li class="menu-list nav-item"><a class="nav-link" href="philosophy">理念</a></li>
                            <li class="menu-list nav-item"><a class="nav-link" href="work">作品</a></li>
                            <li class="menu-list nav-item"><a class="nav-link" href="magazine">雑誌掲載</a></li>
                            <li class="menu-list nav-item"><a class="nav-link" href="profile">プロフィール</a></li>
                            <li class="menu-list nav-item"><a class="nav-link" href="overview">事務所概要</a></li>
                            <li class="menu-list nav-item"><a class="nav-link" href="flow">設計の流れ</a></li>
                        </ul>
                        <div class="col-md-3 header-box">
                            {/* <div class="phone-number">
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-telephone phone-mar" viewBox="0 0 16 16">
                                        <path
                                                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>092-821-3610</p>
                            </div>
                            <p class="phone-number-2">受付時間 [土・日・祝日・休み]</p> */}

                            {/* <a href=""><img src="images/form.png" alt="お問い合わせフォーム"/></a> */}
                            <p>TEL : 0466-42-1793</p>
                            <p>E-mail :sekkei@arttada.com</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}