import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const HomeIndexPage = () => {
    useEffect(function () {
        // Main Template Color
        var brandPrimary = '#33b35a';


        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var LINECHART = window.jQuery('#lineCahrt');
        new window.Chart(LINECHART, {
            type: 'line',
            options: {
                legend: {
                    display: false
                }
            },
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: "rgba(77, 193, 75, 0.4)",
                        borderColor: brandPrimary,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: brandPrimary,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: brandPrimary,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 0,
                        data: [50, 20, 60, 31, 52, 22, 40],
                        spanGaps: false
                    },
                    {
                        label: "My First dataset",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 30, 81, 46, 55, 30],
                        spanGaps: false
                    }
                ]
            }
        });


        // ------------------------------------------------------- //
        // Pie Chart
        // ------------------------------------------------------ //
        var PIECHART = window.jQuery('#pieChart');
        new window.Chart(PIECHART, {
            type: 'doughnut',
            data: {
                labels: [
                    "First",
                    "Second",
                    "Third"
                ],
                datasets: [
                    {
                        data: [300, 50, 100],
                        borderWidth: [1, 1, 1],
                        backgroundColor: [
                            brandPrimary,
                            "rgba(75,192,192,1)",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            brandPrimary,
                            "rgba(75,192,192,1)",
                            "#FFCE56"
                        ]
                    }]
            }
        });

    }, []);
    return (
        <Fragment>
            <section className="dashboard-counts section-padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2 col-md-4 col-6">
                            <div className="wrapper count-title d-flex">
                                <div className="icon"><i className="icon-user"></i></div>
                                <div className="name"><strong className="text-uppercase">New Clients</strong><span>Last 7 days</span>
                                    <div className="count-number">25</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6">
                            <div className="wrapper count-title d-flex">
                                <div className="icon"><i className="icon-padnote"></i></div>
                                <div className="name"><strong className="text-uppercase">Work Orders</strong><span>Last 5 days</span>
                                    <div className="count-number">400</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6">
                            <div className="wrapper count-title d-flex">
                                <div className="icon"><i className="icon-check"></i></div>
                                <div className="name"><strong className="text-uppercase">New Quotes</strong><span>Last 2 months</span>
                                    <div className="count-number">342</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6">
                            <div className="wrapper count-title d-flex">
                                <div className="icon"><i className="icon-bill"></i></div>
                                <div className="name"><strong className="text-uppercase">New Invoices</strong><span>Last 2 days</span>
                                    <div className="count-number">123</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6">
                            <div className="wrapper count-title d-flex">
                                <div className="icon"><i className="icon-list"></i></div>
                                <div className="name"><strong className="text-uppercase">Open Cases</strong><span>Last 3 months</span>
                                    <div className="count-number">92</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6">
                            <div className="wrapper count-title d-flex">
                                <div className="icon"><i className="icon-list-1"></i></div>
                                <div className="name"><strong className="text-uppercase">New Cases</strong><span>Last 7 days</span>
                                    <div className="count-number">70</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dashboard-header section-padding">
                <div className="container-fluid">
                    <div className="row d-flex align-items-md-stretch">
                        <div className="col-lg-3 col-md-6">
                            <div className="card to-do">
                                <h2 className="display h4">To do List</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <ul className="check-lists list-unstyled">
                                    <li className="d-flex align-items-center">
                                        <input type="checkbox" id="list-1" name="list-1" className="form-control-custom" />
                                        <label htmlFor="list-1">Similique sunt in culpa qui officia</label>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <input type="checkbox" id="list-2" name="list-2" className="form-control-custom" />
                                        <label htmlFor="list-2">Ed ut perspiciatis unde omnis iste</label>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <input type="checkbox" id="list-3" name="list-3" className="form-control-custom" />
                                        <label htmlFor="list-3">At vero eos et accusamus et iusto </label>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <input type="checkbox" id="list-4" name="list-4" className="form-control-custom" />
                                        <label htmlFor="list-4">Explicabo Nemo ipsam voluptatem</label>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <input type="checkbox" id="list-5" name="list-5" className="form-control-custom" />
                                        <label htmlFor="list-5">Similique sunt in culpa qui officia</label>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <input type="checkbox" id="list-6" name="list-6" className="form-control-custom" />
                                        <label htmlFor="list-6">At vero eos et accusamus et iusto </label>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <input type="checkbox" id="list-7" name="list-7" className="form-control-custom" />
                                        <label htmlFor="list-7">Similique sunt in culpa qui officia</label>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <input type="checkbox" id="list-8" name="list-8" className="form-control-custom" />
                                        <label htmlFor="list-8">Ed ut perspiciatis unde omnis iste</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card project-progress">
                                <h2 className="display h4">Project Beta progress</h2>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="pie-chart">
                                    <canvas id="pieChart" width="300" height="300"> </canvas>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 flex-lg-last flex-md-first align-self-baseline">
                            <div className="card sales-report">
                                <h2 className="display h4">Sales marketing report</h2>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet officiis</p>
                                <div className="line-chart">
                                    <canvas id="lineCahrt"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="statistics">
                <div className="container-fluid">
                    <div className="row d-flex">
                        <div className="col-lg-4">
                            <div className="card income text-center">
                                <div className="icon"><i className="icon-line-chart"></i></div>
                                <div className="number">126,418</div><strong className="text-primary">All Income</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card data-usage">
                                <h2 className="display h4">Monthly Usage</h2>
                                <div className="row d-flex align-items-center">
                                    <div className="col-sm-6">
                                        <div id="progress-circle" className="d-flex align-items-center justify-content-center"></div>
                                    </div>
                                    <div className="col-sm-6"><strong className="text-primary">80.56 Gb</strong><small>Current Plan</small><span>100 Gb Monthly</span></div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card user-activity">
                                <h2 className="display h4">User Activity</h2>
                                <div className="number">210</div>
                                <h3 className="h4 display">Social Users</h3>
                                <div className="progress">
                                    <div role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar bg-primary"></div>
                                </div>
                                <div className="page-statistics d-flex justify-content-between">
                                    <div className="page-statistics-left"><span>Pages Visits</span><strong>230</strong></div>
                                    <div className="page-statistics-right"><span>New Visits</span><strong>73.4%</strong></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-30px mb-30px">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div id="new-updates" className="card updates recent-updated">
                                <div id="updates-header" className="card-header d-flex justify-content-between align-items-center">
                                    <h2 className="h5 display"><Link data-toggle="collapse" data-parent="#new-updates" to="#updates-box" aria-expanded="true" aria-controls="updates-box">News Updates</Link></h2><Link data-toggle="collapse" data-parent="#new-updates" to="#updates-box" aria-expanded="true" aria-controls="updates-box"><i className="fa fa-angle-down"></i></Link>
                                </div>
                                <div id="updates-box" role="tabpanel" className="collapse show">
                                    <ul className="news list-unstyled">
                                        <li className="d-flex justify-content-between">
                                            <div className="left-col d-flex">
                                                <div className="icon"><i className="icon-rss-feed"></i></div>
                                                <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                            <div className="right-col text-right">
                                                <div className="update-date">24<span className="month">Jan</span></div>
                                            </div>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <div className="left-col d-flex">
                                                <div className="icon"><i className="icon-rss-feed"></i></div>
                                                <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                            <div className="right-col text-right">
                                                <div className="update-date">24<span className="month">Jan</span></div>
                                            </div>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <div className="left-col d-flex">
                                                <div className="icon"><i className="icon-rss-feed"></i></div>
                                                <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                            <div className="right-col text-right">
                                                <div className="update-date">24<span className="month">Jan</span></div>
                                            </div>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <div className="left-col d-flex">
                                                <div className="icon"><i className="icon-rss-feed"></i></div>
                                                <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                            <div className="right-col text-right">
                                                <div className="update-date">24<span className="month">Jan</span></div>
                                            </div>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <div className="left-col d-flex">
                                                <div className="icon"><i className="icon-rss-feed"></i></div>
                                                <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                            <div className="right-col text-right">
                                                <div className="update-date">24<span className="month">Jan</span></div>
                                            </div>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <div className="left-col d-flex">
                                                <div className="icon"><i className="icon-rss-feed"></i></div>
                                                <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                            <div className="right-col text-right">
                                                <div className="update-date">24<span className="month">Jan</span></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div id="daily-feeds" className="card updates daily-feeds">
                                <div id="feeds-header" className="card-header d-flex justify-content-between align-items-center">
                                    <h2 className="h5 display"><Link data-toggle="collapse" data-parent="#daily-feeds" to="#feeds-box" aria-expanded="true" aria-controls="feeds-box">Your daily Feeds </Link></h2>
                                    <div className="right-column">
                                        <div className="badge badge-primary">10 messages</div><Link data-toggle="collapse" data-parent="#daily-feeds" to="#feeds-box" aria-expanded="true" aria-controls="feeds-box"><i className="fa fa-angle-down"></i></Link>
                                    </div>
                                </div>
                                <div id="feeds-box" role="tabpanel" className="collapse show">
                                    <div className="feed-box">
                                        <ul className="feed-elements list-unstyled">
                                            <li className="clearfix">
                                                <div className="feed d-flex justify-content-between">
                                                    <div className="feed-body d-flex justify-content-between"><Link to="#" className="feed-profile"><img src="/theme/img/avatar-5.jpg" alt="person" className="img-fluid rounded-circle" /></Link>
                                                        <div className="content"><strong>Aria Smith</strong><small>Posted a new blog </small>
                                                            <div className="full-date"><small>Today 5:60 pm - 12.06.2014</small></div>
                                                        </div>
                                                    </div>
                                                    <div className="date"><small>5min ago</small></div>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <div className="feed d-flex justify-content-between">
                                                    <div className="feed-body d-flex justify-content-between"><Link to="#" className="feed-profile"><img src="/theme/img/avatar-2.jpg" alt="person" className="img-fluid rounded-circle" /></Link>
                                                        <div className="content"><strong>Frank Williams</strong><small>Posted a new blog </small>
                                                            <div className="full-date"><small>Today 5:60 pm - 12.06.2014</small></div>
                                                            <div className="CTAs"><Link to="#" className="btn btn-xs btn-dark"><i className="fa fa-thumbs-up"> </i>Like</Link><Link to="#" className="btn btn-xs btn-dark"><i className="fa fa-heart"> </i>Love</Link></div>
                                                        </div>
                                                    </div>
                                                    <div className="date"><small>5min ago</small></div>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <div className="feed d-flex justify-content-between">
                                                    <div className="feed-body d-flex justify-content-between"><Link to="#" className="feed-profile"><img src="/theme/img/avatar-3.jpg" alt="person" className="img-fluid rounded-circle" /></Link>
                                                        <div className="content"><strong>Ashley Wood</strong><small>Posted a new blog </small>
                                                            <div className="full-date"><small>Today 5:60 pm - 12.06.2014</small></div>
                                                        </div>
                                                    </div>
                                                    <div className="date"><small>5min ago</small></div>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <div className="feed d-flex justify-content-between">
                                                    <div className="feed-body d-flex justify-content-between"><Link to="#" className="feed-profile"><img src="/theme/img/avatar-1.jpg" alt="person" className="img-fluid rounded-circle" /></Link>
                                                        <div className="content"><strong>Jason Doe</strong><small>Posted a new blog </small>
                                                            <div className="full-date"><small>Today 5:60 pm - 12.06.2014</small></div>
                                                        </div>
                                                    </div>
                                                    <div className="date"><small>5min ago</small></div>
                                                </div>
                                                <div className="message-card"> <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</small></div>
                                                <div className="CTAs pull-right"><Link to="#" className="btn btn-xs btn-dark"><i className="fa fa-thumbs-up"> </i>Like</Link></div>
                                            </li>
                                            <li className="clearfix">
                                                <div className="feed d-flex justify-content-between">
                                                    <div className="feed-body d-flex justify-content-between"><Link to="#" className="feed-profile"><img src="/theme/img/avatar-6.jpg" alt="person" className="img-fluid rounded-circle" /></Link>
                                                        <div className="content"><strong>Sam Martinez</strong><small>Posted a new blog </small>
                                                            <div className="full-date"><small>Today 5:60 pm - 12.06.2014</small></div>
                                                        </div>
                                                    </div>
                                                    <div className="date"><small>5min ago</small></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div id="recent-activities-wrapper" className="card updates activities">
                                <div id="activites-header" className="card-header d-flex justify-content-between align-items-center">
                                    <h2 className="h5 display"><Link data-toggle="collapse" data-parent="#recent-activities-wrapper" to="#activities-box" aria-expanded="true" aria-controls="activities-box">Recent Activities</Link></h2><Link data-toggle="collapse" data-parent="#recent-activities-wrapper" to="#activities-box" aria-expanded="true" aria-controls="activities-box"><i className="fa fa-angle-down"></i></Link>
                                </div>
                                <div id="activities-box" role="tabpanel" className="collapse show">
                                    <ul className="activities list-unstyled">
                                        <li>
                                            <div className="row">
                                                <div className="col-4 date-holder text-right">
                                                    <div className="icon"><i className="icon-clock"></i></div>
                                                    <div className="date"> <span>6:00 am</span><span className="text-info">6 hours ago</span></div>
                                                </div>
                                                <div className="col-8 content"><strong>Meeting</strong>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.                </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div className="col-4 date-holder text-right">
                                                    <div className="icon"><i className="icon-clock"></i></div>
                                                    <div className="date"> <span>6:00 am</span><span className="text-info">6 hours ago</span></div>
                                                </div>
                                                <div className="col-8 content"><strong>Meeting</strong>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.                </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div className="col-4 date-holder text-right">
                                                    <div className="icon"><i className="icon-clock"></i></div>
                                                    <div className="date"> <span>6:00 am</span><span className="text-info">6 hours ago</span></div>
                                                </div>
                                                <div className="col-8 content"><strong>Meeting</strong>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.                </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div className="col-4 date-holder text-right">
                                                    <div className="icon"><i className="icon-clock"></i></div>
                                                    <div className="date"> <span>6:00 am</span><span className="text-info">6 hours ago</span></div>
                                                </div>
                                                <div className="col-8 content"><strong>Meeting</strong>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.                </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default HomeIndexPage