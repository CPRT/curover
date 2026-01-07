class Header extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        window.innerWidth > 850? this.innerHTML = `
            <header>
                <a href="./index.html">
                    <div class="nav-icon">
                        <div>
                            <img src="static/images/cprt-nav-icon.png">
                        </div>
                        <div>
                            <p style="padding-left:5px;">CPRT</p>
                        </div>
                    </div>
                </a>
                <ul class="right-nav-div">
                    <li>
                        <a href="./rovers.html">THE ROVERS</a>
                    </li>
                    <li>
                        <a href="./team.html">THE TEAM</a>
                    </li>
                    <li>
                        <a href="./sponsors.html">SPONSORS</a>
                    </li>
                    <li>
                        <a href="./contact.html">CONTACT</a>
                    </li>
                    <li>
                        <a href="./merch.html">MERCH</a>
                    </li>
                </ul>
            </header>
        ` : 
        this.innerHTML = `
            <header>
                <ul>
                    <li><a href="./index.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                        </svg>
                        <p style="font-size: auto;">Home</p>
                    </a></li>
                    <li><a href="./rovers.html">
                        <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                                xmlns="http://www.w3.org/2000/svg">

                            <!-- Wheels -->
                            <circle cx="14" cy="46" r="6"/>
                            <circle cx="50" cy="46" r="6"/>
                            <circle cx="32" cy="46" r="6"/>

                            <!-- Suspension bars -->
                            <line x1="14" y1="46" x2="32" y2="34"/>
                            <line x1="50" y1="46" x2="32" y2="34"/>

                            <!-- Chassis -->
                            <rect x="20" y="28" width="24" height="8" rx="2"/>

                            <!-- Mast -->
                            <line x1="32" y1="28" x2="32" y2="16"/>

                            <!-- Camera head -->
                            <rect x="28" y="12" width="8" height="6" rx="1"/>

                            <!-- Antenna -->
                            <line x1="36" y1="12" x2="42" y2="6"/>
                            <circle cx="42" cy="6" r="2"/>
                        </svg>
                        <p style="font-size: auto;">Rovers</p>
                    </a></li>
                    <li><a href="./team.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round-icon lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/>
                            <circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/>
                        </svg>
                        <p style="font-size: auto;">Team</p>
                    </a></li>
                    <li><a href="./sponsors.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2-icon lucide-building-2"><path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/>
                            <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>
                        </svg>
                        <p style="font-size: auto;">Sponsor</p>
                    </a></li>
                    <li><a href="./contact.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                        <p style="font-size: auto;">Contact</p>
                    </a></li>
                    <li><a href="./merch.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shirt-icon lucide-shirt">
                            <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
                        </svg>
                        <p style="font-size: auto;">Merch</p>
                    </a></li>
                </ul>
            </header>
        `;
    }
}

customElements.define('header-component', Header);