import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ActivitiesPage = () => (
    <>
    <Header />
    <section className="section-padding-25">
        <h2 className="section-heading">Sinh Hoạt Giáo Xứ</h2>
        <iframe className="center-50" title="Sinh Hoạt Giáo Xứ" src="https://docs.google.com/document/d/16bWSHAs9ToINtqDxRll40msC2P7ptzqQ92JpXCXurTY/edit?usp=sharing"
            frameBorder="0"
            style={{'width':"90%", 'height':"1000px"}}/>
    </section>
    <Footer />
    </>
);

export default ActivitiesPage;
