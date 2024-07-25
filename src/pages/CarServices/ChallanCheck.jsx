import React from "react";
import './carServices.css';
import Challan from "../../components/Challan/Challan";
import Promise from "../../components/Promise/Promise";
import PageInformation from "../../components/PageInformation/PageInformation";
import PleaseNote from "../../components/PleaseNote/PleaseNote";
import AboutProcess from "../../components/AboutProcess/AboutProcess";
import ReviewRating from "../../components/ReviewRating/ReviewRating";
import NewlyLaunched from "../../components/NewlyLaunched/NewlyLaunched";
import Accordion from "../../components/Accordion/Accordion";
import Container from 'react-bootstrap/Container';

export default function ChallanCheck() {
    return (
        <Container className="mainDiv">
            <Challan />
            <Promise />
            <PageInformation />
            <PleaseNote />
            <AboutProcess />
            <ReviewRating />
            <NewlyLaunched />
            <Accordion />
        </Container>

    )
}