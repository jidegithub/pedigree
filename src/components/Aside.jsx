import React from 'react'

export default function Aside() {
    return (
            <aside id="header-filter" className="header-filter search-filter trigger active" data-permanent="true">
                <div className="scrollable">
                    <div className="container-fluid">
                        <div className="filter-group mg-y-none-i">
                            <div className="row row--vertical-center row--space-between mg-none mg-bottom-lv2-i">
                                <h6 className="trigger__button mg-none-i font-sm" data-trigger="filter-type">Category</h6>

                                <button className="trigger__close button button--sm button--inverted button--pill button--icon--only mg-none-i">
                                    <i className="icon icon--sm icon--mg-sm icon--cross"></i>
                                </button>
                            </div>

                            <div id="filter-type" className="trigger">
                                <label for="type-vector" className="filter checkbox checkbox--xs active" data-field-name="type">
                                    <span className="checkbox__indicator"><i className="icon icon--check"></i></span>
                                    <span className="checkbox__link font-sm">Vectors</span>
                                </label>

                                <label for="type-photo" className="filter checkbox checkbox--xs" data-field-name="type">
                                    <span className="checkbox__indicator"><i className="icon icon--check"></i></span>
                                    <span className="checkbox__link font-sm">Photos</span>
                                </label>

                                <label for="type-psd" className="filter checkbox checkbox--xs active" data-field-name="type">
                                    <span className="checkbox__indicator"><i className="icon icon--check"></i></span>
                                    <span className="checkbox__link font-sm">Psd</span>
                                </label>

                                <label for="type-icon" className="filter checkbox checkbox--xs active" data-field-name="type">
                                    <span className="checkbox__indicator"><i className="icon icon--check"></i></span>
                                    <span className="checkbox__link font-sm">Icons</span>
                                </label>
                            </div>
                        </div>

                        <div className="filter-group mg-y-none-i">
                            <h6 className="mg-none font-sm">License</h6>

                            <div id="filter-selection" className="trigger">
                                <label for="selection-1" className="filter checkbox checkbox--xs" data-field-name="selection">
                                    <span className="checkbox__indicator">
                                        <i className="icon icon--check"></i>
                                    </span>

                                    <span className="checkbox__link font-sm selection selection--text">Free</span>
                                </label>
                            </div>

                            <div id="filter-premium" className="trigger">
                                <label for="premium-1" className="filter checkbox checkbox--xs" data-field-name="premium">
                                    <span className="checkbox__indicator">
                                        <i className="icon icon--check"></i>
                                    </span>

                                    <span className="checkbox__link font-sm premium premium--text">
                                        <i className="icon icon--premium"></i>
                                        Premium
                        </span>
                                </label>
                            </div>
                        </div>

                        <div className="filter-group mg-y-none-i">
                            <h6 className="mg-none font-sm">Sort by</h6>

                            <div id="filter-sort" className="trigger">
                                <label for="sort-popular" className="filter radio radio--xs" data-field-name="sort">
                                    <span className="radio__indicator"></span>
                                    <span className="radio__link font-sm">Popular</span>
                                </label>

                                <label for="sort-recent" className="filter radio radio--xs" data-field-name="sort">
                                    <span className="radio__indicator"></span>
                                    <span className="radio__link font-sm">Recent</span>
                                </label>
                            </div>
                        </div>

                        <div className="filter-group collection-search mg-y-none-i" style="display: none !important;">
                            <h6 className="trigger__button font-sm" data-trigger="filter-type">Type</h6>

                            <div id="filter-format" className="trigger">
                                <label for="format-search" className="filter radio radio--xs radio--checkbox active" data-field-name="format">
                                    <span className="radio__indicator"></span>
                                    <span className="radio__link font-sm">Resources</span>
                                </label>

                                <label for="format-collections" className="filter radio radio--xs radio--checkbox" data-field-name="format">
                                    <span className="radio__indicator"></span>
                                    <span className="radio__link font-sm">Collections</span>
                                </label>
                            </div>
                        </div>

                        <div className="filter-group mg-y-none-i">
                            <h6 className="mg-none font-sm">Display options</h6>

                            <ul id="layout" className="list--horizontal mg-right-lv2">
                                <li>
                                    <button data-layout="fixed" className="button button--inverted button--icon--only button--xs mg-none">
                                        <i className="icon icon--md icon--mg-xs icon--squares"></i>
                                    </button>
                                </li>
                                <li>
                                    <button data-layout="pixabay" className="button button--inverted button--icon--only button--xs mg-none active">
                                        <i className="icon icon--md icon--mg-xs icon--pixabay"></i>
                                    </button>
                                </li>
                            </ul>

                            <script>if (window.showcase) window.showcase.setButton();</script>
                        </div>


                        <div className="filter-group mg-y-none-i">
                            <h6 className="mg-none font-sm">Publish date</h6>

                            <div className="dropdown dropdown--sm dropdown--bottom-left">
                                <select className="filter-ignore" id="dates-select">
                                    <option value="any" selected="">Any</option>
                                    <option value="2019-07-07">Last 30 days</option>
                                    <option value="2019-05-06">Last 3 months</option>
                                    <option value="2018-08-06">Last year</option>
                                </select><div className="dropdown__container">
                                    <p className="dropdown__button">Any</p>
                                    <div className="dropdown__select">
                                        <div className="scrollable">
                                            <ul>
                                                <li data-value="any">Any</li>
                                                <li data-value="2019-07-07">Last 30 days</li>
                                                <li data-value="2019-05-06">Last 3 months</li>
                                                <li data-value="2018-08-06">Last year</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="filter-group mg-y-none-i">
                            <h6 className="mg-none font-sm">People</h6>

                            <div id="filter-people" className="trigger disabled">
                                <label for="people-exclude" className="filter radio radio--xs radio--checkbox" data-field-name="people">
                                    <span className="radio__indicator"></span>
                                    <span className="radio__link font-sm">Exclude</span>
                                </label>

                                <label for="people-include" className="filter radio radio--xs radio--checkbox" data-field-name="people">
                                    <span className="radio__indicator"></span>
                                    <span className="radio__link font-sm">Include</span>
                                </label>
                            </div>
                        </div>

                        <div className="filter-group mg-y-none-i">
                            <h6 className="mg-none font-sm">Orientation</h6>

                            <div id="filter-orientation">
                                <label for="orientation-landscape" className="filter checkbox checkbox--md" data-field-name="orientation">
                                    <span className="checkbox__indicator">
                                        <i className="icon icon--o-horizontal"></i>
                                    </span>
                                    <span className="checkbox__link font-sm">Horizontal</span>
                                </label>

                                <label for="orientation-portrait" className="filter checkbox checkbox--md" data-field-name="orientation">
                                    <span className="checkbox__indicator">
                                        <i className="icon icon--o-vertical"></i>
                                    </span>
                                    <span className="checkbox__link font-sm">Vertical</span>
                                </label>

                                <label for="orientation-square" className="filter checkbox checkbox--md" data-field-name="orientation">
                                    <span className="checkbox__indicator">
                                        <i className="icon icon--o-square"></i>
                                    </span>
                                    <span className="checkbox__link font-sm">Square</span>
                                </label>

                                <label for="orientation-panoramic" className="filter checkbox checkbox--md" data-field-name="orientation">
                                    <span className="checkbox__indicator">
                                        <i className="icon icon--o-panoramic"></i>
                                    </span>
                                    <span className="checkbox__link font-sm">Panoramic</span>
                                </label>
                            </div>
                        </div>

                        <div className="filter-group">
                            <h6 className="mg-none font-sm">Color</h6>
                            <ul id="filter-colors" className="colors">
                                <li>
                                    <label for="color-red" className="filter color radio radio--xs radio--checkbox" data-field-name="color">
                                        <span className="radio__indicator" style="background-color: #FB5252;"></span>
                                    </label>
                                </li>

                                <li>
                                    <label for="color-orange" className="filter color radio radio--xs radio--checkbox" data-field-name="color">
                                        <span className="radio__indicator" style="background-color: #FCA120;"></span>
                                    </label>
                                </li>

                                <li>
                                    <label for="color-yellow" className="filter color radio radio--xs radio--checkbox" data-field-name="color">
                                        <span className="radio__indicator" style="background-color: #FCDB7E;"></span>
                                    </label>
                                </li>

                                <li>
                                    <label for="color-green" className="filter color radio radio--xs radio--checkbox" data-field-name="color">
                                        <span className="radio__indicator" style="background-color: #4AD295;"></span>
                                    </label>
                                </li>

                                <li>
                                    <label for="color-cyan" className="filter color radio radio--xs radio--checkbox" data-field-name="color">
                                        <span className="radio__indicator" style="background-color: #92CDFA;"></span>
                                    </label>
                                </li>

                                <li>
                                    <label for="color-blue" className="filter color radio radio--xs radio--checkbox" data-field-name="color">
                                        <span className="radio__indicator" style="background-color: #1273EB;"></span>
                                    </label>
                                </li>

                                <li>
                                    <label for="color-purple" className="filter color radio radio--xs radio--checkbox" data-field-name="color">
                                        <span className="radio__indicator" style="background-color: #8080F1;"></span>
                                    </label>
                                </li>

                                <li>
                                    <label for="color-white" className="filter color radio radio--xs radio--checkbox" data-field-name="color">
                                        <span className="radio__indicator" style="background-color: #ffffff;"></span>
                                    </label>
                                </li>

                                <li>
                                    <label for="color-gray" className="filter color radio radio--xs radio--checkbox" data-field-name="color">
                                        <span className="radio__indicator" style="background-color: #BAC8D3;"></span>
                                    </label>
                                </li>

                                <li>
                                    <label for="color-black" className="filter color radio radio--xs radio--checkbox" data-field-name="color">
                                        <span className="radio__indicator" style="background-color: #1D262D;"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
    )
}
