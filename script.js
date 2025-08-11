// Traduções
const translations = {
    pt: {
        home: 'Inicio',
        projects: 'Projetos',
        about: 'Sobre mim',
        contact: 'Contato',
        hello: 'Olá, eu sou',
        viewProject: 'Ver Projeto',
        aboutMe: 'Sobre Mim',
        skills: 'Habilidades',
        aboutText: 'Sou um desenvolvedor web apaixonado por criar experiências digitais incríveis. Com foco em desenvolvimento front-end, busco sempre aprender novas tecnologias e aprimorar minhas habilidades. Atualmente estudo Ciência da Computação, na Universidade Tecnologica Federal do Paraná (UTFPR) no campus de Medianeira, aonde estou aprendendo C, realizei alguns mini cursos internos, como Docker, React e Node.js. Também faço parte da Empresa Junior de Ciência da Computação (ADAEJ) como membro de projetos, esta me ajudando muito a aprimorar minhas habilidades aprender a trabalhar em equipe, e a trabalhar com metodologias ágeis como Scrum, me adequando ao ambiente de trabalho real. Estou me formando como Tecnologo em Analise e Desenvolvimento de Sistemas no formato EAD, pela Cruzeiro do Sul.',
        rights: 'Todos os direitos reservados.',
        radarTrackText: "Desenvolvi e vendi este site para um amigo, utilizando HTML5, CSS3 e JavaScript. Estruturei o conteúdo de forma semântica, organizei o layout para ser responsivo e integrei recursos visuais com a biblioteca AOS para criar animações suaves ao rolar a página. Também utilizei Google Fonts para personalizar a tipografia, Font Awesome para os ícones e incorporei o Google Maps para exibir a localização da empresa. O site conta com seções como apresentação, sobre, serviços, planos e contato, além de um botão flutuante de WhatsApp para facilitar a comunicação.",
        mediteText: 'Projeto que participei em colaboração com meu amigo, estruturei a parte de front-end, utilizando HTML5, CSS3 e Javascript, organizei o layout para ser responsivo, e criei animações para deixar o site mais iterativo, obtivemos sucesso na venda do site.'
    },
    en: {
        home: 'Home',
        projects: 'Projects',
        about: 'About',
        contact: 'Contact',
        hello: 'Hi, I am',
        viewProject: 'View Project',
        aboutMe: 'About Me',
        skills: 'Skills',
        aboutText: 'I am a web developer passionate about creating amazing digital experiences. Focused on front-end development, I am always seeking to learn new technologies and improve my skills. I am currently studying Computer Science at the Federal Technological University of Paraná (UTFPR) at the Medianeira campus, where I am learning C, and I have taken some internal mini-courses, such as Docker, React, and Node.js. I am also part of the Junior Computer Science Company (ADAEJ) as a project member, which is helping me greatly to improve my skills, learn to work in a team, and work with agile methodologies like Scrum, adapting to a real work environment. I am graduating as a Systems Analysis and Development Technician in the EAD format, from Cruzeiro do Sul.',
        rights: 'All rights reserved.',
        radarTrackText: "I developed and sold this website to a friend using HTML5, CSS3, and JavaScript. I structured the content semantically, organized the layout to be responsive, and integrated visuals with the AOS library to create smooth scrolling animations. I also used Google Fonts to customize the typography, Font Awesome for the icons, and incorporated Google Maps to display the company's location. The website features sections such as presentation, about, services, plans, and contact, as well as a floating WhatsApp button for easy communication.",
        mediteText: 'Project that I participated in collaboration with my friend, I structured the front-end part, using HTML5, CSS3 and Javascript, I organized the layout to be responsive, and I created animations to make the site more iterative, we were successful in selling the site.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');
    const langToggle = document.getElementById('langToggle');
    const langText = langToggle.querySelector('span');
    let currentLang = 'pt';

    // Função para atualizar o texto do botão
    function updateLangButton() {
        langText.textContent = currentLang.toUpperCase();
    }

    // Função para atualizar o idioma
    function updateLanguage() {
        // Função para preservar links no texto
        function preserveLinks(text) {
            return text
                .replace('Universidade Tecnologica Federal do Paraná (UTFPR)', 'Universidade Tecnologica Federal do Paraná (<a href="https://www.utfpr.edu.br/" target="_blank">UTFPR</a>)')
                .replace('Federal Technological University of Paraná (UTFPR)', 'Federal Technological University of Paraná (<a href="https://www.utfpr.edu.br/" target="_blank">UTFPR</a>)')
                .replace('Empresa Junior de Ciência da Computação (ADAEJ)', 'Empresa Junior de Ciência da Computação (<a href="https://adaej.com.br/" target="_blank">ADAEJ</a>)')
                .replace('Junior Computer Science Company (ADAEJ)', 'Junior Computer Science Company (<a href="https://adaej.com.br/" target="_blank">ADAEJ</a>)')
                .replace('Nicolas Brunismann', '<a href="https://github.com/NicoDemosaS" target="_blank">Nicolas Brunismann</a>');
        }

        // Atualizar textos simples
        const elements = {
            '.menu a[href="#home"]': translations[currentLang].home,
            '.menu a[href="#projects"]': translations[currentLang].projects,
            '.menu a[href="#about"]': translations[currentLang].about,
            '.menu a[href="#contact"]': translations[currentLang].contact,
            '.hero-content h1': translations[currentLang].hello,
            '.project-links a:first-child': translations[currentLang].viewProject,
            '.about-text h3': translations[currentLang].skills
        };

        // Atualizar textos simples
        for (let [selector, translation] of Object.entries(elements)) {
            document.querySelectorAll(selector).forEach(el => {
                el.textContent = translation;
            });
        }

        // Atualizar títulos das seções
        document.querySelectorAll('.section-title').forEach(el => {
            if (el.parentElement.closest('#about')) el.textContent = translations[currentLang].aboutMe;
            else if (el.parentElement.closest('#projects')) el.textContent = translations[currentLang].projects;
            else if (el.parentElement.closest('#contact')) el.textContent = translations[currentLang].contact;
        });

        // Função para gerar o texto "Sobre" com links
        function generateAboutText(lang) {
            const text = translations[lang].aboutText;
            return text.replace('(UTFPR)', '(<a href="https://www.utfpr.edu.br/" target="_blank">UTFPR</a>)')
                      .replace('(ADAEJ)', '(<a href="https://adaej.com.br/" target="_blank">ADAEJ</a>)');
        }

        // Função para gerar o texto do Medite com link
        function generateMediteText(lang) {
            const text = translations[lang].mediteText;
            return text.replace('Nicolas Brunismann', '<a href="https://github.com/NicoDemosaS" target="_blank">Nicolas Brunismann</a>');
        }

        // Atualizar texto sobre
        const aboutText = document.querySelector('.about-text p');
        if (aboutText) {
            aboutText.innerHTML = preserveLinks(translations[currentLang].aboutText);
        }

        // Atualizar descrições dos projetos
        const radarTrackDesc = document.querySelector('.project-card .project-content p');
        if (radarTrackDesc) {
            radarTrackDesc.textContent = translations[currentLang].radarTrackText;
        }

        const mediteDesc = document.querySelector('.project-card2 .project-content p');
        if (mediteDesc) {
            mediteDesc.innerHTML = preserveLinks(translations[currentLang].mediteText);
        }

        // Atualizar footer
        const footer = document.querySelector('.footer p');
        if (footer) {
            footer.textContent = `© 2025 Luan Costa. ${translations[currentLang].rights}`;
        }

        for (let [selector, translation] of Object.entries(elements)) {
            document.querySelectorAll(selector).forEach(el => {
                if (typeof translation === 'function') {
                    el.textContent = translation(el);
                } else {
                    el.textContent = translation;
                }
            });
        }
    }

    // Event listener para o botão de idioma
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        updateLangButton();
        updateLanguage();
    });

    // Toggle menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !hamburger.contains(e.target) && menu.classList.contains('active')) {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        }
    });

    // Inicializar o botão de idioma
    updateLangButton();
});
