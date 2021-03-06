import React from "react";
import { Link } from "@material-ui/core";
import "./main.scss";
import DoveImg from "../../../../assets/icons/logo_dark.png";

function Main() {
    return (
        <div className="landing-main">
            <div className="landing-main-img-wrap">
                <img src={DoveImg} alt="" />
            </div>
            <div className="landing-main-btns-wrap">
                <Link href="#" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Launching soon</p>
                    </div>
                </Link>
                <Link href="https://docs.dovedao.finance/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Documentation</p>
                    </div>
                </Link>
            </div>
            <div className="landing-main-title-wrap">
                <p>Dove Finance</p>
            </div>
            <div className="landing-main-help-text-wrap">
                <p>A decentralized reserve currency built on Cronos.</p>
                <p>Stake and earn auto compounding interest</p>
            </div>
        </div>
    );
}

export default Main;
