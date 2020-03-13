import $ from 'jquery';


export default class Artist {
    constructor () {
        this.initEls();
        this.initEvents();
    }

    initEls () {
        this.$els = {
            artistName: $('.js-name'),
            artistFan: $('.js-fan'),
            container: $('.js-container'),
            url : 'https://api.deezer.com/artist/78598292/',
            
        };
        
    };

    initEvents () {
        this.getArtist();
    };

    getArtist () {
        const api = {
            endpoint: `${this.$els.url}`,
            /*params: {
                'per_page': 1,
            }*/
        };

        $.ajaxSetup({cache: false});
        $.ajax({
            url : api.endpoint , 
            //data : api.params,
            type: "GET",
            contentType : "JSON",

            })

            .then((response) => {
                //console.log(response.data[0].name);
                console.log(response);
                // let id = response.data[0].id;
                // console.log(id);
                // console.log(this.name);
                // this.loadIdCity(id); 
            })
            .catch((e) => {
                console.log('error with the artist :',e);
            });

        // $.getJSON(api.endpoint)
        //     .then((response) => {
        //         console.log(response);
        //         this.renderQuote(response);
        //     })
        //     .catch((e) => {
        //         console.log('error with the artist:', e);
        //     });
    };

    renderQuote (artist, fan) {
        this.$els.artistName.prepend(artist);
        this.$els.artistFan.text(fan);
        this.$els.container.addClass('is-ready');

    }


}