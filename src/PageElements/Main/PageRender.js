import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AboutUs, Statute, Reports, Archive, News,  Publications, Photos, Activities, Partners } from "./Components"

export function PageRender() {
    return (
        <div className="full__info__container">
            <Switch>
                <Route path="/ustav">
                    <Statute />
                </Route>
                <Route path="/otcet">
                    <Reports />
                </Route>
                <Route path="/arhiv">
                    <Archive />
                </Route>
                <Route path="/novosti">
                    <News />
                </Route>
                <Route path="/publicatii">
                    <Publications />
                </Route>
                <Route path="/fotografii">
                    <Photos />
                </Route>
                <Route path="/deiat">
                    <Activities />
                </Route>
                <Route path="/druzia">
                    <Partners />
                </Route>
                <Route path="/">
                    <AboutUs />
                </Route>
            </Switch>
        </div>
    )
  }