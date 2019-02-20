import React from 'react';

const Pagrindinis = (props) => {

   
    return (
        <div className="home">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-8">
                    
            <div className="home__hi">
                <h2 className="is-size-3 is-size-4-mobile">UBER REGISTRACIJA</h2>
                <p className="">{props.procentai}%</p>
                <h2 className="is-size-3 is-size-4-mobile">PATENKINŲ KLIENTŲ</h2>
            </div>
                
                </div>
                </div>
                <div className="columns is-centered">
                    <div className="column is-6">
                    <p class="tagline">Bacon ipsum dolor amet pastrami chicken jerky short ribs tail. Burgdoggen strip steak tail, prosciutto turkey meatloaf chicken swine flank pork belly ground round. Ground round chuck strip steak salami kevin corned beef pork sirloin meatball alcatra bacon sausage boudin rump pork belly. </p>
                    </div>
            </div>
            
        </div>
        <div className="footer">
        </div>
        </div>
    );
};

export default Pagrindinis;