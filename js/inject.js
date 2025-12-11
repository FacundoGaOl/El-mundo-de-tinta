class NavbarStore extends HTMLElement {
    connectedCallback() {
        // Detecta si estamos en una página dentro de /html/ o en la raíz
        const isInHtmlFolder = window.location.pathname.includes('/html/');
        const prefix = isInHtmlFolder ? '../' : './';

        this.innerHTML = `
    <header class="navbar">
        <nav class="navbar-container">

            <section class="navbar-brand">
                <a href="${prefix}index.html"><img src="${prefix}images/logoP.png" alt="Logo"></a>
                <h1 class="navbar-title">Mundo de Tinta</h1>
            </section>

            <ul class="navbar-list">
                <li class="navbar-list-item"><a class="navbar-link" href="${prefix}index.html">Libros</a></li>
                <li class="navbar-list-item"><a class="navbar-link" href="${prefix}html/comics.html">Comics</a></li>
                <li class="navbar-list-item"><a class="navbar-link" href="${prefix}html/aboutUs.html">Sobre Nosotros</a></li>
                <li class="navbar-list-item"><a class="navbar-link" href="${prefix}html/contact.html">Contacto</a></li>
            </ul>

        </nav>
    </header>
    `;
    }
}

customElements.define("navbar-store", NavbarStore);

class FooterStore extends HTMLElement {
    connectedCallback() {
        const isInHtmlFolder = window.location.pathname.includes('/html/');
        const prefix = isInHtmlFolder ? '../' : './';

        this.innerHTML = `
    <footer class="footerColor">
        <section class="footerContainer">
            <div><img src="${prefix}images/logoP.png" alt="Logo"></div>
            <div class="aboutUs">
                <h2>Sobre Nosotros</h2>
                <p>Somos la tienda esencial para tu colección de cómics. En Mundo de Tinta, la calidad y la variedad son
                nuestra prioridad. Las mejores historias, garantizadas.</p>
            </div>
            <div class="contactInfo">
                <h2>Información de Contacto</h2>
                <p>+1 (234) 567-8901</p>
                <p>mundode@tinta.com</p>
            </div>
            <div class="newsletter">
            <h2>Newsletter</h2>
            <p>Suscríbete a nuestro boletín para las últimas actualizaciones.</p>
            <input type="email" placeholder="Tu correo electrónico">
            <button>Suscribirse</button>
            </div>
            <p class="copyright">© 2025 Mundo de Tinta. Todos los derechos reservados.</p>
        </section>
    </footer>
    `;
    }
}

customElements.define("footer-store", FooterStore);
