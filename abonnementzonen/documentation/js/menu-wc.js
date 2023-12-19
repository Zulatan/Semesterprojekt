'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">abonnementzonen documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-e8efe3e38fc30537319ef2751ada556645e349cdf13c787d2965e1ef5904943960ad0fca22dcc62a7eca653ce4e472648e42a6484a4a3ceab714c9f67a27bf51"' : 'data-bs-target="#xs-components-links-module-AppModule-e8efe3e38fc30537319ef2751ada556645e349cdf13c787d2965e1ef5904943960ad0fca22dcc62a7eca653ce4e472648e42a6484a4a3ceab714c9f67a27bf51"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e8efe3e38fc30537319ef2751ada556645e349cdf13c787d2965e1ef5904943960ad0fca22dcc62a7eca653ce4e472648e42a6484a4a3ceab714c9f67a27bf51"' :
                                            'id="xs-components-links-module-AppModule-e8efe3e38fc30537319ef2751ada556645e349cdf13c787d2965e1ef5904943960ad0fca22dcc62a7eca653ce4e472648e42a6484a4a3ceab714c9f67a27bf51"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationSettingsModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationSettingsModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LandingpagePageModule.html" data-type="entity-link" >LandingpagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LandingpagePageModule-4731045700c70164feb79216c24314538006c3a41a8140983cb31b0863fc881a87b1b8581bd3d5ea926138f12ec8624875080ad34950976df17f523a71cd03f8"' : 'data-bs-target="#xs-components-links-module-LandingpagePageModule-4731045700c70164feb79216c24314538006c3a41a8140983cb31b0863fc881a87b1b8581bd3d5ea926138f12ec8624875080ad34950976df17f523a71cd03f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LandingpagePageModule-4731045700c70164feb79216c24314538006c3a41a8140983cb31b0863fc881a87b1b8581bd3d5ea926138f12ec8624875080ad34950976df17f523a71cd03f8"' :
                                            'id="xs-components-links-module-LandingpagePageModule-4731045700c70164feb79216c24314538006c3a41a8140983cb31b0863fc881a87b1b8581bd3d5ea926138f12ec8624875080ad34950976df17f523a71cd03f8"' }>
                                            <li class="link">
                                                <a href="components/LandingpagePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingpagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LandingpagePageRoutingModule.html" data-type="entity-link" >LandingpagePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LoginPageModule-7cb56557335994da7689972759e10e9a3903bef0c2aca5e4be0132a6d560a83c3ec63f2401b95bfec4de7bfcb13ac1091a01e5a1084c4717d174ea5e1c33c3d5"' : 'data-bs-target="#xs-components-links-module-LoginPageModule-7cb56557335994da7689972759e10e9a3903bef0c2aca5e4be0132a6d560a83c3ec63f2401b95bfec4de7bfcb13ac1091a01e5a1084c4717d174ea5e1c33c3d5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-7cb56557335994da7689972759e10e9a3903bef0c2aca5e4be0132a6d560a83c3ec63f2401b95bfec4de7bfcb13ac1091a01e5a1084c4717d174ea5e1c33c3d5"' :
                                            'id="xs-components-links-module-LoginPageModule-7cb56557335994da7689972759e10e9a3903bef0c2aca5e4be0132a6d560a83c3ec63f2401b95bfec4de7bfcb13ac1091a01e5a1084c4717d174ea5e1c33c3d5"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link" >LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegistrationPageModule.html" data-type="entity-link" >RegistrationPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RegistrationPageModule-b010b0744a3f2b1a9690c89e111ccd6b7cd8f4f937615629a80d5ad5b41f50d725b01df253363eb4ea448b3b1e5f47131a021b1fdbdebd0357f5fd54158f5be7"' : 'data-bs-target="#xs-components-links-module-RegistrationPageModule-b010b0744a3f2b1a9690c89e111ccd6b7cd8f4f937615629a80d5ad5b41f50d725b01df253363eb4ea448b3b1e5f47131a021b1fdbdebd0357f5fd54158f5be7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegistrationPageModule-b010b0744a3f2b1a9690c89e111ccd6b7cd8f4f937615629a80d5ad5b41f50d725b01df253363eb4ea448b3b1e5f47131a021b1fdbdebd0357f5fd54158f5be7"' :
                                            'id="xs-components-links-module-RegistrationPageModule-b010b0744a3f2b1a9690c89e111ccd6b7cd8f4f937615629a80d5ad5b41f50d725b01df253363eb4ea448b3b1e5f47131a021b1fdbdebd0357f5fd54158f5be7"' }>
                                            <li class="link">
                                                <a href="components/RegistrationPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrationPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegistrationPageRoutingModule.html" data-type="entity-link" >RegistrationPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageModule.html" data-type="entity-link" >Tab1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Tab1PageModule-f03313abe864882f4763851b1588726ea117f2d21a31dc8c75a835debd8f615eb911bb797d02350da1e3ae96412ce8e452a793eea5fb50d9cdf87ad06cfed6e1"' : 'data-bs-target="#xs-components-links-module-Tab1PageModule-f03313abe864882f4763851b1588726ea117f2d21a31dc8c75a835debd8f615eb911bb797d02350da1e3ae96412ce8e452a793eea5fb50d9cdf87ad06cfed6e1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab1PageModule-f03313abe864882f4763851b1588726ea117f2d21a31dc8c75a835debd8f615eb911bb797d02350da1e3ae96412ce8e452a793eea5fb50d9cdf87ad06cfed6e1"' :
                                            'id="xs-components-links-module-Tab1PageModule-f03313abe864882f4763851b1588726ea117f2d21a31dc8c75a835debd8f615eb911bb797d02350da1e3ae96412ce8e452a793eea5fb50d9cdf87ad06cfed6e1"' }>
                                            <li class="link">
                                                <a href="components/Tab1Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageRoutingModule.html" data-type="entity-link" >Tab1PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageModule.html" data-type="entity-link" >Tab2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Tab2PageModule-8c6a5f14f61eb0df77ba84265e452aa2444fcc559d7c9772050c7022af367f73c14cd24e00d1992118c30f137a53175bd095b8c737fac925a07139a8895bcad7"' : 'data-bs-target="#xs-components-links-module-Tab2PageModule-8c6a5f14f61eb0df77ba84265e452aa2444fcc559d7c9772050c7022af367f73c14cd24e00d1992118c30f137a53175bd095b8c737fac925a07139a8895bcad7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab2PageModule-8c6a5f14f61eb0df77ba84265e452aa2444fcc559d7c9772050c7022af367f73c14cd24e00d1992118c30f137a53175bd095b8c737fac925a07139a8895bcad7"' :
                                            'id="xs-components-links-module-Tab2PageModule-8c6a5f14f61eb0df77ba84265e452aa2444fcc559d7c9772050c7022af367f73c14cd24e00d1992118c30f137a53175bd095b8c737fac925a07139a8895bcad7"' }>
                                            <li class="link">
                                                <a href="components/Tab2Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageRoutingModule.html" data-type="entity-link" >Tab2PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageModule.html" data-type="entity-link" >Tab3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Tab3PageModule-b3ad6b4015f6b8e621924a673ff6d669e4bf913f226d42aef963f18e34a2fd71de10424167e6ef092500f847af1e36f0ea71abe7e1d4d0c235b0a50555b9e410"' : 'data-bs-target="#xs-components-links-module-Tab3PageModule-b3ad6b4015f6b8e621924a673ff6d669e4bf913f226d42aef963f18e34a2fd71de10424167e6ef092500f847af1e36f0ea71abe7e1d4d0c235b0a50555b9e410"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-b3ad6b4015f6b8e621924a673ff6d669e4bf913f226d42aef963f18e34a2fd71de10424167e6ef092500f847af1e36f0ea71abe7e1d4d0c235b0a50555b9e410"' :
                                            'id="xs-components-links-module-Tab3PageModule-b3ad6b4015f6b8e621924a673ff6d669e4bf913f226d42aef963f18e34a2fd71de10424167e6ef092500f847af1e36f0ea71abe7e1d4d0c235b0a50555b9e410"' }>
                                            <li class="link">
                                                <a href="components/Tab3Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageRoutingModule.html" data-type="entity-link" >Tab3PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link" >TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' : 'data-bs-target="#xs-components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' :
                                            'id="xs-components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link" >TabsPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PhotoService.html" data-type="entity-link" >PhotoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscriptionCreationService.html" data-type="entity-link" >SubscriptionCreationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscriptionService.html" data-type="entity-link" >SubscriptionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/UserPhoto.html" data-type="entity-link" >UserPhoto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});