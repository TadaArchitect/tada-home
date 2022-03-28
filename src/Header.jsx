export default function Header() {
    return (
        <header>
            <p><a href="/"><img src="images/name.jpg" alt="多田設計事務所"/></a></p>
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
            </div>
        </header>
    );
}