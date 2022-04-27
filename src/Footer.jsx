export default function Footer() {
  return (
    <footer>
      <p className="copyRight">
        <small>
          Copyright(C)2001-2021 TADA Architects Associates. All Rights Reserved.
        </small>
      </p>
      <nav>
        <ul className="footer-menu">
          <li class="menu-list">
            <a href="/philosophy">理念</a>
          </li>
          <li class="menu-list">
            <a href="/overview">事務所概要</a>
          </li>
          <li class="menu-list">
            <a href="https://blog.arttada.com/">多田裕子ブログ</a>
          </li>
          {/* <li class="menu-list">
            <a href="">リンク</a>
          </li> */}
          <li class="menu-list">
            <a href="https://157.7.245.192/download_file/view/906/1">
              プライバシーポリシー
            </a>
          </li>
        </ul>
      </nav>
      <div className="footer-text">
        <p>〒252-0804</p>
        <p>神奈川県藤沢市湘南台5-1-3-607</p>
        <p>TEL : 0466-42-1793</p>
      </div>
    </footer>
  );
}
