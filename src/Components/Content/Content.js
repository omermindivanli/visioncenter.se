import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
    render() {
        return (
            <section className="container">
                <hr class="featurette-divider"></hr>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Vad Vision Center är... <span class="text-muted"> För Alla</span></h2>
                        <p className="lead">Vision Center riktar sig i första hand till ungdomar som riskerar att hamna i ett destruktivt liv men vi vänder oss också till kriminella och missbrukare som bestämt sig för att starta ett nytt ärligt och drogfritt liv.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" src="http://x-conshaninge.se/x/wp-content/uploads/2017/04/fritids.jpg" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
                    </div>
                </div>

                <hr className="featurette-divider"></hr>

                <div className="row featurette">
                    <div className="col-md-7 push-md-5">
                        <h2 className="featurette-heading">Vision Center arbetar i brottsförebyggande syfte. <span class="text-muted">Bli Vänner...</span></h2>
                        <p className="lead">Vi kämpar för att vara en god resurs för ungdomar och deras föräldrar. Vi SER ungdomarna som kommer till vår verksamhet eller våra aktiviteter. Respekten måste vara ömsesidig för att få ungdomarnas förtroende.</p>
                    </div>
                    <div className="col-md-5 pull-md-7">
                        <img className="featurette-image img-fluid mx-auto" src="https://haninge.sd.se/wp-content/uploads/sites/41/2014/08/Xcon.jpg" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
                    </div>
                </div>

                <hr className="featurette-divider"></hr>

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Vision Centers grundare och eldsjäl. <span class="text-muted"> Hej...</span></h2>
                        <p className="lead">Vi har uppsökande verksamhet på anstalter, behandlingshem m.m. där vi ger föreläsningar om missbrukets baksidor samt ger information om den hjälp vi kan ge för att de ska kunna bygga upp ett nytt liv utan droger och kriminalitet. Vårt mål är att kunna motivera de intagna till att livet är för värdefullt för att slängas bort. Vi är en av många organisationer som kan hjälpa dem till att få styrkan att leva enligt samhällets normer och även känna att de trivs där.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" src="https://mitti.se/images/849975-1200x630.jpeg" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
                    </div>
                </div>

                <hr className="featurette-divider"></hr>
            </section>
        );
    }
}

export default Content;
