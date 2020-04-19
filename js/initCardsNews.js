
function initCardsNews(){
    const noticias = [
        {
            capa: 'https://d9hhrg4mnvzow.cloudfront.net/mdu.dasa.com.br/3b7b6ed2-0205-4720-882d-6ef38408b505/4375f3d6-bg_000000000000000000001.png',
            titulo: 'Coronavírus: O que é, sintomas e como se prevenir da Covid 19',
            url: 'https://dasa.com.br/coronavirus',
            data: '27/04/2020',
            descricao: 'Confira o Guia Completo sobre o novo Coronavírus. Informações atualizadas com opinião de...'     
        },
        {
            capa: 'https://abrilsaude.files.wordpress.com/2020/03/40_spotify.png?w=232&h=232&crop=1',
            titulo: 'O contra-ataque ao coronavírus – podcast',
            url: 'https://saude.abril.com.br/podcast/o-contra-ataque-ao-coronavirus-podcast/',
            data: '26/03/2020',
            descricao: 'O contra-ataque ao coronavírus – podcast. Qual a lógica por trás de medidas como a de isolamento social ...'     
        },
        {
            capa: 'https://s2.glbimg.com/2jwEph8aescJxXIg5ElGuWFyUMU=/0x0:1280x853/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/l/k/SdwdADSA2IkN3mn3EpLw/teste-rapido-corona.jpg',
            titulo: 'Pernambuco tem mais 266 casos de coronavírus e chega a 2.459 confirmações; número de mortes sobe para 216',
            url: 'https://g1.globo.com/pe/pernambuco/noticia/2020/04/19/pernambuco-tem-mais-266-casos-de-coronavirus-e-chega-a-2459-confirmacoes-numero-de-mortes-sobe-para-216.ghtml',
            data: '19/04/2020',
            descricao: 'Pernambuco tem mais 266 casos de coronavírus e chega a 2.459 confirmações; número de mortes sobe para 216. Secretaria Estadual de...'     
        },
        {
            capa: 'https://s2.glbimg.com/K3cN6dLPOCiC6UvGaWbGprKZBW8=/0x0:620x410/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/o/d/jBVyYzTRi8ea4jIzfIFA/testes-lacen-novo-coronavirus-foto-robson-valverde-ses-20200326-1275746169.jpg',
            titulo: 'Bahia registra 30 novos casos de coronavírus; número de mortes sobe para 44',
            url: 'https://s2.glbimg.com/K3cN6dLPOCiC6UvGaWbGprKZBW8=/0x0:620x410/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/o/d/jBVyYzTRi8ea4jIzfIFA/testes-lacen-novo-coronavirus-foto-robson-valverde-ses-20200326-1275746169.jpg',
            data: '19/04/2020',
            descricao: 'A Bahia registrou trinta novos casos de coronavírus e chegou a 1,230 mil pessoas contaminadas com a doença, segundo boletim divulgado...'     
        },
        {
            capa: 'https://s2.glbimg.com/TqYEwKnFcMaKhll8XRb27nf3Zww=/0x0:1800x1406/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/S/r/cpazPGQAytk0HH7VyXRA/coronavirus-visao-microscopio.jpg',
            titulo: 'Últimas notícias sobre coronavírus na região de Piracicaba em 19 de abril',
            url: 'https://g1.globo.com/bemestar/coronavirus/noticia/2020/04/19/europa-ultrapassa-marca-de-100-mil-mortos-por-covid-19-aponta-universidade.ghtml',
            data: '19/04/2020',
            descricao: 'Neste domingo (19), a região de Piracicaba (SP) soma 69 casos confirmados de novo coronavírus nas cidades de Piracicaba, Limeira, São ...'     
        }
    ];

    const templateCard = document.querySelector('.templates .card-ancor');
    const noticiasWrapper = document.querySelector('.noticias-wrapper');

    noticias.forEach((news)=>{
        const card = templateCard.cloneNode(true);
        const capa = card.querySelector('.card-capa');
        const titulo = card.querySelector('.card-body .titulo');
        const subtitulo = card.querySelector('.card-body .subtitulo');
        const descricao = card.querySelector('.card-body .descrisao');

        card.setAttribute('href', news.url);
        capa.style.backgroundImage = `url('${news.capa}')`;
        titulo.innerText = news.titulo;
        subtitulo.innerText = news.data;
        descricao.innerText = news.descricao;

        noticiasWrapper.appendChild(card);
    });

}

export default initCardsNews;